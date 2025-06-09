---
title: 我的第一篇文章
date: 2023-11-15
author: 你的名字
tags: [博客, 入门]
---

# 欢迎来到我的博客！

这是我的第一篇博客文章，使用GitHub作为后端存储。本文将介绍：

1. 为什么选择这个方案
2. 技术实现细节
3. 未来的计划

## 为什么选择GitHub作为博客平台？

- **完全免费**：GitHub Pages提供免费托管
- **版本控制**：所有内容都有完整历史记录
- **开放生态**：可与各种工具集成

## 技术实现

这个博客系统使用以下技术栈：

```javascript
// 示例代码：从GitHub API获取文章
async function getPost(postName) {
  const response = await fetch(
    `https://api.github.com/repos/用户名/仓库名/contents/posts/${postName}`
  );
  const data = await response.json();
  return atob(data.content); // 解码Base64内容
}
