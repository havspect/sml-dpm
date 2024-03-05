---
title: Leverage Fair Data Sampling
lang: en-US
sustainability-dimension: Social
ml-development-phase: Data Collection and Preparation 
ml-development-stakeholders: 
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
“Leverage Fair Data Sampling” describes the application of mitigation techniques in the data sampling steps (Fahse et al., 2021; Friedler et al., 2019). Several ML frameworks enable users to mitigate biases by pre-processing datasets (e.g., AI Fairness 360 (Bellamy et al., 2019)). Proposed techniques include but are not limited to oversampling, undersampling, stratified folds, and synthetic data generation (Ferrara, 2023).

## Real-world examples 


## Sources 
- Fahse, T., Huber, V., & Van Giffen, B. (2021). Managing Bias in Machine Learning Projects. Innovation Through Information Systems, 47, 94–109. https://doi.org/10.1007/978-3-030-86797-3_7
- Friedler, S. A., Scheidegger, C., Venkatasubramanian, S., Choudhary, S., Hamilton, E. P., & Roth, D. (2019). A comparative study of fairness-enhancing interventions in machine learning. Proceedings of the Conference on Fairness, Accountability, and Transparency, 329–338. https://doi.org/10.1145/3287560.3287589
- Bellamy, R. K. E., Dey, K., Hind, M., Hoffman, S. C., Houde, S., Kannan, K., Lohia, P., Martino, J., Mehta, S., Mojsilovic, A., Nagar, S., Ramamurthy, K. N., Richards, J., Saha, D., Sattigeri, P., Singh, M., Varshney, K. R., & Zhang, Y. (2019). AI Fairness 360: An extensible toolkit for detecting and mitigating algorithmic bias. IBM Journal of Research and Development, 63(4/5), 4:1-4:15. https://doi.org/10.1147/JRD.2019.2942287
- Ferrara, E. (2023). Fairness And Bias in Artificial Intelligence: A Brief Survey of Sources, Impacts, And Mitigation Strategies (arXiv:2304.07683). arXiv.
