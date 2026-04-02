let particlesInstance;

tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1
  },

  background: {
    color: "#050505"
  },

  particles: {
    number: {
      value: window.innerWidth < 768 ? 50 : 100,
      density: {
        enable: true,
        area: 800
      }
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: { min: 0.05, max: 0.25 }
    },

    size: {
      value: { min: 0.5, max: 2 }
    },

    links: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.3,
      width: 1.2
    },

    move: {
      enable: true,
      speed: 0.15,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      },
      parallax: {
        enable: true,
        force: 30,
        smooth: 10
      }
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "connect"]
      },
      onClick: {
        enable: true,
        mode: ["push"]
      }
    },

    modes: {
      grab: {
        distance: 220,
        links: {
          opacity: 0.7
        }
      },

      connect: {
        distance: 160,
        links: {
          opacity: 0.5
        }
      },

      push: {
        quantity: 4
      }
    }
  },

  detectRetina: true
}).then(container => {
  particlesInstance = container;
});


// Scroll Effects
let ticking = false;

window.addEventListener("scroll", () => {
  if (!particlesInstance || ticking) return;

  ticking = true;

  requestAnimationFrame(() => {
    const scrollY = window.scrollY;

    particlesInstance.options.particles.move.speed =
      0.15 + scrollY * 0.00025;

    particlesInstance.options.particles.opacity.value.max =
      0.25 + scrollY * 0.00005;

    particlesInstance.particles.refresh();

    ticking = false;
  });
});


// Dark / Light mode
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function updateTheme(e) {
  if (!particlesInstance) return;

  const isDark = e.matches;

  particlesInstance.options.background.color =
    isDark ? "#050505" : "#ffffff";

  particlesInstance.options.particles.color.value =
    isDark ? "#ffffff" : "#000000";

  particlesInstance.options.particles.links.color =
    isDark ? "#ffffff" : "#000000";

  particlesInstance.particles.refresh();
}

prefersDark.addEventListener("change", updateTheme);
updateTheme(prefersDark);