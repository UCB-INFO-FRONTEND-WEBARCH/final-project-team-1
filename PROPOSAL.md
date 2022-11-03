## Proposal
### Team 1
Jennifer Chan

Benjamin Fell Costa

Jane Lupica

Han Yang

### Idea
Various machine learning (ML) fairness toolkits are emerging. They can greatly help data scientists, machine learning practitioners, and stakeholders to make sense of their datasets and ML models, but most of them are not complete nor user-friendly. This project attempts to redesign and implement the frontend of the small yet valuable portion of the ML fairness checking workflows, from picking an example dataset to visualize the selected dataset with a number of fairness metrics. 

For example, what does this abstract graph mean? Can we explain it better in interactive ways using one example dataset?
<img src="http://aequitas.dssg.io/static/images/webapp_input.png" width="400" />

Also, what does the fairness decision tree entail? Can we walk users through it step by step?
<img src="http://aequitas.dssg.io/static/images/metrictree.png" width="400" />

Reference product:

[Aequitas](http://aequitas.dssg.io/)

[AI Fairness 360](https://aif360.mybluemix.net/)

### Out-of-Scope
The focus of the project is not to check the fairness of the selected example dataset using complex backend APIs, but rather focuses on educating users on various fairness concepts. 

### API and Why
Option 1: An external API can be utilized to pull example datasets. This potentially allows us to pull more than one examples and all examples can be guaranteed to work.

Option 2: Users can upload their own datasets. However, due to the limited implementation time, only one example dataset will be tested for successful upload and visualization. Nonetheless, this method showcases what the product can be in the future. 
