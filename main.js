document.addEventListener("DOMContentLoaded", () => {

    /* ===== LIGHTBOX FULLSCREEN + CARROSSEL (SAFE) ===== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close-lightbox");

    const prevBtn = document.querySelector("#lightbox .prev");
    const nextBtn = document.querySelector("#lightbox .next");

    const images = document.querySelectorAll(".project-images img");

    let currentIndex = 0;
    let currentGroup = [];

    // ABRIR
    images.forEach((img) => {
        img.addEventListener("click", () => {
            const group = img.parentElement.querySelectorAll("img");

            currentGroup = Array.from(group);
            currentIndex = currentGroup.indexOf(img);

            updateImage();

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // ATUALIZAR IMAGEM
    function updateImage() {
        if (currentGroup.length > 0) {
            lightboxImg.src = currentGroup[currentIndex].src;
        }
    }

    // FECHAR
    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }

    // CLICK FORA
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // BOTÕES (com proteção)
    if (nextBtn && prevBtn) {

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % currentGroup.length;
            updateImage();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
            updateImage();
        });

    }

    // TECLADO
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;

        if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
        if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
        if (e.key === "Escape") closeLightbox();
    });

});