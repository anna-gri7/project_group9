import{a as m,i as c,A as w,S as j,N as E,P as x,R as S}from"./assets/vendor-BaliQn07.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();m.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function $(){try{const{data:e}=await m.get("/categories");return e}catch(e){return c.show({message:`Помилка при завантажені категорій: ${e}`,color:"red",position:"topRight"}),[]}}async function q(e=1,t=null){try{let a={page:e,limit:8};t&&(a.category=t);const{data:s}=await m.get("/furnitures",{params:a});return s}catch(a){return c.show({message:`Помилка при завантажені товарів: ${a}`,color:"red",position:"topRight"}),{results:[],totalPages:0}}}let g=0;function p(){g++;const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function b(){if(g--,g<=0){g=0;const e=document.getElementById("loader");e&&e.classList.add("hidden")}}const y=document.querySelector(".categories"),v=document.querySelector(".items"),n=document.querySelector(".load-more-btn"),R=8;let d=1,h=null;const B={"66504a50a1b2c3d4e5f6a7c0":{normal:"/img/categories-img/hallway-furniture.jpg",retina:"/img/categories-img/hallway-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bd":{normal:"/img/categories-img/kitchens.jpg",retina:"/img/categories-img/kitchens-2x.jpg"},"66504a50a1b2c3d4e5f6a7c2":{normal:"/img/categories-img/garden-furniture.jpg",retina:"/img/categories-img/garden-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7bb":{normal:"/img/categories-img/tables.jpg",retina:"/img/categories-img/tables-2x.jpg"},"66504a50a1b2c3d4e5f6a7b8":{normal:"/img/categories-img/sofa.jpg",retina:"/img/categories-img/sofa-2x.jpg"},"66504a50a1b2c3d4e5f6a7be":{normal:"/img/categories-img/childrens-furniture.jpg",retina:"/img/categories-img/childrens-furniture-2x.jpg"},"66504a50a1b2c3d4e5f6a7c3":{normal:"/img/categories-img/decor.jpg",retina:"/img/categories-img/decor-2x.jpg"},"66504a50a1b2c3d4e5f6a7c1":{normal:"/img/categories-img/bathroom.jpg",retina:"/img/categories-img/bathroom-2x.jpg"},"66504a50a1b2c3d4e5f6a7bf":{normal:"/img/categories-img/office.jpg",retina:"/img/categories-img/office-2x.jpg"},"66504a50a1b2c3d4e5f6a7b9":{normal:"/img/categories-img/wardrobe.jpg",retina:"/img/categories-img/wardrobe-2x.jpg"},"66504a50a1b2c3d4e5f6a7ba":{normal:"/img/categories-img/bed.jpg",retina:"/img/categories-img/bed-2x.jpg"},"66504a50a1b2c3d4e5f6a7bc":{normal:"/img/categories-img/chairs.jpg",retina:"/img/categories-img/chairs-2x.jpg"}};function T(e){const t=B[e._id];return`
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
  `}function A(e){let t=`
    <li 
      data-id="all-categories"
      class="category-item active-category"
      style="
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
          image-set(
            url('/img/categories-img/all-items.jpg') 1x,
            url('/img/categories-img/all-items-2x.jpg') 2x
          );
        background-size: cover;
        background-position: center;
      "
    >
      Всі товари
    </li>
  `;return t+=e.map(T).join(""),t}function P(e){const t=e.color.map(a=>`<li class="furnitures-color" style="background-color:${a}"></li>`).join("");return`
    <li class="item-card" data-id="${e._id}">
      <img src="${e.images[0]}" alt="${e.name}">
      <div class="furnitures-description">
        <p class="furnitures-name">${e.name}</p>
        <ul class="furnitures-colors">${t}</ul>
        <p class="furnitures-price">${e.price.toLocaleString("uk-UA")} грн</p>
      </div>
      <button class="more-info-btn">Детальніше</button>
    </li>
  `}function M(e){return e.map(P).join("")}function O(){n.classList.remove("hidden")}function C(){n.classList.add("hidden")}async function L(e=!1){try{p(),e&&(d=1,v.innerHTML=""),n.disabled=!0;const t=await q(d,h);v.insertAdjacentHTML("beforeend",M(t.furnitures)),d++,d*R>t.totalItems?C():O()}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}finally{n.disabled=!1,b()}}y.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(document.querySelectorAll(".category-item").forEach(a=>{a.classList.remove("active-category")}),t.classList.add("active-category"),h=t.dataset.id==="all-categories"?null:t.dataset.id)});async function F(){try{const t=await $();y.insertAdjacentHTML("beforeend",A(t)),await L(!0)}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}const e=document.querySelector('[data-id="all-categories"]');e&&e.classList.add("active-category")}F();y.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(p(),h=t.dataset.id==="all-categories"?null:t.dataset.id,await L(!0),b())});n.addEventListener("click",async()=>{p(),await L(),b()});const I=document.querySelector("[data-menu-open]"),N=document.querySelector("[data-menu-close]"),u=document.querySelector("[data-menu]");function _(){u.classList.add("is-open"),document.body.classList.add("no-scroll")}function k(){u.classList.remove("is-open"),document.body.classList.remove("no-scroll")}I.addEventListener("click",_);N.addEventListener("click",k);u.addEventListener("click",e=>{e.target===u&&k()});new w(".faq-list",{showMultiple:!1,duration:600,triggerClass:"faq-btn",elementClass:"faq-item",panelClass:"answer-text"});const H="https://furniture-store.b.goit.study/api/feedbacks";function z(e){const t=parseFloat(e);return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:t}async function U(){try{const e=await m.get(H,{params:{page:"1",limit:"10"}}),t=Array.isArray(e.data)?e.data:e.data.feedbacks;return console.log(t),t}catch(e){return console.log(e),c.error({message:"Failed to load feedbacks",position:"topRight",titleColor:"red"}),[]}}function V(e){return e.map(({name:t,descr:a,rate:s})=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="star-rating-container" data-rating="${z(s)}"></div>
          
          <p class="feedback-comment">"${a}"</p>
          <h3 class="feedback-user-name">${t}</h3>
        </div>
      </li>
    `).join("")}function D(){document.querySelectorAll(".star-rating-container").forEach(t=>{const a=parseFloat(t.getAttribute("data-rating"));new S(t,{score:a,readOnly:!0,half:!0,halfShow:!0,starType:"i",starOn:"fas fa-star",starOff:"far fa-star",starHalf:"fas fa-star-half-alt",space:!1}).init()})}async function G(){const e=document.querySelector(".feedback-list");if(!e)return;const t=await U();t.length!==0&&(e.innerHTML=V(t),D(),new j(".feedback-swiper",{modules:[E,x],slidesPerView:1,spaceBetween:20,pagination:{el:".feedback-dots",clickable:!0,renderBullet:a=>`<li class="${a}"></li>`},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}}))}G();const o={openBtns:document.querySelectorAll("[data-order-modal-open]"),closeBtn:document.querySelector("[data-order-modal-close]"),backdrop:document.querySelector("[data-order-modal]"),form:document.querySelector(".order-form")};o.openBtns.forEach(e=>{e.addEventListener("click",l)});o.closeBtn.addEventListener("click",l);function l(){o.backdrop&&(o.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}o.backdrop&&o.backdrop.addEventListener("click",e=>{e.target===o.backdrop&&l()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!o.backdrop.classList.contains("is-hidden")&&l()});o.form&&o.form.addEventListener("submit",e=>{e.preventDefault();const t={name:e.currentTarget.elements.userName.value.trim(),phone:e.currentTarget.elements.userPhone.value.trim(),comment:e.currentTarget.elements.userComment.value.trim()};console.log("Дані форми:",t),e.currentTarget.reset(),l()});
//# sourceMappingURL=index.js.map
