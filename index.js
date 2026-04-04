import{a as f,i as l,A as w,S as j,N as E,P as S,R as x}from"./assets/vendor-BaliQn07.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();f.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function q(){try{const{data:e}=await f.get("/categories");return e}catch(e){return l.show({message:`Помилка при завантажені категорій: ${e}`,color:"red",position:"topRight"}),[]}}async function R(e=1,t=null){try{let r={page:e,limit:8};t&&(r.category=t);const{data:n}=await f.get("/furnitures",{params:r});return n}catch(r){return l.show({message:`Помилка при завантажені товарів: ${r}`,color:"red",position:"topRight"}),{results:[],totalPages:0}}}let u=0;function b(){u++;const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function y(){if(u--,u<=0){u=0;const e=document.getElementById("loader");e&&e.classList.add("hidden")}}const a="/project_group9/",h=document.querySelector(".categories"),v=document.querySelector(".items"),c=document.querySelector(".load-more-btn"),B=8;let g=1,$=null;const A={"66504a50a1b2c3d4e5f6a7c0":{normal:`${a}img/categories-img/hallway-furniture.jpg`,retina:`${a}img/categories-img/hallway-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7bd":{normal:`${a}img/categories-img/kitchens.jpg`,retina:`${a}img/categories-img/kitchens-2x.jpg`},"66504a50a1b2c3d4e5f6a7c2":{normal:`${a}img/categories-img/garden-furniture.jpg`,retina:`${a}img/categories-img/garden-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7bb":{normal:`${a}img/categories-img/tables.jpg`,retina:`${a}img/categories-img/tables-2x.jpg`},"66504a50a1b2c3d4e5f6a7b8":{normal:`${a}img/categories-img/sofa.jpg`,retina:`${a}img/categories-img/sofa-2x.jpg`},"66504a50a1b2c3d4e5f6a7be":{normal:`${a}img/categories-img/childrens-furniture.jpg`,retina:`${a}img/categories-img/childrens-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7c3":{normal:`${a}img/categories-img/decor.jpg`,retina:`${a}img/categories-img/decor-2x.jpg`},"66504a50a1b2c3d4e5f6a7c1":{normal:`${a}img/categories-img/bathroom.jpg`,retina:`${a}img/categories-img/bathroom-2x.jpg`},"66504a50a1b2c3d4e5f6a7bf":{normal:`${a}img/categories-img/office.jpg`,retina:`${a}img/categories-img/office-2x.jpg`},"66504a50a1b2c3d4e5f6a7b9":{normal:`${a}img/categories-img/wardrobe.jpg`,retina:`${a}img/categories-img/wardrobe-2x.jpg`},"66504a50a1b2c3d4e5f6a7ba":{normal:`${a}img/categories-img/bed.jpg`,retina:`${a}img/categories-img/bed-2x.jpg`},"66504a50a1b2c3d4e5f6a7bc":{normal:`${a}img/categories-img/chairs.jpg`,retina:`${a}img/categories-img/chairs-2x.jpg`}};function T(e){const t=A[e._id];return`
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
  `}function P(e){let t=`
    <li 
      data-id="all-categories"
      class="category-item active-category"
      style="
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
          image-set(
            url('${a}img/categories-img/all-items.jpg') 1x,
            url('${a}img/categories-img/all-items-2x.jpg') 2x
          );
        background-size: cover;
        background-position: center;
      "
    >
      Всі товари
    </li>
  `;return t+=e.map(T).join(""),t}function M(e){const t=e.color.map(r=>`<li class="furnitures-color" style="background-color:${r}"></li>`).join("");return`
    <li class="item-card" data-id="${e._id}">
      <img src="${e.images[0]}" alt="${e.name}">
      <div class="furnitures-description">
        <p class="furnitures-name">${e.name}</p>
        <ul class="furnitures-colors">${t}</ul>
        <p class="furnitures-price">${e.price.toLocaleString("uk-UA")} грн</p>
      </div>
      <button class="more-info-btn">Детальніше</button>
    </li>
  `}function O(e){return e.map(M).join("")}function C(){c.classList.remove("hidden")}function F(){c.classList.add("hidden")}async function L(e=!1){try{b(),e&&(g=1,v.innerHTML=""),c.disabled=!0;const t=await R(g,$);v.insertAdjacentHTML("beforeend",O(t.furnitures)),g++,g*B>t.totalItems?F():C()}catch(t){l.show({message:`Error: ${t}`,color:"red",position:"topRight"})}finally{c.disabled=!1,y()}}h.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(document.querySelectorAll(".category-item").forEach(r=>{r.classList.remove("active-category")}),t.classList.add("active-category"),$=t.dataset.id==="all-categories"?null:t.dataset.id)});async function I(){try{const t=await q();h.insertAdjacentHTML("beforeend",P(t)),await L(!0)}catch(t){l.show({message:`Error: ${t}`,color:"red",position:"topRight"})}const e=document.querySelector('[data-id="all-categories"]');e&&e.classList.add("active-category")}I();h.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(b(),$=t.dataset.id==="all-categories"?null:t.dataset.id,await L(!0),y())});c.addEventListener("click",async()=>{b(),await L(),y()});const _=document.querySelector("[data-menu-open]"),N=document.querySelector("[data-menu-close]"),m=document.querySelector("[data-menu]");function H(){m.classList.add("is-open"),document.body.classList.add("no-scroll")}function k(){m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}_.addEventListener("click",H);N.addEventListener("click",k);m.addEventListener("click",e=>{e.target===m&&k()});new w(".faq-list",{showMultiple:!1,duration:600,triggerClass:"faq-btn",elementClass:"faq-item",panelClass:"answer-text"});const U="https://furniture-store.b.goit.study/api/feedbacks";function z(e){const t=parseFloat(e);return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:t}async function V(){try{const e=await f.get(U,{params:{page:"1",limit:"10"}}),t=Array.isArray(e.data)?e.data:e.data.feedbacks;return console.log(t),t}catch(e){return console.log(e),l.error({message:"Failed to load feedbacks",position:"topRight",titleColor:"red"}),[]}}function D(e){return e.map(({name:t,descr:r,rate:n})=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="star-rating-container" data-rating="${z(n)}"></div>
          
          <p class="feedback-comment">"${r}"</p>
          <h3 class="feedback-user-name">${t}</h3>
        </div>
      </li>
    `).join("")}function G(){document.querySelectorAll(".star-rating-container").forEach(t=>{const r=parseFloat(t.getAttribute("data-rating"));new x(t,{score:r,readOnly:!0,half:!0,halfShow:!0,starType:"i",starOn:"fas fa-star",starOff:"far fa-star",starHalf:"fas fa-star-half-alt",space:!1}).init()})}async function K(){const e=document.querySelector(".feedback-list");if(!e)return;const t=await V();t.length!==0&&(e.innerHTML=D(t),G(),new j(".feedback-swiper",{modules:[E,S],slidesPerView:1,spaceBetween:20,pagination:{el:".feedback-dots",clickable:!0,renderBullet:r=>`<li class="${r}"></li>`},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}}))}K();const s={openBtns:document.querySelectorAll("[data-order-modal-open]"),closeBtn:document.querySelector("[data-order-modal-close]"),backdrop:document.querySelector("[data-order-modal]"),form:document.querySelector(".order-form")};s.openBtns.forEach(e=>{e.addEventListener("click",d)});s.closeBtn.addEventListener("click",d);function d(){s.backdrop&&(s.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}s.backdrop&&s.backdrop.addEventListener("click",e=>{e.target===s.backdrop&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!s.backdrop.classList.contains("is-hidden")&&d()});s.form&&s.form.addEventListener("submit",e=>{e.preventDefault();const t={name:e.currentTarget.elements.userName.value.trim(),phone:e.currentTarget.elements.userPhone.value.trim(),comment:e.currentTarget.elements.userComment.value.trim()};console.log("Дані форми:",t),e.currentTarget.reset(),d()});
//# sourceMappingURL=index.js.map
