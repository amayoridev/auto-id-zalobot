# auto-id-zalobot

Bot Zalo hỗ trợ lấy tự động **ID luồng chat (Chat ID)** và **ID người dùng (User ID)** thông qua các lệnh `/start` hoặc `/batdau`.

## 🚀 Hướng dẫn cài đặt

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/amayoridev/auto-id-zalobot.git
   cd auto-id-zalobot
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Cấu hình Token Bot:**
   Tạo file `.env` (hoặc sao chép từ `.env.example`) và điền Token Zalo Bot của bạn:
   ```env
   ZALO_BOT_TOKEN=YOUR_ZALO_BOT_TOKEN_HERE
   ```

4. **Khởi chạy Bot:**
   ```bash
   node index.js
   ```

## 💬 Các lệnh hỗ trợ

- `/start` hoặc `start`: Trả về ID luồng chat và ID người dùng.
- `/batdau` hoặc `batdau`: Trả về ID luồng chat và ID người dùng.
- `/echo <nội dung>`: Phản hồi lại nội dung bạn nhập.
