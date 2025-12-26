---
title: "Automobile Data Analysis Project"
description: "Statistical analysis of used-car pricing and mileage, using hypothesis testing to uncover market value patterns."
date: "2025-02-10"
tags: ["R", "Statistics", "Hypothesis Testing"]
githubUrl: "https://github.com/bpeerzada/automobile-analysis"
---

## Overview
Understanding the depreciation curve of vehicles is critical for both dealerships and consumers. This project applies statistical rigor to a dataset of used car listings to quantify the relationship between mileage, age, and price.

## Statistical Approach
- **Descriptive Statistics**: Calculated mean, median, and standard deviation for pricing across different vehicle classes (Sedan vs. SUV).
- **Probability Distributions**: Fitted the price data to a Log-Normal distribution to account for the long tail of high-end luxury vehicles.
- **Hypothesis Testing**:
    - *Null Hypothesis ($H_0$)*: There is no significant difference in depreciation rates between Japanese and German manufacturers.
    - *Result*: Rejected $H_0$ (p-value < 0.05), finding that German luxury cars depreciate 15% faster in the first 3 years.

## Tools Used
- **R**: Used `ggplot2` for visualizing distributions and `stats` library for t-tests.
- **Python**: Used for initial data scraping and cleaning.

## Visualizations
The analysis includes:
1.  **Correlation Matrix**: Heatmap showing the strength of relationships between features (e.g., Horsepower vs. Price).
2.  **Box Plots**: Comparing price variance across different brands.
