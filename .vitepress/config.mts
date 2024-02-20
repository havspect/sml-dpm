import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Towards Sustainability of AI",
  description: "The website for the scientific paper titled \"Towards Sustainability of AI – Identifying Design Patterns for Sustainable Machine Learning Development\". The paper introduces the Sustainable ML Design Pattern Matrix (SML-DPM), a novel framework designed to enhance the sustainability of ML development processes across environmental, social, and governance (ESG) dimensions.",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['script', {
      async: '',
      src: "https://analytics.meyhol.dev/script.js",
      "data-website-id": "2d293a75-1e3d-4aea-9c42-03ae7d75f75e",
      "data-domains": "sustainable-ml.com"
    }]
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
              {
                text: 'ML Demand Specification',
                collapsed: false,
                items: [
                  { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/ecological/100_AssessPerformanceEnergyTradeoff' },
                  { text: 'Decide on Environmental Infrastructure', link: '/dps/ecological/101_DecideOnEnvironmentalInfrastructure' },
                  { text: 'Evaluate ML-Model-Hardware-Fit', link: '/dps/ecological/102_EvaluateML-Model-Hardware-Fit' },
                ]
              },
              {
                text: 'Data Collection and Preparation',
                collapsed: true,
                items: [
                  { text: 'Promote Data Sparseness in Data Collection', link: '/dps/ecological/111_PromoteDataSparsenessInDataCollection' },
                  { text: 'Reduce Data Dimensionality', link: '/dps/ecological/112_ReduceDataDimensionality' },
                  { text: 'Compress Data Storage', link: '/dps/ecological/113_CompressDataStorage' },
                  { text: 'Stage Preprocessed Data', link: '/dps/ecological/114_StagePreprocessedData' },
                ]
              },
              {
                text: 'Modeling and Training',
                collapsed: true,
                items: [
                  { text: 'Preselect Energy-Efficient ML Models', link: '/dps/ecological/121_Preselect_Energy_Efficient_ML_Models' },
                  { text: 'Eliminate Inefficiency in ML-Model Architecture', link: '/dps/ecological/122_Eliminate_Inefficiency_in_ML_Model_Architecture' },
                  { text: 'Streamline ML-Model Training Process', link: '/dps/ecological/123_Streamline_ML_Model_Training_Process' },
                  { text: 'Optimize Hyperparameter Efficiently', link: '/dps/ecological/124_Optimize_Hyperparameter_Efficiently' },
                ]
              },
              {
                text: 'Deployment and Monitoring',
                collapsed: true,
                items: [
                  { text: 'Streamline ML Retraining Frequency', link: '/dps/ecological/131_Streamline_ML_Retraining_Frequency' },
                  { text: 'Design Computationally Sparse ML Architecture', link: '/dps/ecological/132_Design_Computationally_Sparse_ML_Architecture' },
                  { text: 'Report and Monitor Environmental Sustainability', link: '/dps/ecological/133_Report_And_Monitor_Environmental_Sustainability' },
                ]
              }
            ],
          },
          {
            text: '😇 Social',
            collapsed: true,
            items: [
              { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/100_AssessPerformanceEnergyTradeoff' }
            ]
          },
          {
            text: '🏛️ Governance',
            collapsed: true,
            items: [
              { text: 'Assess Performance-Efficiency Tradeoff', link: '/dps/100_AssessPerformanceEnergyTradeoff' }
            ]
          },
        ]
      },
      // {
      //   text: 'ML development phases',
      //   items: [
      //     {
      //       text: 'ML Demand Specification',
      //       collapsed: true,
      //       items: [

      //       ]
      //     },
      //     {
      //       text: 'Data Collection and Preparation',
      //       collapsed: true,
      //       items: [

      //       ]
      //     },
      //     {
      //       text: 'Modeling and Training',
      //       collapsed: true,
      //       items: [

      //       ]
      //     },
      //     {
      //       text: 'Deployment and Monitoring',
      //       collapsed: true,
      //       items: [

      //       ]
      //     }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/havspect/sml-dpm' }
    ]
  }
})
