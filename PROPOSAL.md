## Proposal
### Team 1
Jennifer Chan

Benjamin Fell Costa

Jane Lupica

Han Yang

### Idea
Various machine learning (ML) fairness toolkits are emerging to help practictioners conduct their work in a more ethical manner. They can greatly help data scientists, machine learning practitioners, and stakeholders to make sense of their datasets and ML models, but most of them are not complete nor user-friendly. This project attempts to redesign and implement the frontend of a small yet valuable portion of the ML fairness checking workflows, from uploading an example dataset, visualizing the selected dataset, to explaining relevant fairness metrics. Doing so will make toolkit outputs more digestible for both technical and non-technical stakeholders.

For example, some fairness toolkits require users to format their datasets in certain ways (see image below). Can we explain it better in interactive ways to help users get started quickly?
<img src="http://aequitas.dssg.io/static/images/webapp_input.png" width="400" />

After uploading, users need to make sense of a fairness decision tree in order to select the most relevant fairness metrics to them (see image below). Can we walk users through it step by step and educate users about the true meaning of algorithmic fairness in the meantime?
<img src="http://aequitas.dssg.io/static/images/metrictree.png" width="400" />

Reference product:

[Aequitas](http://aequitas.dssg.io/)

[AI Fairness 360](https://aif360.mybluemix.net/)

### Out-of-Scope
The focus of the project is not to check the fairness of nor existence of bias in an uploaded dataset using complex backend APIs, but rather the focus is on educating users about various fairness concepts using improved front-end user experience and visualizations. 

### API and Why
Rather than utilizing an external API, users can upload a dataset of their own choosing. This setup best imitates real-world use cases. However, due to the limited implementation time, only one example dataset (in a CSV format) will be tested for successful upload, visualization, and fairness metric walkthrough. Nonetheless, this method showcases what the product can be in the future. 
