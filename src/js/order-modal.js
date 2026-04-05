import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

window.selectedFurnitureId = window.selectedFurnitureId || "";
window.selectedMarker = window.selectedMarker || "#000000";

const refs = {
openBtns: document.querySelectorAll("[data-order-modal-open]"), 
closeBtn: document.querySelector("[data-order-modal-close]"),
backdrop: document.querySelector("[data-order-modal]"),
form: document.querySelector(".order-form"),
};

refs.openBtns.forEach(btn => {
btn.addEventListener("click", () => 
toggleModal());
});

refs.closeBtn.addEventListener("click", toggleModal);

function toggleModal() {
if (refs.backdrop) {
refs.backdrop.classList.toggle("is-hidden");
document.body.classList.toggle("no-scroll");
}
}

if (refs.backdrop) {
refs.backdrop.addEventListener("click", e => {
if (e.target === refs.backdrop) {
toggleModal();
}
});
}

document.addEventListener("keydown", e => {
if (e.key === "Escape" && refs.backdrop && !refs.backdrop.classList.contains("is-hidden")) {
toggleModal();
}
});

if (refs.form) {
refs.form.addEventListener("submit", async (e) => {
 e.preventDefault();

    
const phoneInput = e.currentTarget.elements.userPhone;
const rawPhone = phoneInput ? phoneInput.value.trim() : "";
    
const cleanPhone = rawPhone.replace(/\D/g, ""); 
    
if (cleanPhone.length !== 12) {
iziToast.warning({
title: "Увага",
message: `Ви ввели ${cleanPhone.length} цифр, а треба рівно 12 (наприклад: 380991234567)`,
position: "topRight",
});
return; 
}

const formData = {
name: e.currentTarget.elements.userName.value.trim(), // додаємо ім'я
phone: cleanPhone,
modelId: window.selectedFurnitureId,
color: window.selectedMarker || "#000000",
comment: e.currentTarget.elements.userComment.value.trim() || "Без коментарів",
};
 console.log("Відправляю дані:", formData);

try {
const response = await fetch("https://furniture-store.b.goit.study/api/orders", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(formData),
});

if (!response.ok) {
const errorData = await response.json();
throw new Error(errorData.message || "Помилка замовлення");
}

const orderData = await response.json();
console.log('orderData :>> ', orderData);

iziToast.success({
title: "Успіх!",
message: `Ви замовили ${orderData.model}. Номер вашого замовлення: ${orderData.orderNum}`,
position: "topRight",
timeout: 5000, 
});

e.target.reset(); 
toggleModal();
} catch (error) {
console.log(error.message); 
iziToast.error({
title: "Помилка",
message: error.message,
position: "topRight",
});
}
});
}