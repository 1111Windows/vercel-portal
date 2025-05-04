export default function handler(req, res) {
  const { query } = req;
  const targetUrl = query.url;

  if (!targetUrl) {
    return res.status(200).json({ 
      message: "请提供 URL，例如 ?url=https://example.com" 
    });
  }

  try {
    const safeUrl = decodeURIComponent(targetUrl);
    res.redirect(safeUrl);
  } catch (error) {
    res.status(400).json({ error: "URL 解析错误" });
  }
}
