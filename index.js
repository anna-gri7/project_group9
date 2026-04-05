import{a as p,i as c,A as j,S as E,N as S,P as x,R}from"./assets/vendor-DScGXjsP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();p.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function q(){try{const{data:e}=await p.get("/categories");return e}catch(e){return c.show({message:`Помилка при завантажені категорій: ${e}`,color:"red",position:"topRight"}),[]}}async function P(e=1,t=null){try{let i={page:e,limit:8};t&&(i.category=t);const{data:s}=await p.get("/furnitures",{params:i});return s}catch(i){return c.show({message:`Помилка при завантажені товарів: ${i}`,color:"red",position:"topRight"}),{results:[],totalPages:0}}}let m=0;function y(){m++;const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function h(){if(m--,m<=0){m=0;const e=document.getElementById("loader");e&&e.classList.add("hidden")}}const r="/project_group9/",w=document.querySelector(".categories"),b=document.querySelector(".items"),d=document.querySelector(".load-more-btn"),B=8;let u=1,$=null;const M={"66504a50a1b2c3d4e5f6a7c0":{normal:`${r}img/categories-img/hallway-furniture.jpg`,retina:`${r}img/categories-img/hallway-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7bd":{normal:`${r}img/categories-img/kitchens.jpg`,retina:`${r}img/categories-img/kitchens-2x.jpg`},"66504a50a1b2c3d4e5f6a7c2":{normal:`${r}img/categories-img/garden-furniture.jpg`,retina:`${r}img/categories-img/garden-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7bb":{normal:`${r}img/categories-img/tables.jpg`,retina:`${r}img/categories-img/tables-2x.jpg`},"66504a50a1b2c3d4e5f6a7b8":{normal:`${r}img/categories-img/sofa.jpg`,retina:`${r}img/categories-img/sofa-2x.jpg`},"66504a50a1b2c3d4e5f6a7be":{normal:`${r}img/categories-img/childrens-furniture.jpg`,retina:`${r}img/categories-img/childrens-furniture-2x.jpg`},"66504a50a1b2c3d4e5f6a7c3":{normal:`${r}img/categories-img/decor.jpg`,retina:`${r}img/categories-img/decor-2x.jpg`},"66504a50a1b2c3d4e5f6a7c1":{normal:`${r}img/categories-img/bathroom.jpg`,retina:`${r}img/categories-img/bathroom-2x.jpg`},"66504a50a1b2c3d4e5f6a7bf":{normal:`${r}img/categories-img/office.jpg`,retina:`${r}img/categories-img/office-2x.jpg`},"66504a50a1b2c3d4e5f6a7b9":{normal:`${r}img/categories-img/wardrobe.jpg`,retina:`${r}img/categories-img/wardrobe-2x.jpg`},"66504a50a1b2c3d4e5f6a7ba":{normal:`${r}img/categories-img/bed.jpg`,retina:`${r}img/categories-img/bed-2x.jpg`},"66504a50a1b2c3d4e5f6a7bc":{normal:`${r}img/categories-img/chairs.jpg`,retina:`${r}img/categories-img/chairs-2x.jpg`}};function T(e){const t=M[e._id];return`
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
            url('${r}img/categories-img/all-items.jpg') 1x,
            url('${r}img/categories-img/all-items-2x.jpg') 2x
          );
        background-size: cover;
        background-position: center;
      "
    >
      Всі товари
    </li>
  `;return t+=e.map(T).join(""),t}function I(e){const t=e.color.map(i=>`<li class="furnitures-color" style="background-color:${i}"></li>`).join("");return`
    <li class="item-card" data-id="${e._id}">
      <img src="${e.images[0]}" alt="${e.name}">
      <div class="furnitures-description">
        <p class="furnitures-name">${e.name}</p>
        <ul class="furnitures-colors">${t}</ul>
        <p class="furnitures-price">${e.price.toLocaleString("uk-UA")} грн</p>
      </div>
      <button class="more-info-btn">Детальніше</button>
    </li>
  `}function F(e){return e.map(I).join("")}function O(){d.classList.remove("hidden")}function C(){d.classList.add("hidden")}async function k(e=!1){try{y(),e&&(u=1,b.innerHTML=""),d.disabled=!0;const t=await P(u,$);b.insertAdjacentHTML("beforeend",F(t.furnitures)),u++,u*B>t.totalItems?C():O()}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}finally{d.disabled=!1,h()}}w.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(document.querySelectorAll(".category-item").forEach(i=>{i.classList.remove("active-category")}),t.classList.add("active-category"),$=t.dataset.id==="all-categories"?null:t.dataset.id,b.scrollIntoView({behavior:"smooth",block:"nearest"}))});async function N(){try{const t=await q();w.insertAdjacentHTML("beforeend",A(t)),await k(!0)}catch(t){c.show({message:`Error: ${t}`,color:"red",position:"topRight"})}const e=document.querySelector('[data-id="all-categories"]');e&&e.classList.add("active-category")}N();w.addEventListener("click",async e=>{const t=e.target.closest(".category-item");t&&(y(),$=t.dataset.id==="all-categories"?null:t.dataset.id,await k(!0),h())});d.addEventListener("click",async()=>{y(),await k(),h()});const _=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),f=document.querySelector("[data-menu]");function H(){f.classList.add("is-open"),document.body.classList.add("no-scroll")}function L(){f.classList.remove("is-open"),document.body.classList.remove("no-scroll")}_.addEventListener("click",H);D.addEventListener("click",L);f.addEventListener("click",e=>{e.target===f&&L()});new j(".faq-list",{showMultiple:!1,duration:600,triggerClass:"faq-btn",elementClass:"faq-item",panelClass:"answer-text"});const U="https://furniture-store.b.goit.study/api/feedbacks";function V(e){const t=parseFloat(e);return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:t}async function z(){try{const e=await p.get(U,{params:{page:"1",limit:"10"}}),t=Array.isArray(e.data)?e.data:e.data.feedbacks;return console.log(t),t}catch(e){return console.log(e),c.error({message:"Failed to load feedbacks",position:"topRight",titleColor:"red"}),[]}}function G(e){return e.map(({name:t,descr:i,rate:s})=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="star-rating-container" data-rating="${V(s)}"></div>
          
          <p class="feedback-comment">"${i}"</p>
          <h3 class="feedback-user-name">${t}</h3>
        </div>
      </li>
    `).join("")}function J(){document.querySelectorAll(".star-rating-container").forEach(t=>{const i=parseFloat(t.getAttribute("data-rating"));new R(t,{score:i,readOnly:!0,half:!0,halfShow:!0,starType:"i",starOn:"fas fa-star",starOff:"far fa-star",starHalf:"fas fa-star-half-alt",space:!1}).init()})}async function K(){const e=document.querySelector(".feedback-list");if(!e)return;const t=await z();t.length!==0&&(e.innerHTML=G(t),J(),new E(".feedback-swiper",{modules:[S,x],slidesPerView:1,spaceBetween:20,pagination:{el:".feedback-dots",clickable:!0,renderBullet:(i,s)=>`<li class="${s}"></li>`},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}}))}K();window.selectedFurnitureId=window.selectedFurnitureId||"";window.selectedMarker=window.selectedMarker||"#000000";const n={openBtns:document.querySelectorAll("[data-order-modal-open]"),closeBtn:document.querySelector("[data-order-modal-close]"),backdrop:document.querySelector("[data-order-modal]"),form:document.querySelector(".order-form")};n.openBtns.forEach(e=>{e.addEventListener("click",()=>g())});n.closeBtn.addEventListener("click",g);function g(){n.backdrop&&(n.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}n.backdrop&&n.backdrop.addEventListener("click",e=>{e.target===n.backdrop&&g()});document.addEventListener("keydown",e=>{e.key==="Escape"&&n.backdrop&&!n.backdrop.classList.contains("is-hidden")&&g()});n.form&&n.form.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.elements.userPhone,s=(t?t.value.trim():"").replace(/\D/g,"");if(s.length!==12){c.warning({title:"Увага",message:`Ви ввели ${s.length} цифр, а треба рівно 12 (наприклад: 380991234567)`,position:"topRight"});return}const a={name:e.currentTarget.elements.userName.value.trim(),phone:s,modelId:window.selectedFurnitureId,color:window.selectedMarker||"#000000",comment:e.currentTarget.elements.userComment.value.trim()||"Без коментарів"};console.log("Відправляю дані:",a);try{const o=await fetch("https://furniture-store.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!o.ok){const v=await o.json();throw new Error(v.message||"Помилка замовлення")}const l=await o.json();console.log("orderData :>> ",l),c.success({title:"Успіх!",message:`Ви замовили ${l.model}. Номер вашого замовлення: ${l.orderNum}`,position:"topRight",timeout:5e3}),e.target.reset(),g()}catch(o){console.log(o.message),c.error({title:"Помилка",message:o.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
