import createProjectCard from './components/ProjectCard.js';

const projectModules = import.meta.glob('./projects/*/index.js');
const projectImages = import.meta.glob('./projects/*/assets/*.*', {
  query: '?url',
  eager: true,
});

const projectList = document.getElementById('projectList');
const preloader = document.getElementById('preloader');
const app = document.getElementById('app');

let loadedProjects = 0;
let loadedImages = 0;
let totalProjects = 0;
// const totalProjects = Object.keys(projectModules).length;

function checkAllLoaded() {
  if (loadedProjects === totalProjects && loadedImages === totalProjects) {
    hidePreloader();
    showCards();
  }
}

// biome-ignore lint/complexity/noForEach: <explanation>
Object.entries(projectModules).forEach(([path, module]) => {
  const projectFolder = path.split('/')[2];

  if (projectFolder === 'newEmptyProject') {
    return;
  }

  totalProjects++;

  module().then((projectModule) => {
    const { name, description } = projectModule.default;

    const imageKey = Object.keys(projectImages).find(
      (key) =>
        key.startsWith(`./projects/${projectFolder}/assets/thumbnail.`) &&
        /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(key)
    );

    const imagePath = imageKey ? projectImages[imageKey] : '';

    const card = createProjectCard(name, description, imagePath, projectFolder);

    const tempImg = new Image();
    tempImg.onload = () => {
      loadedImages++;
      checkAllLoaded();
    };
    tempImg.onerror = () => {
      loadedImages++;
      checkAllLoaded();
    };
    tempImg.src = typeof imagePath === 'object' ? imagePath.default : imagePath;

    loadedProjects++;

    projectList.insertAdjacentHTML('beforeend', `<li>${card}</li>`);

    checkAllLoaded();
  });
});

setTimeout(hidePreloader, 5000);

function showCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('loaded');
    }, index * 100);
  });
}

function hidePreloader() {
  preloader.style.display = 'none';
  app.style.removeProperty('display');
  showCards();
}
