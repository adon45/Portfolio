const projectGrid = document.getElementById('project-grid');
const projects = [
  {
    title: ' What I have Learned Page',
    link: "https://adon45.github.io/What-I-learned-page/",
    img: 'Tech Page Preview.png',
  },
  {
    title: 'Personal Portfolio',
    link: "https://adon45.github.io/Portfolio/",
    img: "Portfolio Preview.png",
  },
  {
    title: 'Box Loading Timer',
    link: "https://adon45.github.io/HH-Interaction-Timer/",
    img: "Screenshot 2024-06-23 005132.png",
  }
];


projects.forEach( project => {
  const {title, link, img} = project;
  projectGrid.innerHTML +=
   `<a href="${link}" class="project" target="_blank">
          <img src="${img}" alt="Preview" class="project-preview center">
          <p class="project-title"> 
          ${title}  
        </p>  
        </a>`
})
