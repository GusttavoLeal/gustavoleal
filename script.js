document.addEventListener("DOMContentLoaded", () => {

    /* ===== TERMINAL ===== */
    const lines = [
        "Initializing system...",
        "Loading profile...",
        "Connecting...",
        "System unlocked",
        "Welcome"
    ];

    let i = 0;
    let j = 0;
    const speed = 40;
    const terminal = document.getElementById("terminal-text");

    function type() {
        if (i < lines.length) {
            if (j < lines[i].length) {
                terminal.textContent += lines[i][j];
                j++;
                setTimeout(type, speed);
            } else {
                terminal.textContent += "\n";
                i++;
                j = 0;
                setTimeout(type, 400);
            }
        } else {
            setTimeout(() => {
                document.getElementById("terminal").style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 800);
        }
    }

    type();


    /* ===== LIGHTBOX ===== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close-lightbox");

    const images = document.querySelectorAll(".project-images img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});