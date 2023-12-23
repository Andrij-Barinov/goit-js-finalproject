import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
  .join('');
galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" width="800" height="600">
  `);
  instance.show();
  window.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }
});