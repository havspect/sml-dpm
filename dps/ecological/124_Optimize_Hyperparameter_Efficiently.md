---
title: Optimize Hyperparameter Efficiently
lang: en-US
sustainability-dimension: Ecological
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
Lastly, the DP “Optimize Hyperparameter Efficiently” focuses on the distinct levels of energy consumption different hyperparameter optimization (HPO) techniques show (Guido et al., 2022). For instance, Yarally et al. (2023) conclude to avoid random search for HPO. Furthermore, warm starting or zero shot ML, a mechanism that integrates knowledge from prior executions into the current one, improves the search process (Tornede et al., 2022; Wang et al., 2021; Yarally et al., 2023). Finally, pruning needs idiosyncratic consideration to improve the performance of HPO (Akiba et al., 2019).

## Real-world examples 


## Sources
- Guido, R., Groccia, M. C., & Conforti, D. (2022). A hyper-parameter tuning approach for cost-sensitive support vector machine classifiers. Soft Computing, 27(18), 12863–12881. https://doi.org/10.1007/s00500-022-06768-8
- Yarally, T., Cruz, L., Feitosa, D., Sallou, J., & Van Deursen, A. (2023). Uncovering Energy-Efficient Practices in Deep Learning Training: Preliminary Steps Towards Green AI. 2023 IEEE/ACM 2nd International Conference on AI Engineering – Software Engineering for AI (CAIN), 25–36. https://doi.org/10.1109/CAIN58948.2023.00012
- Tornede, T., Tornede, A., Hanselle, J., Mohr, F., Wever, M., & Hüllermeier, E. (2022). Towards Green Automated Machine Learning: Status Quo and Future Directions. Journal of Artificial Intelligence Research. https://doi.org/10.1613/jair.1.14340
- Wang, C., Wu, Q., Weimer, M., & Zhu, E. (2021). FLAML: A Fast and Lightweight AutoML Library. Fourth Conference on Machine Learning and Systems (MLSys 2021). https://www.microsoft.com/en-us/research/publication/flaml-a-fast-and-lightweight-automl-library/
- Akiba, T., Sano, S., Yanase, T., Ohta, T., & Koyama, M. (2019). Optuna: A Next-generation Hyperparameter Optimization Framework. KDD ’19: Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, 2623–2631. https://doi.org/10.1145/3292500.3330701


