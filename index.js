require("dotenv").config();
const ZaloBot = require("node-zalo-bot");

const TOKEN = process.env.ZALO_BOT_TOKEN;

if (!TOKEN) {
  console.error("❌ Lỗi: Chưa cấu hình ZALO_BOT_TOKEN trong file .env");
  process.exit(1);
}

const bot = new ZaloBot(TOKEN, {
  polling: true
});

// Lắng nghe các lệnh: /start, /batdau, start, batdau (không phân biệt hoa thường)
bot.onText(/\/?(start|batdau)/i, (msg) => {
  const chatId = msg.chat.id; // ID luồng chat
  const userId = msg.from ? msg.from.id : "Không xác định"; // ID người dùng
  const userName = (msg.from && (msg.from.display_name || msg.from.first_name)) || "bạn";

  const replyText =
    `👋 Chào ${userName}!\n\n` +
    `🆔 **ID luồng chat (Chat ID):** \`${chatId}\`\n` +
    `👤 **ID người dùng (User ID):** \`${userId}\`\nHãy dùng ID luồng chat nếu bạn muốn config BOT nhắn qua cho bạn`;

  bot.sendMessage(chatId, replyText);
});

// Lắng nghe lệnh /echo <nội dung>
bot.onText(/\/echo (.+)/, (msg, match) => {
  const message = match[1];
  if (message) {
    bot.sendMessage(msg.chat.id, `Bạn vừa nói: ${message}`);
  } else {
    bot.sendMessage(msg.chat.id, "Hãy nhập gì đó sau lệnh /echo");
  }
});

// In log thông tin mọi tin nhắn nhận được
bot.on("message", (msg) => {
  console.log("Bạn vừa nhận được tin nhắn mới:", msg);
});

console.log("🤖 Zalo Bot đã sẵn sàng và đang lắng nghe tin nhắn...");
