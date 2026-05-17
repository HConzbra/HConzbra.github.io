import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HConzbra's Personal Website",
  description: "A VitePress Site",
  base: '/',   // 个人网站必须用根路径
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About HC', link: '/about/' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: '所有文章',
          items: [
            { text: 'Hello World', link: '/posts/hello' },
            { text: 'another', link: '/posts/another' },
          ]
        }
      ],
      // 如果你想为其他页面（如首页）保留原来的侧边栏，取消下面的注释
      // '/': [
      //   {
      //     text: 'Examples',
      //     items: [
      //       { text: 'Markdown Examples', link: '/markdown-examples' },
      //       { text: 'Runtime API Examples', link: '/api-examples' }
      //     ]
      //   }
      // ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HConzbra' }  // 改成了你的 GitHub
    ]
  }
})