---
title: Compress Data Storage
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: Data Collection and Preparation
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
The importance of data retrieval and storage performance is growing as many organizations shift their data to cloud-based storage. At the same time, the volume of generated data continuously increases (Kuschewski et al., 2023). Therefore, the DP “Compress Data Storage” proposes reducing the required storage and network bandwidth and thus increasing energy efficiency (Schneider et al., 2019). For instance, general-purpose compression algorithms like Lempel-Ziv allow faster access to and manipulation of compressed data, which is especially useful if data is transferred across networks or infrequently accessed (Schneider et al., 2019; Stolikj et al., 2012). Additionally, altering data formats per variable can compress the storage demand further (Schneider et al., 2019).

## Sources
- Kuschewski, M., Sauerwein, D., Alhomssi, A., & Leis, V. (2023). BtrBlocks: Efficient Columnar Compression for Data Lakes. Proceedings of the ACM on Management of Data, 1(2), 1–26. https://doi.org/10.1145/3589263
- Schneider, J., Seidel, S., Basalla, M., & vom Brocke, J. (2023). Reuse, Reduce, Support: Design Principles for Green Data Mining. Business & Information Systems Engineering, 65(1), 65–83. https://doi.org/10.1007/s12599-022-00780-w
- Schneider, J., Basalla, M., & Seidel, S. (2019). Principles of Green Data Mining. Proceedings of the 52nd Hawaii International Conference on System Sciences. Hawaii International Conference on System Sciences. https://doi.org/10.24251/HICSS.2019.250
- Stolikj, M., Cuijpers, P. L. J., & Lukkien, J. J. (2012). Energy-aware Reprogramming of Sensor Networks Using Incremental Update and Compression. Procedia Computer Science, 10, 179–187. https://doi.org/10.1016/j.procs.2012.06.026

