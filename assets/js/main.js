// ===========================
// MAIN JAVASCRIPT
// ===========================

let config = {};

// Load configuration
async function loadConfig() {
  try {
    const response = await fetch('config/config.json');
    config = await response.json();
    return config;
  } catch (error) {
    console.error('Error loading config:', error);
    return null;
  }
}

// Initialize countdown timer
function initCountdown(targetDate) {
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;

  function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const distance = target - now;

    if (distance < 0) {
      countdownElement.innerHTML = '<p class="text-center">Đám cưới đã diễn ra!</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown-item">
        <span class="countdown-value">${days}</span>
        <span class="countdown-label">Ngày</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${hours}</span>
        <span class="countdown-label">Giờ</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${minutes}</span>
        <span class="countdown-label">Phút</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${seconds}</span>
        <span class="countdown-label">Giây</span>
      </div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Format date to Vietnamese
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('vi-VN', options);
}

// Set active navigation
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// Fetch RSVP count
async function fetchRSVPCount() {
  try {
    const response = await fetch(config.google_sheet_rsvp_json);
    const data = await response.json();

    if (data && data.data) {
      const totalGuests = data.data.reduce((sum, entry) => {
        // Assuming column for number of guests is "Số lượng khách"
        return sum + (parseInt(entry['Số lượng khách']) || 0);
      }, 0);
      return totalGuests;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching RSVP count:', error);
    return 0;
  }
}

// Display RSVP count on homepage
async function displayRSVPCount() {
  const rsvpCountElement = document.getElementById('rsvp-count');
  if (!rsvpCountElement) return;

  try {
    const count = await fetchRSVPCount();
    rsvpCountElement.innerHTML = `
      <div class="stats-card">
        <h3>Số khách xác nhận tham dự</h3>
        <div class="stats-number">${count}</div>
        <p>Chúng tôi rất vui khi có bạn đồng hành!</p>
      </div>
    `;
  } catch (error) {
    console.error('Error displaying RSVP count:', error);
  }
}

// Show loading spinner
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `
      <div class="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Đang tải...</span>
        </div>
        <p class="mt-3">Đang tải dữ liệu...</p>
      </div>
    `;
  }
}

// Initialize lightbox for gallery
function initLightbox() {
  // Using Bootstrap modal for lightbox
  const galleryItems = document.querySelectorAll('.album-item');

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const modal = document.createElement('div');
      modal.className = 'modal fade';
      modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content bg-transparent border-0">
            <div class="modal-body p-0">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" style="z-index: 1051;"></button>
              <img src="${imgSrc}" class="img-fluid w-100 rounded" alt="Wedding Photo">
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
      modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
      });
    });
  });
}

// Generate QR Code
function generateQRCode(url, elementId) {
  const qrElement = document.getElementById(elementId);
  if (qrElement) {
    // Using QR Code API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    qrElement.innerHTML = `<img src="${qrUrl}" alt="QR Code" class="img-fluid">`;
  }
}

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Set active navigation
  setActiveNav();
});

// Export functions for use in other files
window.weddingApp = {
  loadConfig,
  initCountdown,
  formatDate,
  fetchRSVPCount,
  displayRSVPCount,
  showLoading,
  initLightbox,
  generateQRCode
};
