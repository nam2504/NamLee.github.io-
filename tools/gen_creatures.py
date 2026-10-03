#!/usr/bin/env python3
"""Generate creature art with the Gemini image API from the spec JSON.

Prompt = STYLE BLOCK + subject + NEGATIVE BLOCK + per-creature negative
(creature-bible.md 11.3). Reference images are attached when present:
  art/style/STYLE-0N.png        (hand-edited style anchors)
  art/final/cr_sun_XX.png       (chosen, hand-edited previous creature)

Usage:
  export GEMINI_API_KEY=...
  python3 tools/gen_creatures.py --ids cr_sun_01 --n 4
  python3 tools/gen_creatures.py --ids cr_sun_01 --dry-run   # print prompt only

Output: art/raw/<id>/<timestamp>_<k>.png + art/raw/<id>/log.jsonl
Stdlib only.
"""
import argparse, base64, datetime, json, os, re, sys, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPEC = ROOT / "ideas/creatures/sunlit-L01-L10.md"
API = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
# "nano-banana-pro" in the spec. Override with --model if Google renames it.
DEFAULT_MODEL = "gemini-3-pro-image-preview"

STYLE_BLOCK = (
    "Cute-weird deep-sea creature mascot for a cozy idle desktop game. Flat vector illustration, "
    "clean bold dark outline of uniform thickness, 4-5 flat colors with one simple cel-shade step "
    "and one small highlight, no gradients except a soft glow if specified. Side view facing right, "
    "full body centered, whole creature visible with margin. Big readable shapes, readable as a "
    "small 64-pixel icon. Large round eyes with a white catchlight. Plain solid #FF00FF magenta "
    "background, no scene, no shadow on ground. Match the style of the reference images exactly."
)
NEGATIVE_BLOCK = (
    "Avoid: realistic rendering, 3D, photorealism, painterly texture, noise, grain, gradients, "
    "thin sketchy lines, tiny details, text, watermark, signature, frame, background scenery, "
    "multiple creatures, cropped body, human face, eyebrows, realistic teeth, gore, blood, "
    "Pokémon style, Subnautica style, anime, chibi human features, extra limbs not described."
)


def load_defs():
    text = SPEC.read_text(encoding="utf-8")
    section = text[text.index("## 5. Data"):text.index("### 5.1")]
    return {d["id"]: d for d in json.loads(re.findall(r"```json\n(.*?)```", section, re.S)[0])}


def ref_path(ref_id):
    if ref_id.startswith("STYLE-"):
        return ROOT / "art/style" / f"{ref_id}.png"
    return ROOT / "art/final" / f"{ref_id}.png"


def build_request(d):
    art = d["art"]
    prompt = "\n\n".join([
        STYLE_BLOCK,
        art["promptSubject"],
        NEGATIVE_BLOCK + " Also avoid: " + art["promptNegativeExtra"] + ".",
    ])
    refs, missing = [], []
    for rid in art["refIds"]:
        p = ref_path(rid)
        (refs if p.exists() else missing).append(p if p.exists() else rid)
    parts = [{"inline_data": {"mime_type": "image/png",
                              "data": base64.b64encode(p.read_bytes()).decode()}} for p in refs]
    parts.append({"text": prompt})
    body = {
        "contents": [{"role": "user", "parts": parts}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "1:1"}},
    }
    return prompt, refs, missing, body


def call(model, key, body):
    req = urllib.request.Request(
        API.format(model=model), data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key})
    with urllib.request.urlopen(req, timeout=180) as r:
        resp = json.load(r)
    out = []
    for c in resp.get("candidates", []):
        for p in c.get("content", {}).get("parts", []):
            blob = p.get("inlineData") or p.get("inline_data")
            if blob:
                out.append(base64.b64decode(blob["data"]))
    if not out:
        raise RuntimeError("no image in response: " + json.dumps(resp)[:500])
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ids", nargs="+", required=True, help="e.g. cr_sun_01 cr_sun_03")
    ap.add_argument("--n", type=int, default=4, help="variants per creature")
    ap.add_argument("--model", default=os.environ.get("GEMINI_IMAGE_MODEL", DEFAULT_MODEL))
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    defs = load_defs()
    key = os.environ.get("GEMINI_API_KEY")
    if not a.dry_run and not key:
        sys.exit("GEMINI_API_KEY not set")

    for cid in a.ids:
        d = defs[cid]
        prompt, refs, missing, body = build_request(d)
        print(f"== {cid} {d['nameKey']}  refs={[p.name for p in refs]}  missing={missing}")
        if a.dry_run:
            print(prompt, "\n")
            continue
        outdir = ROOT / "art/raw" / cid
        outdir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
        for k in range(a.n):
            try:
                imgs = call(a.model, key, body)
            except (urllib.error.HTTPError, RuntimeError) as e:
                msg = e.read().decode()[:500] if isinstance(e, urllib.error.HTTPError) else str(e)
                print(f"   #{k} FAILED: {msg}")
                continue
            for j, img in enumerate(imgs):
                f = outdir / f"{stamp}_{k}{'_' + str(j) if j else ''}.png"
                f.write_bytes(img)
                print(f"   -> {f.relative_to(ROOT)}")
                with open(outdir / "log.jsonl", "a", encoding="utf-8") as log:
                    log.write(json.dumps({"file": f.name, "model": a.model, "at": stamp,
                                          "refs": [p.name for p in refs], "prompt": prompt},
                                         ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
