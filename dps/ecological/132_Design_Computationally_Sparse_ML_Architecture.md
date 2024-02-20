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