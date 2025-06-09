addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const path = url.pathname
    
    // 代理GitHub API请求
    if (path.startsWith('/api/')) {
      const apiUrl = `https://api.github.com/repos/QinYingsheng/https://QinYingsheng.github.io/${path.replace('/api/', '')}`
      
      // 添加认证头(令牌保存在Worker环境变量中)
      const headers = new Headers(request.headers)
      headers.set('Authorization', `token ${GITHUB_TOKEN}`)
      headers.set('User-Agent', 'GitHub-Blog')
      
      return fetch(apiUrl, {
        method: request.method,
        headers: headers,
        body: request.body
      })
    }
    
    // 其他请求直接访问GitHub Pages
    return fetch(`https://QinYingsheng.github.io${path}`)
  }