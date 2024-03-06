---
title: Report and Monitor Environmental Sustainability
lang: en-US
sustainability-dimension: Ecological
ml-development-phase: Deployment and Monitoring
ml-development-stakeholders: 
    - B
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
The DP “Report and Monitor Environmental Sustainability” advises publishing and monitoring power consumption, carbon emissions, training time, and hardware setup. Algorithmic and hardware advances have led to new generations of ML models with higher accuracy and simultaneously substantial energy consumption (Strubell et al., 2019). At the same time, ML researchers and organizations often omit the reporting of environmental-related metrics (Henderson et al., 2022). With advances in tracking and calculating energy demand and carbon emissions, publishing and monitoring those metrics is easier (Anthony et al., 2020; Budennyy et al., 2022; Strubell et al., 2019). 

## Real-world example
Initiatives like [codecarbon](https://github.com/mlco2/codecarbon) and [carbontracker](https://github.com/lfwa/carbontracker) offer frameworks and tools to measure and report the sustainability of models. For instance, codecarbon calculates the CO2 of machine learning applications by multiplying the hardware energy consumption with the regional carbon intensity. While the approach inherits some limitations, it gives the first tendencies for the induced carbon emissions. 

The implementation of code carbon is straightforward: 

1. Install the package 
    ```bash
    mamba install -c conda-forge codecarbon
    ```
2. Initiate the tool 
    ```bash
    codecarbon init
    ```
3. Save the obtained experiment_id
    ```toml
    [codecarbon]
    log_level = DEBUG
    save_to_api = True
    experiment_id = 2bcbcbb8-850d-4692-af0d-76f6f36d79b2
    ```
4. Montior your ML code 
    ```py
    from codecarbon import track_emissions
    @track_emissions()
    def your_function_to_track():
    # your code
    ```
5. Analyse the results on the website (Online Mode) or the log-files (Offline Mode).

For more information about the usage of [codecarbon](https://github.com/mlco2/codecarbon) we encourage you to go to their website.

## Sources
- Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and Policy Considerations for Deep Learning in NLP. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, 3645–3650. https://doi.org/10.18653/v1/P19-1355
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J. (2022). Towards the Systematic Reporting of the Energy and Carbon Footprints of Machine Learning. The Journal of Machine Learning Research, 1(2). https://doi.org/10.48550/arXiv.2002.05651
- Anthony, L. F. W., Kanding, B., & Selvan, R. (2020). Carbontracker: Tracking and Predicting the Carbon Footprint of Training Deep Learning Models. ICML Workshop on Challenges in Deploying and Monitoring Machine Learning Systems. https://doi.org/10.48550/ARXIV.2007.03051
- Budennyy, S. A., Lazarev, V. D., Zakharenko, N. N., Korovin, A. N., Plosskaya, O. A., Dimitrov, D. V., Akhripkin, V. S., Pavlov, I. V., Oseledets, I. V., Barsola, I. S., Egorov, I. V., Kosterina, A. A., & Zhukov, L. E. (2022). eco2AI: Carbon Emissions Tracking of Machine Learning Models as the First Step Towards Sustainable AI. Doklady Mathematics, 106(S1), S118–S128. https://doi.org/10.1134/S1064562422060230
