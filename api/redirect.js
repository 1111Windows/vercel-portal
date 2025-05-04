export default function handler(req, res) {
  const { query } = req;
  
  const targetUrl = query.url;

  if (!targetUrl) {
    // 如果没有提供目标链接，返回主页 HTML
    return res.sendFile('index.html', { root: __dirname });
  }

  res.redirect(targetUrl);
}
