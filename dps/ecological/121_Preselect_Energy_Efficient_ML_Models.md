---
title: Preselect Energy-Efficient ML Models
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: Modeling and Training
ml-development-stakeholders: 
    - M
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
The DP “Preselect Energy-Efficient ML Models” focuses on selecting ML models from the perspective of an ML model’s lifetime carbon footprint in relation to its performance (Henderson et al., 2022; Strubell et al., 2019). It is advised to consider simpler ML models such as boosted trees instead of deep neural networks, pre-trained ML models, or transfer learning for ML models (Henderson et al., 2022). Estimates like floating-point operations of an ML model can guide the decision process (Schwartz et al., 2020).

## Real-world examples 


## Sources
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J. (2022). Towards the Systematic Reporting of the Energy and Carbon Footprints of Machine Learning. The Journal of Machine Learning Research, 1(2). https://doi.org/10.48550/arXiv.2002.05651
- Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and Policy Considerations for Deep Learning in NLP. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, 3645–3650. https://doi.org/10.18653/v1/P19-1355
- Schwartz, R., Dodge, J., Smith, N. A., & Etzioni, O. (2020). Green AI. Communications of the ACM, 63(12), 54–63. https://doi.org/10.1145/3381831