import galleryItems from './gallery-items.js';

const galleryContiner = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');
const lightBoxImageEl = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxContentEl = document.querySelector('.lightbox__content');

closeModalBtn.addEventListener('click', closeModal);

galleryContiner.addEventListener('click', onGalleryClick);

lightboxContentEl.addEventListener('click', onOverlayClick);

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContiner.insertAdjacentHTML('beforeend', galleryMarkup);

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

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  window.addEventListener('keydown', onEscKeyPress);

  lightboxEl.classList.add('is-open');
  lightBoxImageEl.src = event.target.dataset.source;
  lightBoxImageEl.alt = event.target.alt;
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  lightboxEl.classList.remove('is-open');
  lightBoxImageEl.src = '';
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  const isEscape = event.code === 'Escape';

  if (isEscape) {
    closeModal();
  }
}
