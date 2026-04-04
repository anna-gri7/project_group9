const refs = {
  openBtns: document.querySelectorAll("[data-order-modal-open]"), 
  closeBtn: document.querySelector("[data-order-modal-close]"),
  backdrop: document.querySelector("[data-order-modal]"),
  form: document.querySelector(".order-form"),
};

refs.openBtns.forEach(btn => {
  btn.addEventListener("click", toggleModal);
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
  if (e.key === "Escape" && !refs.backdrop.classList.contains("is-hidden")) {
    toggleModal();
  }
});

if (refs.form) {
  refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
    
        const data = {
      name: e.currentTarget.elements.userName.value.trim(),
      phone: e.currentTarget.elements.userPhone.value.trim(),
      comment: e.currentTarget.elements.userComment.value.trim(),
    };

    console.log("Дані форми:", data);
    e.currentTarget.reset();
    toggleModal();
  });
}