const gallery = document.querySelector(".gallery");
const switcherItems = document.querySelectorAll(".switcher li");
const works = {
    all: document.querySelectorAll(".all"),
    web: document.querySelectorAll(".web"),
    gfx: document.querySelectorAll(".gfx"),
    marketing: document.querySelectorAll(".marketing"),
};
switcherItems.forEach((item) => {
    item.addEventListener("click", () => {
        switchGallery(item.dataset.cat);
        addActive(item);
    });
});
function switchGallery(category) {
    gallery.innerHTML = "";
    works[category].forEach((work) => gallery.append(work));
}
function addActive(item) {
    Array.from(item.parentNode.children).forEach((sibling) => {
        sibling.classList.remove("active");
    });
    item.classList.add("active");
}
