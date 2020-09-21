import galleryItems from './gallery-items.js';

const galleryContiner = document.querySelector('.js-gallery');
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
function fdsfds() {
  console.log('hello world');
}
