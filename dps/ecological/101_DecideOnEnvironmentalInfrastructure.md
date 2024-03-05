---
title: Decide on Environmental Infrastructure
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: ML Demand Specification
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
Second, the DP “Decide on Environmental Infrastructure” focuses on the infrastructure selection to reduce the carbon footprint per computing unit (Martínez-Fernández et al., 2023; Schneider et al., 2019). Practitioners must evaluate whether the computing power should be provided on-premise or in the cloud. Here, shifting workloads to regions supplied with renewable energy and carbon-efficient energy grids leads to a strong decline in carbon emissions (Henderson et al., 2022). Furthermore, this sets the foundation for aligning the energy-intensive ML model training with the availability of renewable energy. Workloads should be scheduled flexibly according to times of renewable energy supply (Schneider et al., 2019). 

## Real-world examples 


## Sources
- Martínez-Fernández, S., Franch, X., & Durán, F. (2023). Towards green AI-based software systems: An architecture-centric approach (GAISSA) (arXiv:2307.09964). arXiv. http://arxiv.org/abs/2307.09964
- Schneider, J., Basalla, M., & Seidel, S. (2019). Principles of Green Data Mining. Proceedings of the 52nd Hawaii International Conference on System Sciences. Hawaii International Conference on System Sciences. https://doi.org/10.24251/HICSS.2019.250
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J. (2022). Towards the Systematic Reporting of the Energy and Carbon Footprints of Machine Learning. The Journal of Machine Learning Research, 1(2). https://doi.org/10.48550/arXiv.2002.05651
