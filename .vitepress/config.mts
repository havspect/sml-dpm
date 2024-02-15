import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Towards Sustainability of AI",
  description: "The website for the scientific paper titled \"Towards Sustainability of AI – Identifying Design Patterns for Sustainable Machine Learning Development\". The paper introduces the Sustainable ML Design Pattern Matrix (SML-DPM), a novel framework designed to enhance the sustainability of ML development processes across environmental, social, and governance (ESG) dimensions.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Design Patterns', link: '/dps/index' }
    ],

    sidebar: [
      {
        text: 'Sustainable development of ML',
        items: [
          { text: 'Introduction', link: '/sml-dpm/introduction' },
          { text: 'Motivation', link: '/sml-dpm/motivation' },
          { text: 'The paper', link: '/sml-dpm/paper' },
        ]
      },
      {
        text: 'SML-DPM',
        items: [
          { text: 'Overview', link: '/dps/index'},
          {  
            text: '🌳 Ecological', 
            collapsed: true,
            items: [
              { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/ecological/100_AssessPerformanceEnergyTradeoff'}
            ]
          },
          {  
            text: '😇 Social', 
            collapsed: true,
            items: [
              { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/100_AssessPerformanceEnergyTradeoff'}
            ]
          },
          {  
            text: '🏛️ Governance', 
            collapsed: true,
            items: [
              { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/100_AssessPerformanceEnergyTradeoff'}
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
