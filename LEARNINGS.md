# Learnings

Team 1: Benjamin Fell Costa, Han Yang, Jane Lupica, Jennifer Chan

# Background
Emerging machine learning (ML) fairness toolkits have great potential to assist data scientists, machine-learning practitioners, and related stakeholders in evaluating the fairness of their datasets and corresponding ML models. However, most toolkits are incomplete and their interfaces are not user-friendly, which makes it difficult for practitioners to adopt these toolkits into their ethical-work practices.

# Our original goal
This project attempts to redesign an existing toolkit called Aequitas and implement the frontend of a small yet valuable portion of the ML-fairness-checking workflow from uploading an example dataset, visualizing the selected dataset, and explaining relevant fairness metrics. Doing so will make toolkit outputs more digestible for both technical and non-technical stakeholders.

Ultimately, we were able to redesign the entire workflow described above (i.e. uploading dataset, visualizing set, explaining fairness metrics.) However, given the time constraints and because this was a front-end-only project, we strategically scoped the project in a way that did not require us to implement any complex ML algorithms. Our primary focus for this project was to improve the usability of the toolkit UI to better guide practitioners through a fairness-evaluation process and understanding the resulting fairness report.


# Functionalities
Our application consists of a 5-step user flow:
1. Homepage. This is where the user can read about what our application offers, providing a “Get started” button for the user to start their fairness analysis.
2. Data Upload. The user uploads their dataset in CSV format into our application, and selects the attributes (columns) that should be considered in the analysis.
3. Setup. The user selects the reference groups that should be used to calculate relative disparities in our Bias Audit. The user has another chance to edit the attributes that should be considered in the analysis.
4. Fairness metrics. The user selects disparity intolerance levels, together with the fairness metrics that should be analyzed and displayed in the results.
5. Results. The application runs the analysis and shows the results to the user. FairML will walk the user through how to interpret it.

- Architecture: Rather than implementing one page per step in our flow, we decided to build a one-page application and treat each step as an individual component. This has two main advantages: First, it allows a much faster and improved user flow, as the application does not reload entire pages, but only some sections within one page. Second, it facilitates communication of information and states between each step, since they all are working uninterruptedly in one application instance.

- Implementation: We implemented our project by using React and IBM’s open-source Carbon design system. Our application consisted of a total of 16 components. This allowed a better user experience as we can load and render changes more granularly in the application, and also allowed our team to work in a more isolated way (always on different files), reducing potential issues and conflicts. The way we organized these components was by creating one header and footer “macro” components that were shown on most of the steps with minor differences, and then 5 major body components that corresponded to each of the 5 steps in our flow. The rest of the components is just a breakdown of these major components and were nested into them. To render the correct step, we relied on a function in our App js file that checks the current state of the user in a React variable called Step/setStep, and we rendered the corresponding component in the body between the header and the footer. At the same time, we adjusted the buttons on the footer and header accordingly.

# What we learned
1. Choose a design system wisely. Initially, we tried using IBM’s open-source Carbon design system. But we quickly realized that to use the Carbon components we needed use SCSS instead of CSS, which falls out of the scope of this course and would add complexity to our design that could negatively impact our compacted project timeline. This prompted us to use Amazon Web Service’s open-source Cloudscape design system instead. Doing so gave us experience importing design-system components and modifying their variants as needed. Additionally, interacting with an existing design system in a front-end capacity was helpful for our UX designer teammates to gain some perspective on how to better design components in Figma so that they can be more easily implemented in React. 

2. Figma is helpful for scoping components. Because this project was intended to kickstart the front-end part of our larger MIMS capstone project, we were forced to pare down our feature-requirements list to only the absolutely necessary components for a minimum viable product that could be built within our short timeline. To address this challenge, our teammates with a UX-design background created a requirements outline and a high-fidelity prototype in Figma to share with our teammates with a more technical programming background in order to quickly get a sense of what they thought might be feasible given the timeline and the skills we learned in the semester.

3. Identify dependencies early. In addition to helping us scope, our feature-requirements list also allowed us to see that we first needed to create a skeleton of our app with placeholder components. Doing so allowed us to strategically divide our work at the beginning of our project and avoid roadblocks later. This was especially helpful when working around our teammates’ different workload schedules. In this way, this experience was valuable because it gave us a taste of what it might be like to collaborate with cross-functional teams in the real world.

4. Github collaboration
Working on Github in a 4-person team made collaboration straightforward. Not only helped us to have a “single point of truth”, but also it was very helpful to resolve code conflicts and work as a team. The two most valuable lessons from using Github in this project were:
- We learned the importance of dealing with dependencies from early on. Package versions that worked for some of us did not work for other members of the team, so we had to figure out the correct package versions and dependencies that allowed the whole team to compile our application. By doing this early on, we optimized the hours of coding for the whole team.
- Frequent code commits/merges allowed us to avoid code conflicts since frequent code commits minimized members of the team working on the same file at the same time. It was also useful to spot and correct code issues early.
- Collaborators adopted the best practices from other members of the team. Given the different experiences around using Github from each of us, we were able to share knowledge and best practices among each other.
