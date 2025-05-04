export default function Home() {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <title>转发服务使用指南</title>
        <style>{`
          body { font-family: Arial, sans-serif; text-align: center; background: #f4f4f4; padding: 20px; }
          h1 { color: #333; }
          code { background: #ddd; padding: 4px; border-radius: 4px; }
        `}</style>
      </head>
      <body>
        <h1>欢迎来到转发服务</h1>
        <p>使用方式：<code>https://你的vercel域名/api/redirect?url=目标链接</code></p>
        <p>示例：<code>https://你的vercel域名/api/redirect?url=https://example.com</code></p>
      </body>
    </html>
  );
}
