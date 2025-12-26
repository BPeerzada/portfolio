---
title: "Superstore Data Analytics Project"
description: "Processed a 300K+ row retail dataset to derive revenue trends and customer profitability insights using Tableau and Python."
date: "2025-01-15"
tags: ["Tableau", "Scenario Modeling", "Retail Analytics"]
embedUrl: "https://public.tableau.com/views/SuperstoreAnalytics/Dashboard1"
---

## The Business Problem
Retail giants often struggle with "profitless volume"—sales that drive revenue but erode margins due to aggressive discounting. The goal of this analysis was to identify which customer segments and product categories were driving profitability versus those that were bleeding cash.

## Methodology
1.  **Data Processing**: Cleaned a dataset of 300,000+ transaction records, handling missing values and ensuring consistent categorical variables.
2.  **Profitability Analysis**: Calculated Gross Margin per SKU and Customer ID.
3.  **Scenario Modeling**: Created a dynamic model to simulate how a 5% reduction in discounts would impact overall Customer Lifetime Value (CLV).

## Key Insights
- **Discount Fatigue**: Products with >20% discount rates actually saw a *decrease* in net profit margin by 12%.
- **Regional Disparity**: The "South" region had the highest sales volume but the lowest profit margin due to shipping inefficiencies.

## Interactive Dashboard
Below is the interactive Tableau dashboard allowing stakeholders to filter by Region and Category.

<div style="background: #f3f4f6; padding: 40px; border-radius: 12px; border: 2px dashed #ccc; text-align: center; color: #666;">
    <h3 class="font-bold text-lg mb-2">Interactive Tableau Dashboard</h3>
    <p>Displays Sales vs. Profit scatter plots and geo-spatial performance maps.</p>
</div>
