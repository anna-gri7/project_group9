const backToTopBtn = document.getElementById("backToTop");
const footer = document.querySelector("footer") || document.querySelector(".footer");

const handleScroll = () => {
  if (!backToTopBtn) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY > 1500) {
    backToTopBtn.classList.add("is-visible");
  } else {
    backToTopBtn.classList.remove("is-visible");
  }

  if (footer) {
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < windowHeight) {
      const footerVisibleHeight = windowHeight - footerRect.top;
      backToTopBtn.style.bottom = `${footerVisibleHeight + 100}px`;
    } else {
      backToTopBtn.style.bottom = `100px`;
    }
  }
};

window.addEventListener("scroll", handleScroll);

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});