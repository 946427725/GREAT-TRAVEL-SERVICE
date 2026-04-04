import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, destination } = req.body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials missing in environment variables.");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const message = `
🚀 *GTS websiteidan yangi so'rov* 🌍

💎 *Ism:* ${name}
📱 *Tel:* ${phone}
✉️ *Xabar:* ${destination}

---
✨ *GTS Interactive Website*
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (data.ok) {
      res.json({ success: true });
    } else {
      console.error("Telegram API error:", data);
      res.status(500).json({ error: "Failed to send message to Telegram" });
    }
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
