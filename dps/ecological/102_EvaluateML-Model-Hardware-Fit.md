---
title: Evaluate ML-Model-Hardware-Fit
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: ML Demand Specification
ml-development-stakeholders: 
    - B
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
Third, energy demand is determined to a great extent by the fit between the ML model and used hardware (Patterson et al., 2022), which is described in “Evaluate ML-Model-Hardware-Fit”. Li et al. (2016) elaborate that the combination of hardware setup and ML model influences the overall energy demand (D. Li et al., 2016). Furthermore, several authors analyzed specifically tailored hardware architectures for ML, increasing the energy efficiency significantly (Chen et al., 2017; Esser et al., 2015). Therefore, the fit between hardware and ML model shall guide the decision whether to train and deploy on-premise, adjust the infrastructure, or outsource to other providers with a better fit (Wu et al., 2022).

## Sources
- Patterson, D., Gonzalez, J., Holzle, U., Le, Q., Liang, C., Munguia, L.-M., Rothchild, D., So, D. R., Texier, M., & Dean, J. (2022). The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink. Computer, 55(7), 18–28. https://doi.org/10.1109/MC.2022.3148714
- Li, D., Chen, X., Becchi, M., & Zong, Z. (2016). Evaluating the Energy Efficiency of Deep Convolutional Neural Networks on CPUs and GPUs. 2016 IEEE International Conferences on Big Data and Cloud Computing, Social Computing and Networking, Sustainable Computing and Communications, 477–484. https://doi.org/10.1109/BDCloud-SocialCom-SustainCom.2016.76
- Chen, Y.-H., Krishna, T., Emer, J. S., & Sze, V. (2017). Eyeriss: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks. IEEE Journal of Solid-State Circuits, 52(1), 127–138. https://doi.org/10.1109/JSSC.2016.2616357
- Esser, S. K., Appuswamy, R., Merolla, P., Arthur, J. V., & Modha, D. S. (2015). Backpropagation for energy-efficient neuromorphic computing. In C. Cortes, N. Lawrence, D. Lee, M. Sugiyama, & R. Garnett (Eds.), Advances in neural information processing systems (Vol. 28). Curran Associates, Inc.
- Wu, C.-J., Raghavendra, R., Gupta, U., Acun, B., Ardalani, N., Maeng, K., Chang, G., Behram, F. A., Huang, J., Bai, C., Gschwind, M., Gupta, A., Ott, M., Melnikov, A., Candido, S., Brooks, D., Chauhan, G., Lee, B., Lee, H.-H. S., … Hazelwood, K. (2022). Sustainable AI: Environmental Implications, Challenges and Opportunities. Proceedings of Machine Learning and Systems 4. https://doi.org/10.48550/ARXIV.2111.00364
