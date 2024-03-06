import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Towards Sustainability of AI",
  description: "The website for the scientific paper titled \"Towards Sustainability of AI – Identifying Design Patterns for Sustainable Machine Learning Development\". The paper introduces the Sustainable ML Design Pattern Matrix (SML-DPM), a novel framework designed to enhance the sustainability of ML development processes across environmental, social, and governance (ESG) dimensions.",
  lastUpdated: false,
  markdown: {
    math: true
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['script', {
      async: '',
      src: "https://analytics.meyhol.dev/script.js",
      "data-website-id": "2d293a75-1e3d-4aea-9c42-03ae7d75f75e",
      "data-domains": "sustainable-ml.com,www.sustainable-ml.com"
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
                {
                  text: 'ML Demand Specification',
                  collapsed: true,
                  items: [
                    { text: 'Assess Social Implications', link: '/dps/social/200_Assess_Social_Implications' },
                    { text: 'Conceptualize Definition of Fairness', link: '/dps/social/201_Conceptualize_Definition_of_Fairness' },
                    { text: 'Define Human Role in Decision Process', link: '/dps/social/202_Define_Human_Role_in_Decision_Proces' },
                  ]
                },
                {
                  text: 'Data Collection and Preparation',
                  collapsed: true,
                  items: [
                    { text: 'Foster Accurate and Fair Data Collection', link: '/dps/social/210_Foster_Accurate_and_Fair_Data_Collection' },
                    { text: 'Understand and Establish Fairness in Dataset', link: '/dps/social/211_Understand_and_Establish_Fairness_in_Dataset' },
                    { text: 'Leverage Fair Data Sampling', link: '/dps/social/212_Leverage_Fair_Data_Sampling' },
                  ]
                },
                {
                  text: 'Modeling and Training',
                  collapsed: true,
                  items: [
                    { text: 'Leverage Fair and Interpretable Models', link: '/dps/social/220_Leverage_Fair_and_Interpretable_Models' },
                    { text: 'Conduct Fairness Evaluation', link: '/dps/social/221_Conduct_Fairness_Evaluation' },
                    { text: 'Adjust Model Parameters for Fairness', link: '/dps/social/222_Adjust_Model_Parameters_for_Fairness' },
                  ]
                },
                {
                  text: 'Deployment and Monitoring',
                  collapsed: true,
                  items: [
                    { text: 'Ensure Continuous (Human) Monitoring for Fairness', link: '/dps/social/230_Ensure_Continuous_Monitoring_for_Fairness' },
                    { text: 'Convey ML-Model Understanding to End Users', link: '/dps/social/231_Convey_ML-Model_Understanding_to_End_Users' },
                    { text: 'Enhance Transparency through Fairness Metrics', link: '/dps/social/232_Enhance_Transparency_through_Fairness_Metrics' },
                  ]
                }
              ]
            },
            {
              text: '🏛️ Governance',
              collapsed: true,
              items: [
                  {
                    text: 'ML Demand Specification',
                    collapsed: true,
                    items: [
                      { text: 'Comply with Legal Frameworks and Company Policies', link: '/dps/governance/300_Comply_with_Legal_Frameworks_and_Company_Policies' },
                      { text: 'Compose Diverse and Interdisciplinary ML-Team', link: '/dps/governance/301_Compose_Diverse_and_Interdisciplinary_ML-Team' },
                      { text: 'Establish a Responsible ML-Mindset', link: '/dps/governance/302_Establish_a_Responsible_ML-Mindset' },
                      { text: 'Promote ML Democratization', link: '/dps/governance/303_Promote_ML_Democratization' },
                    ]
                  },
                  {
                    text: 'Data Collection and Preparation',
                    collapsed: true,
                    items: [
                      { text: 'Establish Standards in Data Collection and Preparation', link: '/dps/governance/310_Establish_Standards_in_Data_Collection_and_Preparation' },
                      { text: 'Initiate Intra- and Interorganizational Data Democratization', link: '/dps/governance/311_Inititate_Intra_and_Interorganization_Data_Democtratization' },
                    ]
                  },
                  {
                    text: 'Modeling and Training',
                    collapsed: true,
                    items: [
                      { text: 'Introduce ML-Model Transparency for Active Participation', link: '/dps/governance/320_Introduce_ML-Model_Transparency_for_Active_Participation' },
                    ]
                  },
                  {
                    text: 'Deployment and Monitoring',
                    collapsed: true,
                    items: [
                      { text: 'Ensure Documentation and Publishing', link: '/dps/governance/330_Ensure_Documentation_and_Publishing' },
                      { text: 'Engage in ML-Model Auditing', link: '/dps/governance/331_Engage_in_ML-Model_Auditing' },
                    ]
                  }
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
