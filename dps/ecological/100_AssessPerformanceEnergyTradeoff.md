---
title: Assess Performance-Efficiency Tradeoff
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: ML Demand Specification
ml-development-stakeholders: 
    - B
    - D
    - M
written-by: havspect
---

<script setup>
import DPOverview from '../../components/DPOverview.vue'
</script>


# {{ $frontmatter.title }} <Badge type="tip">new</Badge>

## Overview
<DPOverview />

## Description
The first DP “Assess Performance-Efficiency Tradeoff” centers on the equilibrium between the essential performance, i.e., how well an ML model can accomplish a specific task, required for an ML model to generate business value, and the diminished energy efficiency of more sophisticated ML models or hyperparameter configurations (Naser, 2023). Among others, Brownlee et al. (2021) have shown that a drop in accuracy of 1.1% can lead to energy savings of up to 77%. Estimating upfront the benefits of additional performance versus the environmental cost when the ML model is trained and deployed, can support the decision-making process on whether higher model accuracy justifies higher energy costs (A. Kumar, 2022; Schwartz et al., 2020).

## Sources 

- Naser, M. Z. (2023). Do We Need Exotic Models? Engineering Metrics to Enable Green Machine Learning from Tackling Accuracy-Energy Trade-offs. Journal of Cleaner Production, 382, 135334. https://doi.org/10.1016/j.jclepro.2022.135334
- Brownlee, A. E. I., Adair, J., Haraldsson, S. O., & Jabbo, J. (2021). Exploring the Accuracy – Energy Trade-off in Machine Learning. 2021 IEEE/ACM International Workshop on Genetic Improvement (GI), 11–18. https://doi.org/10.1109/GI52543.2021.00011
- Kumar, A. (2022). ESG & AI / Machine Learning Use Cases. Data Analytics. https://vitalflux.com/esg-ai-machine-learning-use-cases/
- Schwartz, R., Dodge, J., Smith, N. A., & Etzioni, O. (2020). Green AI. Communications of the ACM, 63(12), 54–63. https://doi.org/10.1145/3381831
