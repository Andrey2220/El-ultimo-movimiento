const botonMenu = document.querySelector('.boton-menu');
const navegacion = document.querySelector('.navegacion');
const botonesProyecto = document.querySelectorAll('.proyecto[data-indice]');
const visor = document.querySelector('.visor');
const visorImagen = document.querySelector('.visor-imagen');
const botonVisorCerrar = document.querySelector('.visor-cerrar');
const botonVisorPrev = document.querySelector('.visor-prev');
const botonVisorNext = document.querySelector('.visor-next');
const numerosConfianza = document.querySelectorAll('.confianza-numero[data-count]');
const comparadores = document.querySelectorAll('.comparador');
const heroBg = document.querySelector('.hero-bg');

const imagenesProyectos = [
  'img/5.jfif',
  'img/6.jfif',
  'img/7.jfif',
  'img/8.jfif',
  'img/9.jfif',
  'img/10.jfif'
];

let indiceActualVisor = 0;

if (botonMenu && navegacion) {
  botonMenu.addEventListener('click', () => {
    const expandido = botonMenu.getAttribute('aria-expanded') === 'true';
    botonMenu.setAttribute('aria-expanded', String(!expandido));
    navegacion.classList.toggle('abierta');
  });

  navegacion.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      botonMenu.setAttribute('aria-expanded', 'false');
      navegacion.classList.remove('abierta');
    });
  });
}

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.revelar').forEach((seccion) => {
  observador.observe(seccion);
});

function animarNumero(elemento) {
  const destino = Number.parseInt(elemento.dataset.count || '0', 10);
  const mostrarPorcentaje = elemento.textContent.includes('%');
  const mostrarPlus = elemento.textContent.includes('+');
  const duracion = 1200;
  const inicio = performance.now();

  function paso(ahora) {
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    const valor = Math.round(destino * progreso);
    elemento.textContent = `${valor}${mostrarPorcentaje ? '%' : ''}${mostrarPlus ? '+' : ''}`;
    if (progreso < 1) {
      requestAnimationFrame(paso);
    }
  }

  requestAnimationFrame(paso);
}

if (numerosConfianza.length) {
  const observadorMetricas = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          animarNumero(entrada.target);
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  numerosConfianza.forEach((numero) => {
    observadorMetricas.observe(numero);
  });
}

if (comparadores.length) {
  comparadores.forEach((comparador) => {
    const vista = comparador.querySelector('.comparador-vista');
    const rango = comparador.querySelector('.comparador-rango');
    if (!vista || !rango) {
      return;
    }

    rango.addEventListener('input', () => {
      vista.style.setProperty('--porcentaje', `${rango.value}%`);
    });
  });
}

if (heroBg) {
  window.addEventListener('scroll', () => {
    const desplazamiento = Math.min(window.scrollY * 0.05, 18);
    heroBg.style.transform = `translateY(${desplazamiento}px)`;
  });
}

window.addEventListener('load', () => {
  if (window.scrollX !== 0) {
    window.scrollTo({ left: 0, top: window.scrollY, behavior: 'auto' });
  }
});

function actualizarImagenVisor(indice) {
  if (!visorImagen) {
    return;
  }

  const total = imagenesProyectos.length;
  indiceActualVisor = (indice + total) % total;
  visorImagen.src = imagenesProyectos[indiceActualVisor];
}

function abrirVisor(indice) {
  if (!visor || !visorImagen) {
    return;
  }

  actualizarImagenVisor(indice);
  visor.classList.add('abierto');
  visor.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarVisor() {
  if (!visor) {
    return;
  }

  visor.classList.remove('abierto');
  visor.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (botonesProyecto.length && visor && visorImagen) {
  botonesProyecto.forEach((boton) => {
    boton.addEventListener('click', () => {
      const indice = Number.parseInt(boton.dataset.indice || '0', 10);
      abrirVisor(Number.isNaN(indice) ? 0 : indice);
    });
  });

  if (botonVisorPrev) {
    botonVisorPrev.addEventListener('click', () => {
      actualizarImagenVisor(indiceActualVisor - 1);
    });
  }

  if (botonVisorNext) {
    botonVisorNext.addEventListener('click', () => {
      actualizarImagenVisor(indiceActualVisor + 1);
    });
  }

  if (botonVisorCerrar) {
    botonVisorCerrar.addEventListener('click', cerrarVisor);
  }

  visor.addEventListener('click', (evento) => {
    if (evento.target === visor) {
      cerrarVisor();
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (!visor.classList.contains('abierto')) {
      return;
    }

    if (evento.key === 'Escape') {
      cerrarVisor();
      return;
    }

    if (evento.key === 'ArrowLeft') {
      actualizarImagenVisor(indiceActualVisor - 1);
    }

    if (evento.key === 'ArrowRight') {
      actualizarImagenVisor(indiceActualVisor + 1);
    }
  });
}
