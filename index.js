import{a as g,i as s,S as y,N as h,P as w,R as j}from"./assets/vendor-D8wu4Sqk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();g.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function k(){try{const{data:e}=await g.get("/categories");return e}catch(e){return s.show({message:`Помилка при завантажені категорій: ${e}`,color:"red",position:"topRight"}),[]}}async function L(e=1,t=null){try{let r={page:e,limit:8};t&&(r.category=t);const{data:o}=await g.get("/furnitures",{params:r});return o}catch(r){return s.show({message:`Помилка при завантажені товарів: ${r}`,color:"red",position:"topRight"}),{results:[],totalPages:0}}}const f=document.querySelector(".categories"),m=document.querySelector(".items"),n=document.querySelector(".load-more-btn"),v=8;let c=1,p=null;const x={"66504a50a1b2c3d4e5f6a7c0":{normal:"../img/categories-img/hallway-furniture.jpg",retina:"../img/categories-img/hallway-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bd":{normal:"../img/categories-img/kitchens.jpg",retina:"../img/categories-img/kitchens-2x.jpg"},"66504a50a1b2c3d4e5f6a7c2":{normal:"../img/categories-img/garden-furniture.jpg",retina:"../img/categories-img/garden-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bb":{normal:"../img/categories-img/tables.jpg",retina:"../img/categories-img/tables-2x.jpg"},"66504a50a1b2c3d4e5f6a7b8":{normal:"../img/categories-img/sofa.jpg",retina:"../img/categories-img/sofa-2x.jpg"},"66504a50a1b2c3d4e5f6a7be":{normal:"../img/categories-img/childrens-furniture.jpg",retina:"../img/categories-img/childrens-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7c3":{normal:"../img/categories-img/decor.jpg",retina:"../img/categories-img/decor-2x.jpg"},"66504a50a1b2c3d4e5f6a7c1":{normal:"../img/categories-img/bathroom.jpg",retina:"../img/categories-img/bathroom-2x.jpg"},"66504a50a1b2c3d4e5f6a7bf":{normal:"../img/categories-img/office.jpg",retina:"../img/categories-img/office-2x.jpg"},"66504a50a1b2c3d4e5f6a7b9":{normal:"../img/categories-img/wardrobe.jpg",retina:"../img/categories-img/wardrobe-2x.jpg"},"66504a50a1b2c3d4e5f6a7ba":{normal:"../img/categories-img/bed.jpg",retina:"../img/categories-img/bed-2x.jpg"},"66504a50a1b2c3d4e5f6a7bc":{normal:"../img/categories-img/chairs.jpg",retina:"../img/categories-img/chairs-2x.jpg"}};function $(e){const t=x[e._id];return`
    <li 
      data-id="${e._id}"
      class="category-item"
      style="
        background-image: ${t?`image-set(
                url('${t.normal}') 1x,
                url('${t.retina}') 2x
              )`:"none"};
        background-size: cover;
        background-position: center;
      "
    >
      ${e.name}
    </li>
  `}function R(e){let t=`
    <li 
      data-id="all-categories"
      class="category-item"
      style="
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
          image-set(
            url('../img/categories-img/all-items.jpg') 1x,
            url('../img/categories-img/all-items-2x.jpg') 2x
          );
        background-size: cover;
        background-position: center;
      "
    >
      Всі товари
    </li>
  `;return t+=e.map($).join(""),t}function S(e){const t=e.color.map(r=>`<li class="furnitures-color" style="background-color:${r}"></li>`).join("");return`
    <li class="item-card" data-id="${e._id}">
      <img src="${e.images[0]}" alt="${e.name}">
      <div class="furnitures-description">
        <p class="furnitures-name">${e.name}</p>
        <ul class="furnitures-colors">${t}</ul>
        <p class="furnitures-price">${e.price.toLocaleString("uk-UA")} грн</p>
      </div>
      <button class="more-info-btn">Детальніше</button>
    </li>
  `}function E(e){return e.map(S).join("")}function P(){n.classList.remove("hidden")}function M(){n.classList.add("hidden")}async function u(e=!1){try{e&&(c=1,m.innerHTML=""),n.disabled=!0;const t=await L(c,p);m.insertAdjacentHTML("beforeend",E(t.furnitures)),c++,c*v>t.totalItems?M():P()}catch(t){s.show({message:`Error: ${t}`,color:"red",position:"topRight"})}finally{n.disabled=!1}}async function T(){try{const e=await k();f.insertAdjacentHTML("beforeend",R(e)),await u(!0)}catch(e){s.show({message:`Error: ${e}`,color:"red",position:"topRight"})}}T();f.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(p=t.dataset.id==="all-categories"?null:t.dataset.id,await u(!0))});n.addEventListener("click",async()=>{await u()});const A=document.querySelector("[data-menu-open]"),q=document.querySelector("[data-menu-close]"),l=document.querySelector("[data-menu]");function B(){l.classList.add("is-open"),document.body.classList.add("no-scroll")}function b(){l.classList.remove("is-open"),document.body.classList.remove("no-scroll")}A.addEventListener("click",B);q.addEventListener("click",b);l.addEventListener("click",e=>{e.target===l&&b()});const O="https://furniture-store.b.goit.study/api/feedbacks";function F(e){const t=parseFloat(e);return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:t}async function _(){try{const e=await g.get(O,{params:{page:"1",limit:"10"}}),t=Array.isArray(e.data)?e.data:e.data.feedbacks;return console.log(t),t}catch(e){return console.log(e),s.error({message:"Failed to load feedbacks",position:"topRight",titleColor:"red"}),[]}}function H(e){return e.map(({name:t,descr:r,rate:o})=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="star-rating-container" data-rating="${F(o)}"></div>
          
          <p class="feedback-comment">"${r}"</p>
          <h3 class="feedback-user-name">${t}</h3>
        </div>
      </li>
    `).join("")}function I(){document.querySelectorAll(".star-rating-container").forEach(t=>{const r=parseFloat(t.getAttribute("data-rating"));new j(t,{score:r,readOnly:!0,half:!0,halfShow:!0,starType:"i",starOn:"fas fa-star",starOff:"far fa-star",starHalf:"fas fa-star-half-alt",space:!1}).init()})}async function N(){const e=document.querySelector(".feedback-list");if(!e)return;const t=await _();t.length!==0&&(e.innerHTML=H(t),I(),new y(".feedback-swiper",{modules:[h,w],slidesPerView:1,spaceBetween:20,pagination:{el:".feedback-dots",clickable:!0,renderBullet:r=>`<li class="${r}"></li>`},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}}))}N();
//# sourceMappingURL=index.js.map
