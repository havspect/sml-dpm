import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Towards Sustainability of AI",
  description: "The website for the scientific paper titled \"Towards Sustainability of AI – Identifying Design Patterns for Sustainable Machine Learning Development\". The paper introduces the Sustainable ML Design Pattern Matrix (SML-DPM), a novel framework designed to enhance the sustainability of ML development processes across environmental, social, and governance (ESG) dimensions.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
