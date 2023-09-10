// Lightbox JavaScript
const gallery = document.querySelectorAll('[data-lightbox="project"]');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

gallery.forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le lien de redirection par défaut
        const link = image.getAttribute('href');
        const altText = image.querySelector('img').getAttribute('alt');
        lightbox.innerHTML = `<img src="${link}" alt="${altText}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
