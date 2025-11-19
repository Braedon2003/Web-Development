/* ============================
     ACCORDION INTERACTION
============================ */
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

/* ============================
     SEARCH FILTER
============================ */
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll("#notes-list li");

    items.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(filter)
        ? "block"
        : "none";
    });
  });
}

/* ============================
     LIGHTBOX GALLERY
============================ */
const thumbs = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (thumbs) {
  thumbs.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
}

if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
