import * as api from './api.js';
import { showLoader, hideLoader } from './loader.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Raty from 'raty-js';

const BASE_URL = import.meta.env.BASE_URL;

const refs = {
  backdropBtn: document.querySelector('[data-furniture-details-modal]'),
  closeBtn: document.querySelector('[data-furniture-details-close]'),
  orderBtn: document.querySelector('.furniture-order-btn'),
  mainImage: document.getElementById('mainImage'),
  thumbnailsList: document.getElementById('thumbnailsList'),
  furnitureName: document.getElementById('furnitureName'),
  furnitureCategory: document.getElementById('furnitureCategory'),
  furniturePrice: document.getElementById('furniturePrice'),
  furnitureRating: document.getElementById('furnitureRating'),
  colorsList: document.getElementById('colorsList'),
  furnitureDescription: document.getElementById('furnitureDescription'),
  furnitureSize: document.getElementById('furnitureSize'),
  itemsList: document.querySelector('.items'),
};

let currentSelectedColor = null;

function getCustomRoundedRating(rate) {
  return Math.round(parseFloat(rate) * 2) / 2;
}

function formatDimensions(dimensions) {
  if (!dimensions) return '';
  const { width, height, depth } = dimensions;
  if (width && height && depth) {
    return `${width}x${height}x${depth}`;
  }
  return '';
}

function initRating(element, score) {
  element.innerHTML = ''; 

  const raty = new Raty(element, {
    score: score,
    readOnly: true,
    half: true,
    starType: 'i',
    starOn: 'fas fa-star',
    starOff: 'far fa-star',
    starHalf: 'fas fa-star-half-alt',
    space: false,
  });

  raty.init();
}

async function renderFurnitureDetails(furnitureId) {
  try {
    showLoader();
    const furniture = await api.getFurnitureById(furnitureId);

    if (!furniture) {
      iziToast.show({
        message: 'Помилка при завантажені деталей товару',
        color: 'red',
        position: 'topRight',
      });
      return;
    }

    let currentIndex = 0;

    if (furniture.images?.length) {
      refs.mainImage.src = furniture.images[0];
      refs.mainImage.alt = furniture.name;
    }

    function renderThumbnails() {
      refs.thumbnailsList.innerHTML = '';

      furniture.images?.forEach((image, index) => {
        if (index === currentIndex) return;

        const li = document.createElement('li');
        li.className = 'furniture-thumbnail';

        li.innerHTML = `
          <img src="${image}" alt="Thumbnail ${index + 1}">
        `;

        li.addEventListener('click', () => {
          currentIndex = index;
          refs.mainImage.src = image;
          renderThumbnails();
        });

        refs.thumbnailsList.appendChild(li);
      });
    }

    renderThumbnails();

    refs.furnitureName.textContent = furniture.name || '';
    refs.furnitureCategory.textContent = furniture.category?.name || '';
    refs.furniturePrice.textContent = furniture.price
      ? `${furniture.price.toLocaleString('uk-UA')} грн`
      : '';

    const rating = getCustomRoundedRating(furniture.rate || 4);
    initRating(refs.furnitureRating, rating);

    refs.colorsList.innerHTML = '';

    if (furniture.color?.length) {
      currentSelectedColor = furniture.color[0];

      furniture.color.forEach((color, index) => {
        const li = document.createElement('li');
        li.className = 'furniture-color-item';

        const label = document.createElement('label');
        label.className = 'furniture-color-label';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'color';
        input.value = color;
        input.id = `color-${index}`;
        if (index === 0) input.checked = true;

        const circle = document.createElement('div');
        circle.className = 'furniture-color-circle';
        circle.style.backgroundColor = color;

        input.addEventListener('change', e => {
          if (e.target.checked) currentSelectedColor = color;
        });

        label.appendChild(input);
        label.appendChild(circle);
        li.appendChild(label);
        refs.colorsList.appendChild(li);
      });
    }

    refs.furnitureDescription.textContent = furniture.description || '';

    const dimensions = furniture.dimensions || {};
    refs.furnitureSize.textContent =
      furniture.sizes || formatDimensions(dimensions);

    toggleModal();
  } catch (error) {
    console.error(error);

    iziToast.show({
      message: `Помилка: ${error.message}`,
      color: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function toggleModal() {
  refs.backdropBtn?.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function closeModal() {
  if (!refs.backdropBtn.classList.contains('is-hidden')) {
    toggleModal();
  }
}

function openOrderModal() {
  const orderBackdrop = document.querySelector('[data-order-modal]');
  if (orderBackdrop?.classList.contains('is-hidden')) {
    orderBackdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }
}

refs.closeBtn?.addEventListener('click', closeModal);

refs.backdropBtn?.addEventListener('click', e => {
  if (e.target === refs.backdropBtn) closeModal();
});

document.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !refs.backdropBtn.classList.contains('is-hidden')
  ) {
    closeModal();
  }
});

refs.orderBtn?.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();

  closeModal();

  setTimeout(() => {
    openOrderModal();
  }, 100);
});

refs.itemsList?.addEventListener('click', async e => {
  const btn = e.target.closest('.more-info-btn');
  if (!btn) return;

  const card = btn.closest('.item-card');
  const furnitureId = card.dataset.id;

  await renderFurnitureDetails(furnitureId);
});