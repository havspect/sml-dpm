---
title: Streamline ML Retraining Frequency
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: Deployment and Monitoring
ml-development-stakeholders: 
    - B
    - S
written-by: havspect
---

<script setup>
import DPOverview from '../../components/DPOverview.vue'
</script>


# {{ $frontmatter.title }} <Badge type="tip">new</Badge>

## Overview
<DPOverview />

## Description
“Streamline ML Retraining Frequency” describes optimizing the ML model retraining cycles to avoid unneeded and energy-expensive retraining (Microsoft, 2023b; Natarajan et al., 2022). To achieve this, practitioners must answer how often an ML model should be retrained (Schwartz et al., 2020). Therefore, the two predominating approaches display the performance-efficiency trade-off. On the one hand, retraining models in fixed time intervals or based on conditions such as observed data drift is less accurate, but also less energy intensive. On the other hand, constant ML model retraining is more energy-intensive but also more accurate (Microsoft, 2023b). 

## Sources
- Microsoft. (2023). Machine learning inference during deployment—Cloud Adoption Framework. https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/ml-deployment-inference
- Natarajan, H. K., de Paula, D., Dremel, C., & Uebernickel, P. (2022). A Theoretical Review on AI Affordances for Sustainability. AMCIS 2022 Proceedings.
- Schwartz, R., Dodge, J., Smith, N. A., & Etzioni, O. (2020). Green AI. Communications of the ACM, 63(12), 54–63. https://doi.org/10.1145/3381831
