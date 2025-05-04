export default function handler(req, res) {
  const { query } = req;

  // 提取目标链接
  const targetUrl = query.url;

  if (!targetUrl) {
    // 返回主页
    return res.status(200).send(`
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <title>转发服务使用指南</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f4f4; text-align: center; }
          .container { padding: 20px; }
          h1 { color: #333; }
          p { font-size: 18px; }
          code { background: #ddd; padding: 2px 6px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>欢迎来到转发服务</h1>
          <p>使用方式：<code>https://你的vercel域名/目标链接</code></p>
          <p>示例：<code>https://你的vercel域名/https://example.com</code></p>
        </div>
      </body>
      </html>
    `);
  }

  // 进行重定向
  res.redirect(targetUrl);
}
