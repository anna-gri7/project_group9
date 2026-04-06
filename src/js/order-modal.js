import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
openBtns: document.querySelectorAll("[data-order-modal-open]"),
closeBtn: document.querySelector("[data-order-modal-close]"),
backdrop: document.querySelector("[data-order-modal]"),
form: document.querySelector(".order-form"),
nameInput: document.querySelector("#user-name"),
phoneInput: document.querySelector("#user-phone"),
};

if (refs.form) refs.form.setAttribute("novalidate", "");

let currentProductId = "";
function toggleModal() {
refs.backdrop.classList.toggle("is-hidden");
document.body.classList.toggle("no-scroll");
}

refs.openBtns.forEach(btn => {
btn.addEventListener("click", (e) => {
const productId = btn.getAttribute("data-id");
if (productId) {
currentProductId = productId;
} toggleModal();
});
});

refs.closeBtn?.addEventListener("click", toggleModal);

refs.backdrop?.addEventListener("click", e => {
if (e.target === refs.backdrop) {
toggleModal();
}
});

document.addEventListener("keydown", e => {
if (e.key === "Escape" && !refs.backdrop.classList.contains("is-hidden")) {
toggleModal();
}
});

function showError(input, message) {
const error = input.parentElement.querySelector(".error-text");
input.classList.add("error");
if (error) {
error.textContent = message;
error.style.display = "block";
}
}

function hideError(input) {
const error = input.parentElement.querySelector(".error-text");
input.classList.remove("error");

if (error) {
error.style.display = "none";
}
}

refs.nameInput?.addEventListener("input", e => {
const input = e.target;
const value = input.value.trim();
const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄґҐ\s]+$/;

if (value.length > 0 && !nameRegex.test(value)) {
showError(input, "Тільки букви");
}
else if (value.length >= 2 && nameRegex.test(value)) {
hideError(input);
}
});
refs.nameInput?.addEventListener("blur", e => {
const input = e.target;
const value = input.value.trim();

if (value.length > 0 && value.length < 2) {
showError(input, "Мінімум 2 букви");
}
});

refs.phoneInput?.addEventListener("input", e => {
const input = e.target;
input.value = input.value.replace(/\D/g, "");
const value = input.value;
   
if (value.length === 12 && value.startsWith("380")) {
hideError(input);
}
});
refs.phoneInput?.addEventListener("blur", e => {
const input = e.target;
const val = input.value;
if (val.length > 0 && (val.length !== 12 || !val.startsWith("380"))) {
showError(input, "Введіть 12 цифр (380...)");
}
});
  
refs.form?.addEventListener("submit", async e => {
 e.preventDefault();

const nameValue = refs.nameInput.value.trim();
const phoneValue = refs.phoneInput.value.trim();
const userComment = e.currentTarget.elements.userComment.value.trim();
let hasError = false;

const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄґҐ\s]+$/;
if (nameValue.length < 2 || !nameRegex.test(nameValue)) {
showError(refs.nameInput, "Мінімум 2 букви");
hasError = true;
} else {
hideError(refs.nameInput);
}

const normPhone = phoneValue.replace(/\D/g, "");
if (normPhone.length !== 12 || !phoneValue.startsWith("380")) {
showError(refs.phoneInput, "Введіть 12 цифр (380...)");
hasError = true;
} else {
hideError(refs.phoneInput);
}

if (hasError) {
iziToast.error({
title: "Помилка",
message: "Заповніть поля коректно",
position: "topRight",
});
return;
}
const cleanPhone = phoneValue.replace(/\D/g, "");
const formData = {
name: nameValue,
phone: cleanPhone,
modelId: currentProductId,
color: window.selectedMarker || "#1212ca",
comment: userComment.length >= 5 ? userComment : "Чекатиму на зворотний зв'язок",
};

try {
const response = await fetch(
"https://furniture-store-v2.b.goit.study/api/orders",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(formData),
}
);
const orderData = await response.json(); 
if (!response.ok) {
throw new Error(orderData.message || "Помилка сервера");
}
   
iziToast.success({
title: "Успіх",
message: `Ви замовили ${orderData.model}, номер вашого замовлення: ${orderData.orderNum}`,
position: "topRight",
timeout: 5000, 
});

e.target.reset();
toggleModal();
} catch (error) {
iziToast.error({
title: "Помилка",
message: error.message,
position: "topRight",
});
}
});