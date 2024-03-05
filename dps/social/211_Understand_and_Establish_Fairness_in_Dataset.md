---
title: Understand and Establish Fairness in Dataset
lang: en-US
sustainability-dimension: Social
ml-development-phase: Data Collection and Preparation 
ml-development-stakeholders: 
    - D
    - M
    - AT
written-by: havspect
---

<script setup>
import DPOverview from '../../components/DPOverview.vue'
</script>


# {{ $frontmatter.title }} <Badge type="tip">new</Badge>

## Overview
<DPOverview />

## Description
“Understand and Establish Fairness in Dataset” describes the data analysis steps to identify social unfairness. Before ML developers can avoid potential fairness obstacles within a dataset, they first must understand where unfairness can occur (Holstein et al., 2019; Tang et al., 2023). Understanding a dataset and identifying possible areas of unfairness requires data plotting, exchanges with domain experts, and even the design of proxy variables to identify relationships and reasons for social biases (Ferrara, 2023; Van Giffen et al., 2022). Gu et al. (2021) recommend using interactive tools for data analysis since they provide a better understanding of data. After understanding unfairness sources, ML developers can actively initiate mitigation strategies (Van Giffen et al., 2022). 

## Real-world examples 


## Sources 
- Holstein, K., Wortman Vaughan, J., Daumé, H., Dudik, M., & Wallach, H. (2019). Improving Fairness in Machine Learning Systems: What Do Industry Practitioners Need? Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems, 1–16. https://doi.org/10.1145/3290605.3300830
- Tang, Z., Zhang, J., & Zhang, K. (2023). What-is and How-to for Fairness in Machine Learning: A Survey, Reflection, and Perspective. ACM Computing Surveys, 55, 1–37. https://doi.org/10.1145/3597199
- Ferrara, E. (2023). Fairness And Bias in Artificial Intelligence: A Brief Survey of Sources, Impacts, And Mitigation Strategies (arXiv:2304.07683). arXiv.
- Van Giffen, B., Herhausen, D., & Fahse, T. (2022). Overcoming the pitfalls and perils of algorithms: A classification of machine learning biases and mitigation methods. Journal of Business Research, 144, 93–106. https://doi.org/10.1016/j.jbusres.2022.01.076
- Gu, Z., Yan, J. N., & Rzeszotarski, J. M. (2021). Understanding User Sensemaking in Machine Learning Fairness Assessment Systems. Proceedings of the Web Conference 2021, 658–668. https://doi.org/10.1145/3442381.3450092
