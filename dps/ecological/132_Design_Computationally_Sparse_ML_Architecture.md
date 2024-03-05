---
title: Design Computationally Sparse ML Architecture
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: Deployment and Monitoring
ml-development-stakeholders: 
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
“Design Computationally Sparse ML Architecture”, focuses on reducing the environmental costs associated with the inference phase of ML models. Considering storage, Donovan (2020) suggests analyzing the ML architecture regarding a) how long data must be stored, as storage costs a considerable amount of energy and b) where data shall be stored. For example, in the case of large datasets, on-premises storage may be more efficient (Donovan, 2020). Furthermore, the type of inference must be chosen, i.e., batch or real-time inference. The latter requires a continuous server uptime and, thus, a higher energy demand (Natarajan et al., 2022). Despite computational limitations, multiple authors advise using edge devices due to lower energy consumption and latencies (Zhu et al., 2022).

## Real-world examples 


## Sources
- Donovan, R. (2020). How to put machine learning models into production. Stack Overflow Blog. https://stackoverflow.blog/2020/10/12/how-to-put-machine-learning-models-into-production/
- Natarajan, H. K., de Paula, D., Dremel, C., & Uebernickel, P. (2022). A Theoretical Review on AI Affordances for Sustainability. AMCIS 2022 Proceedings.
- Zhu, S., Ota, K., & Dong, M. (2022). Green AI for IIoT: Energy Efficient Intelligent Edge Computing for Industrial Internet of Things. IEEE Transactions on Green Communications and Networking, 6(1), 79–88. https://doi.org/10.1109/TGCN.2021.3100622
