import{a as m,i as c,A as k,S as w,N as _,P as E,R as x}from"./assets/vendor-BaliQn07.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();m.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function S(){try{const{data:e}=await m.get("/categories");return e}catch(e){return c.show({message:`Помилка при завантажені категорій: ${e}`,color:"red",position:"topRight"}),[]}}async function $(e=1,t=null){try{let r={page:e,limit:8};t&&(r.category=t);const{data:s}=await m.get("/furnitures",{params:r});return s}catch(r){return c.show({message:`Помилка при завантажені товарів: ${r}`,color:"red",position:"topRight"}),{results:[],totalPages:0}}}let g=0;function f(){g++;const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function b(){if(g--,g<=0){g=0;const e=document.getElementById("loader");e&&e.classList.add("hidden")}}const y=document.querySelector(".categories"),L=document.querySelector(".items"),n=document.querySelector(".load-more-btn"),q=8;let d=1,h=null;const R={"66504a50a1b2c3d4e5f6a7c0":{normal:"project9/img/categories-img/hallway-furniture.jpg",retina:"project_group9/img/categories-img/hallway-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bd":{normal:"project_group9/img/categories-img/kitchens.jpg",retina:"project_group9/img/categories-img/kitchens-2x.jpg"},"66504a50a1b2c3d4e5f6a7c2":{normal:"project_group9/img/categories-img/garden-furniture.jpg",retina:"project_group9/img/categories-img/garden-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bb":{normal:"project_group9/img/categories-img/tables.jpg",retina:"project_group9/img/categories-img/tables-2x.jpg"},"66504a50a1b2c3d4e5f6a7b8":{normal:"project_group9/img/categories-img/sofa.jpg",retina:"project_group9/img/categories-img/sofa-2x.jpg"},"66504a50a1b2c3d4e5f6a7be":{normal:"project_group9/img/categories-img/childrens-furniture.jpg",retina:"project_group9/img/categories-img/childrens-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7c3":{normal:"project_group9/img/categories-img/decor.jpg",retina:"project_group9/img/categories-img/decor-2x.jpg"},"66504a50a1b2c3d4e5f6a7c1":{normal:"project_group9/img/categories-img/bathroom.jpg",retina:"project_group9/img/categories-img/bathroom-2x.jpg"},"66504a50a1b2c3d4e5f6a7bf":{normal:"project_group9/img/categories-img/office.jpg",retina:"project_group9/img/categories-img/office-2x.jpg"},"66504a50a1b2c3d4e5f6a7b9":{normal:"project_group9/img/categories-img/wardrobe.jpg",retina:"project_group9/img/categories-img/wardrobe-2x.jpg"},"66504a50a1b2c3d4e5f6a7ba":{normal:"project_group9/img/categories-img/bed.jpg",retina:"project_group9/img/categories-img/bed-2x.jpg"},"66504a50a1b2c3d4e5f6a7bc":{normal:"project_group9/img/categories-img/chairs.jpg",retina:"project_group9/img/categories-img/chairs-2x.jpg"}};function B(e){const t=R[e._id];return`
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
  `}function T(e){let t=`
    <li 
      data-id="all-categories"
      class="category-item active-category"
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
  `;return t+=e.map(B).join(""),t}function A(e){const t=e.color.map(r=>`<li class="furnitures-color" style="background-color:${r}"></li>`).join("");return`
    <li class="item-card" data-id="${e._id}">
      <img src="${e.images[0]}" alt="${e.name}">
      <div class="furnitures-description">
        <p class="furnitures-name">${e.name}</p>
        <ul class="furnitures-colors">${t}</ul>
        <p class="furnitures-price">${e.price.toLocaleString("uk-UA")} грн</p>
      </div>
      <button class="more-info-btn">Детальніше</button>
    </li>
  `}function P(e){return e.map(A).join("")}function M(){n.classList.remove("hidden")}function O(){n.classList.add("hidden")}async function j(e=!1){try{f(),e&&(d=1,L.innerHTML=""),n.disabled=!0;const t=await $(d,h);L.insertAdjacentHTML("beforeend",P(t.furnitures)),d++,d*q>t.totalItems?O():M()}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}finally{n.disabled=!1,b()}}y.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(document.querySelectorAll(".category-item").forEach(r=>{r.classList.remove("active-category")}),t.classList.add("active-category"),h=t.dataset.id==="all-categories"?null:t.dataset.id)});async function C(){try{const t=await S();y.insertAdjacentHTML("beforeend",T(t)),await j(!0)}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}const e=document.querySelector('[data-id="all-categories"]');e&&e.classList.add("active-category")}C();y.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(f(),h=t.dataset.id==="all-categories"?null:t.dataset.id,await j(!0),b())});n.addEventListener("click",async()=>{f(),await j(),b()});const F=document.querySelector("[data-menu-open]"),I=document.querySelector("[data-menu-close]"),u=document.querySelector("[data-menu]");function N(){u.classList.add("is-open"),document.body.classList.add("no-scroll")}function v(){u.classList.remove("is-open"),document.body.classList.remove("no-scroll")}F.addEventListener("click",N);I.addEventListener("click",v);u.addEventListener("click",e=>{e.target===u&&v()});new k(".faq-list",{showMultiple:!1,duration:600,triggerClass:"faq-btn",elementClass:"faq-item",panelClass:"answer-text"});const H="https://furniture-store.b.goit.study/api/feedbacks";function z(e){const t=parseFloat(e);return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:t}async function U(){try{const e=await m.get(H,{params:{page:"1",limit:"10"}}),t=Array.isArray(e.data)?e.data:e.data.feedbacks;return console.log(t),t}catch(e){return console.log(e),c.error({message:"Failed to load feedbacks",position:"topRight",titleColor:"red"}),[]}}function V(e){return e.map(({name:t,descr:r,rate:s})=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="star-rating-container" data-rating="${z(s)}"></div>
          
          <p class="feedback-comment">"${r}"</p>
          <h3 class="feedback-user-name">${t}</h3>
        </div>
      </li>
    `).join("")}function D(){document.querySelectorAll(".star-rating-container").forEach(t=>{const r=parseFloat(t.getAttribute("data-rating"));new x(t,{score:r,readOnly:!0,half:!0,halfShow:!0,starType:"i",starOn:"fas fa-star",starOff:"far fa-star",starHalf:"fas fa-star-half-alt",space:!1}).init()})}async function G(){const e=document.querySelector(".feedback-list");if(!e)return;const t=await U();t.length!==0&&(e.innerHTML=V(t),D(),new w(".feedback-swiper",{modules:[_,E],slidesPerView:1,spaceBetween:20,pagination:{el:".feedback-dots",clickable:!0,renderBullet:r=>`<li class="${r}"></li>`},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}}))}G();const i={openBtns:document.querySelectorAll("[data-order-modal-open]"),closeBtn:document.querySelector("[data-order-modal-close]"),backdrop:document.querySelector("[data-order-modal]"),form:document.querySelector(".order-form")};i.openBtns.forEach(e=>{e.addEventListener("click",l)});i.closeBtn.addEventListener("click",l);function l(){i.backdrop&&(i.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}i.backdrop&&i.backdrop.addEventListener("click",e=>{e.target===i.backdrop&&l()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.backdrop.classList.contains("is-hidden")&&l()});i.form&&i.form.addEventListener("submit",e=>{e.preventDefault();const t={name:e.currentTarget.elements.userName.value.trim(),phone:e.currentTarget.elements.userPhone.value.trim(),comment:e.currentTarget.elements.userComment.value.trim()};console.log("Дані форми:",t),e.currentTarget.reset(),l()});
//# sourceMappingURL=index.js.map
