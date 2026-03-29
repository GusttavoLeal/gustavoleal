const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "01";
const fontSize = 14;

let columns;
let drops;

//  Ajusta tamanho e recalcula colunas corretamente
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}

// Inicializa
resize();

// Recalcula ao redimensionar (ou zoom)
window.addEventListener("resize", resize);

// Desenha o efeito
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        // Reinicia a coluna aleatoriamente
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

// Loop de animação
function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();