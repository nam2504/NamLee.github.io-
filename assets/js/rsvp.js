// ===========================
// RSVP JAVASCRIPT
// ===========================

// Load and display RSVP statistics
async function loadRSVPStats() {
  const statsContainer = document.getElementById('stats-summary');
  const tableContainer = document.getElementById('rsvp-table');

  try {
    // Get config
    const response = await fetch('config/config.json');
    const config = await response.json();

    if (!config.google_sheet_rsvp_json) {
      if (statsContainer) {
        statsContainer.innerHTML = '<p class="text-center text-muted">Chưa cấu hình Google Sheet cho RSVP.</p>';
      }
      if (tableContainer) {
        tableContainer.innerHTML = '<p class="text-center text-muted">Chưa cấu hình Google Sheet cho RSVP.</p>';
      }
      return;
    }

    // Fetch RSVP data from Google Sheet
    const dataResponse = await fetch(config.google_sheet_rsvp_json);
    const data = await dataResponse.json();

    if (!data || !data.data || data.data.length === 0) {
      if (statsContainer) {
        statsContainer.innerHTML = '<p class="text-center text-muted">Chưa có dữ liệu RSVP.</p>';
      }
      if (tableContainer) {
        tableContainer.innerHTML = '<p class="text-center text-muted">Chưa có dữ liệu RSVP.</p>';
      }
      return;
    }

    // Calculate statistics
    const rsvpData = data.data;
    let totalAttending = 0;
    let totalNotAttending = 0;
    let totalGuests = 0;

    rsvpData.forEach(entry => {
      const status = entry['Tham dự'] || entry['Attending'] || '';
      const guestCount = parseInt(entry['Số lượng khách'] || entry['Guest Count'] || 1);

      if (status.toLowerCase().includes('có') || status.toLowerCase() === 'yes') {
        totalAttending++;
        totalGuests += guestCount;
      } else if (status.toLowerCase().includes('không') || status.toLowerCase() === 'no') {
        totalNotAttending++;
      }
    });

    // Display statistics
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="stats-card">
              <h3>Tổng số khách</h3>
              <div class="stats-number">${totalGuests}</div>
              <p>Xác nhận tham dự</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stats-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <h3>Số người xác nhận</h3>
              <div class="stats-number">${totalAttending}</div>
              <p>Phản hồi tham dự</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stats-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
              <h3>Không tham dự</h3>
              <div class="stats-number">${totalNotAttending}</div>
              <p>Phản hồi không tham dự</p>
            </div>
          </div>
        </div>
      `;
    }

    // Display table
    if (tableContainer) {
      let tableHTML = `
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead class="table-dark">
              <tr>
                <th>STT</th>
                <th>Họ tên</th>
                <th>Số lượng khách</th>
                <th>Tham dự</th>
                <th>Ghi chú</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
      `;

      rsvpData.forEach((entry, index) => {
        const timestamp = entry['Timestamp'] || entry['Dấu thời gian'] || '';
        const name = entry['Họ tên'] || entry['Name'] || 'N/A';
        const guestCount = entry['Số lượng khách'] || entry['Guest Count'] || '1';
        const attending = entry['Tham dự'] || entry['Attending'] || 'N/A';
        const note = entry['Ghi chú'] || entry['Note'] || '';

        // Format date
        let formattedDate = '';
        if (timestamp) {
          try {
            const date = new Date(timestamp);
            formattedDate = date.toLocaleDateString('vi-VN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
          } catch (e) {
            formattedDate = timestamp;
          }
        }

        // Set status badge
        let statusBadge = '';
        if (attending.toLowerCase().includes('có') || attending.toLowerCase() === 'yes') {
          statusBadge = '<span class="badge bg-success">Có</span>';
        } else if (attending.toLowerCase().includes('không') || attending.toLowerCase() === 'no') {
          statusBadge = '<span class="badge bg-danger">Không</span>';
        } else {
          statusBadge = '<span class="badge bg-secondary">N/A</span>';
        }

        tableHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(name)}</td>
            <td>${escapeHtml(guestCount)}</td>
            <td>${statusBadge}</td>
            <td>${escapeHtml(note)}</td>
            <td><small>${formattedDate}</small></td>
          </tr>
        `;
      });

      tableHTML += `
            </tbody>
          </table>
        </div>
      `;

      tableContainer.innerHTML = tableHTML;
    }

  } catch (error) {
    console.error('Error loading RSVP stats:', error);
    if (statsContainer) {
      statsContainer.innerHTML = `
        <p class="text-center text-muted">
          Không thể tải dữ liệu RSVP. Vui lòng thử lại sau.<br>
          <small>Lỗi: ${error.message}</small>
        </p>
      `;
    }
    if (tableContainer) {
      tableContainer.innerHTML = `
        <p class="text-center text-muted">
          Không thể tải dữ liệu RSVP. Vui lòng thử lại sau.
        </p>
      `;
    }
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
  loadRSVPStats();

  // Reload stats every 30 seconds
  setInterval(loadRSVPStats, 30000);
});
