const createProjectCard = (name, description, imagePath, projectFolder) => {
  const imageUrl = typeof imagePath === 'object' && imagePath !== null ? imagePath.default : imagePath;

  const imageHtml = imageUrl
    ? `<img src="${imageUrl}" alt="${name}" style="object-fit: cover;" class="w-full h-48" >`
    : `<div class="empty-image w-full h-48 flex items-center justify-center text-white bg-opacity-30 bg-white">No Image</div>`;

  const projectCard = `
  <a href="/projects/${projectFolder}/index.html" target="_blank" class="project-card bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:scale-105 backdrop-filter backdrop-blur-lg opacity-0 transition-opacity">
    ${imageHtml}
    <div class="p-4">
      <h2 class="text-xl font-semibold text-white mb-2">${name}</h2>
      <p class="text-gray-200">${description}</p>
    </div>
  </a>
  `;

  return projectCard;
};

export default createProjectCard;