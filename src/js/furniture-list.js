// рендер карток 
import * as api from "./api.js";

const categories = document.querySelector(".categories");
const items = document.querySelector(".items");
const loadBtn = document.querySelector(".load-more-btn");
const ITEMS_PER_PAGE = 8;
let page = 1;
let id = null;

const categoryImages = {
  "66504a50a1b2c3d4e5f6a7c0": {
    normal: "../img/categories-img/hallway-furniture.jpg",
    retina: "../img/categories-img/hallway-furniture-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7bd": {
    normal: "../img/categories-img/kitchens.jpg",
    retina: "../img/categories-img/kitchens-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7c2": {
    normal: "../img/categories-img/garden-furniture.jpg",
    retina: "../img/categories-img/garden-furniture-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7bb": {
    normal: "../img/categories-img/tables.jpg",
    retina: "../img/categories-img/tables-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7b8": {
    normal: "../img/categories-img/sofa.jpg",
    retina: "../img/categories-img/sofa-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7be": {
    normal: "../img/categories-img/childrens-furniture.jpg",
    retina: "../img/categories-img/childrens-furniture-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7c3": {
    normal: "../img/categories-img/decor.jpg",
    retina: "../img/categories-img/decor-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7c1": {
    normal: "../img/categories-img/bathroom.jpg",
    retina: "../img/categories-img/bathroom-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7bf": {
    normal: "../img/categories-img/office.jpg",
    retina: "../img/categories-img/office-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7b9": {
    normal: "../img/categories-img/wardrobe.jpg",
    retina: "../img/categories-img/wardrobe-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7ba": {
    normal: "../img/categories-img/bed.jpg",
    retina: "../img/categories-img/bed-2x.jpg",
  },
  "66504a50a1b2c3d4e5f6a7bc": {
    normal: "../img/categories-img/chairs.jpg",
    retina: "../img/categories-img/chairs-2x.jpg",
  },
};

function categoryTemplate(item) {
  const img = categoryImages[item._id];
  return `
    <li 
      data-id = ${item._id}
      class="category-item"
      style="
        background-image: image-set(
          url('${img.normal}') 1x,
          url('${img.retina}') 2x
        );
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      ${item.name}
    </li>
  `;
}

function categoriesTemplate(items) {
  let markup = `<li 
      data-id = "all-categories"
      class="category-item"
      style="
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
          image-set(
            url('../img/categories-img/all-items.jpg') 1x,
            url('../img/categories-img/all-items-2x.jpg') 2x
          );
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      Всі товари
    </li>`;
  markup += items.map(categoryTemplate).join("");
  return markup;
}

function furnitureTemplate(item) {
  const colors = item.color
    .map(
      (color) =>
        `<li class="furnitures-color" data-color="${color}" style="background-color: ${color};"></li>`,
    )
    .join("");

  return `<li class=item-card>
            <img src="${item.images[0]}" alt="${item.name}">
            <div class=furnitures-description>
                <p class=furnitures-name>${item.name}</p>
                <ul class=furnitures-colors>
                    ${colors}
                </ul>
                <p class=furnitures-price>${item.price.toLocaleString("ua-UA")} грн</p>
            </div>
            <button type="button" class="more-info-btn">Детальніше</button>
        </li>`;
}

function furnituresTemplate(items) {
  return items.map(furnitureTemplate).join("");
}

function showLoadMoreButton() {
  loadBtn.classList.remove("hidden");
}

function hideLoadMoreButton() {
  loadBtn.classList.add("hidden");
}

async function loadFurniture(reset = false) {
  if (reset) {
    page = 1;
    items.innerHTML = "";
  }
  try {
    loadBtn.disabled = true;
    const data = await api.getFurniture(page, id);
    items.insertAdjacentHTML(
      "beforeend",
      furnituresTemplate(data.furnitures)
    );
    page++;
    if (page * ITEMS_PER_PAGE > data.totalItems) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error("Помилка завантаження:", error);
  } finally {
    loadBtn.disabled = false;
  }
}

const categoriesData = await api.getCategories();

categories.insertAdjacentHTML(
  "beforeend",
  categoriesTemplate(categoriesData)
);

await loadFurniture(true);

categories.addEventListener("click", async (e) => {
  const target = e.target.closest(".category-item");
  if (!target) return;
  const categoryId = target.dataset.id;
  id = categoryId === "all-categories" ? null : categoryId;
  await loadFurniture(true);
});

loadBtn.addEventListener("click", async () => {
  await loadFurniture();
});
