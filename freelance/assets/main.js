(function () {
  const S = window.SITE || {};

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = S[el.dataset.bind];
    if (v) el.textContent = v;
  });

  const setLink = (id, href, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href;
    if (text) el.textContent = text;
  };
  setLink("zalo-link", "https://zalo.me/" + (S.zalo || ""));
  setLink("email-link", "mailto:" + S.email, S.email);
  setLink("fb-link", S.facebook);
  setLink("gh-link", S.github);
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("lead-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!S.formspree) {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
      location.href = `mailto:${S.email}?subject=${encodeURIComponent("Yêu cầu báo giá - " + data.type)}&body=${encodeURIComponent(body)}`;
      return;
    }

    status.textContent = "Đang gửi...";
    try {
      const res = await fetch(S.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = "Đã nhận yêu cầu! Mình sẽ liên hệ lại sớm.";
    } catch {
      status.textContent = "Gửi thất bại — vui lòng nhắn Zalo hoặc email trực tiếp.";
    }
  });
})();
