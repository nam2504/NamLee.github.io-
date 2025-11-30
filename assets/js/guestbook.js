// ===========================
// GUESTBOOK JAVASCRIPT
// ===========================

// Load and display guestbook messages
async function loadGuestbookMessages() {
  const messagesContainer = document.getElementById('messages-container');

  if (!messagesContainer) return;

  try {
    // Get config
    const response = await fetch('config/config.json');
    const config = await response.json();

    if (!config.google_sheet_guestbook_json) {
      messagesContainer.innerHTML = '<p class="text-center text-muted">Chưa cấu hình Google Sheet cho sổ lưu bút.</p>';
      return;
    }

    // Fetch guestbook data from Google Sheet
    const dataResponse = await fetch(config.google_sheet_guestbook_json);
    const data = await dataResponse.json();

    if (!data || !data.data || data.data.length === 0) {
      messagesContainer.innerHTML = '<p class="text-center text-muted">Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>';
      return;
    }

    // Clear loading
    messagesContainer.innerHTML = '';

    // Display messages (reverse to show newest first)
    const messages = data.data.reverse();

    messages.forEach((message, index) => {
      const messageCard = document.createElement('div');
      messageCard.className = 'message-card fade-in';
      messageCard.style.animationDelay = `${index * 0.1}s`;

      // Assuming columns: Timestamp, Tên, Email, Lời chúc
      const timestamp = message['Timestamp'] || message['Dấu thời gian'] || '';
      const name = message['Tên'] || message['Name'] || 'Khách mời';
      const email = message['Email'] || '';
      const messageText = message['Lời chúc'] || message['Message'] || '';

      // Format date
      let formattedDate = '';
      if (timestamp) {
        try {
          const date = new Date(timestamp);
          formattedDate = date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        } catch (e) {
          formattedDate = timestamp;
        }
      }

      messageCard.innerHTML = `
        <div class="author">${escapeHtml(name)}</div>
        ${formattedDate ? `<div class="date">${formattedDate}</div>` : ''}
        <div class="message-text">${escapeHtml(messageText)}</div>
      `;

      messagesContainer.appendChild(messageCard);
    });

  } catch (error) {
    console.error('Error loading guestbook messages:', error);
    messagesContainer.innerHTML = `
      <p class="text-center text-muted">
        Không thể tải lời chúc. Vui lòng thử lại sau.<br>
        <small>Lỗi: ${error.message}</small>
      </p>
    `;
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  loadGuestbookMessages();

  // Reload messages every 30 seconds
  setInterval(loadGuestbookMessages, 30000);
});
