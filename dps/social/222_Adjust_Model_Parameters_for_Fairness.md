---
title: Adjust Model Parameters for Fairness
lang: en-US
sustainability-dimension: Social
ml-development-phase: Modeling and Training
ml-development-stakeholders: 
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
"Adjust Model Parameters for Fairness" focuses on integrating fairness mitigation techniques (e.g., layers, loss functions) into ML models. This commences with verifying equalized odds in the ML model to guarantee the uniformity of false positives and negatives across all groups (Van Giffen et al., 2022). If a need for adaptation is discovered, changes to the ML model must be made, ranging from an adapted optimization to introducing an adversarial classifier next to the regular model (Pagano et al., 2023; Zhang et al., 2018).

## Sources 
- van Giffen, B., & Ludwig, H. (2023). How siemens democratized artificial intelligence. MIS Quarterly Executive, 22(1), 3.
- Pagano, T. P., Loureiro, R. B., Lisboa, F. V. N., Peixoto, R. M., Guimarães, G. A. S., Cruz, G. O. R., Araujo, M. M., Santos, L. L., Cruz, M. A. S., Oliveira, E. L. S., Winkler, I., & Nascimento, E. G. S. (2023). Bias and Unfairness in Machine Learning Models: A Systematic Review on Datasets, Tools, Fairness Metrics, and Identification and Mitigation Methods. Big Data and Cognitive Computing, 7(1), 15. https://doi.org/10.3390/bdcc7010015
- Zhang, B. H., Lemoine, B., & Mitchell, M. (2018). Mitigating Unwanted Biases with Adversarial Learning. Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society, 335–340. https://doi.org/10.1145/3278721.3278779
