import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Towards Sustainability of AI",
  description: "The website for the scientific paper titled \"Towards Sustainability of AI – Identifying Design Patterns for Sustainable Machine Learning Development\". The paper introduces the Sustainable ML Design Pattern Matrix (SML-DPM), a novel framework designed to enhance the sustainability of ML development processes across environmental, social, and governance (ESG) dimensions.",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['script', { async : '', src : "https://analytics.meyhol.dev/script.js", "data-website-id" : "2d293a75-1e3d-4aea-9c42-03ae7d75f75e"}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Design Patterns', link: '/sml-dpm/introduction' }
    ],

    sidebar: [
      {
        text: 'Sustainable development of ML',
        items: [
          { text: 'Introduction', link: '/sml-dpm/introduction' },
          { text: 'The paper', link: '/sml-dpm/paper' },
        ]
      },
      {
        text: 'Sustainability dimensions',
        items: [
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
      },
      {
        text: 'ML development phases',
        items: [
          {
            text: 'ML Demand Specification',
            collapsed: true,
            items: [
              
            ]
          },
          {
            text: 'Data Collection and Preparation',
            collapsed: true,
            items: [
              
            ]
          },
          {
            text: 'Modeling and Training',
            collapsed: true,
            items: [
              
            ]
          },
          {
            text: 'Deployment and Monitoring',
            collapsed: true,
            items: [

            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
