import galleryItems from './gallery-items.js';

const galleryContiner = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContiner.addEventListener('click', onGalleryClick);

galleryContiner.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  lightboxEl.classList.add('is-open');
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a
    class="gallery__link"
    href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
        </a>
    </li>
    `;
    })
    .join('');
}
