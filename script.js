const botonMenu = document.querySelector('.boton-menu');
const navegacion = document.querySelector('.navegacion');
const botonesIdioma = document.querySelectorAll('.boton-idioma');
const metaDescripcion = document.querySelector('#meta-descripcion');
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

const CLAVE_IDIOMA = 'idioma_preferido';
const IDIOMA_POR_DEFECTO = 'ru';

const traducciones = {
  es: {
    titulo_pagina: 'El ultimo movimiento | Alicatado Profesional de Paredes y Suelos',
    meta_descripcion: 'Alicatado profesional de paredes y suelos para viviendas y espacios comerciales.',
    saltar_contenido: 'Saltar al contenido',
    alt_logotipo: 'Logotipo de El ultimo movimiento',
    abrir_menu: 'Abrir menu',
    menu_sobre: 'SOBRE NOSOTROS',
    menu_servicios: 'SERVICIOS',
    menu_proyectos: 'PROYECTOS',
    menu_resenas: 'RESENAS',
    menu_contacto: 'CONTACTO',
    portada_etiqueta: 'ALICATADO PROFESIONAL DE PAREDES Y SUELOS PARA VIVIENDAS Y ESPACIOS COMERCIALES',
    portada_titulo: 'SERVICIOS PROFESIONALES DE ALICATADO EN MILTON KEYNES Y ALREDEDORES',
    sobre_titulo: 'Transformamos Espacios con Instalacion Profesional de Azulejos',
    sobre_texto_1: 'El ultimo movimiento ofrece trabajos de alicatado fiables y de alta calidad para viviendas y espacios comerciales. Instalamos revestimientos de pared y suelo en banos, cocinas, pasillos y zonas exteriores.',
    sobre_texto_2: 'Desde la eleccion de materiales hasta la preparacion de superficies y remates, cada etapa se realiza con atencion al detalle y comunicacion clara.',
    cta_principal: 'SOLICITA TU PRESUPUESTO GRATIS HOY',
    cta_pedir: 'Pedir',
    cta_ver_proyectos: 'Ver proyectos',
    cta_resena: 'Dejar resena',
    confianza_etiqueta: 'Confianza y resultados',
    confianza_1: 'Anos de experiencia',
    confianza_2: 'Proyectos terminados',
    confianza_3: 'Clientes satisfechos',
    antes_despues_titulo: 'Comparativas antes y despues',
    antes_despues_intro: 'Desliza para ver la transformacion real de los espacios.',
    alt_antes: 'Estado antes del alicatado',
    alt_despues: 'Estado despues del alicatado',
    aria_comparador: 'Comparador antes y despues',
    alt_retrato: 'Retrato de alicatador',
    servicios_titulo: 'Servicios que ofrecemos',
    servicios_intro: 'Nuestros servicios de alicatado estan pensados para mejorar cada estancia de tu inmueble con instalaciones practicas, duraderas y acabados impecables.',
    servicio_1_titulo: 'ALICATADO DE BANOS',
    servicio_1_texto: 'Disenos resistentes al agua, juntas limpias y acabado premium para banos modernos.',
    servicio_2_titulo: 'ALICATADO DE SUELOS',
    servicio_2_texto: 'Instalaciones duraderas para zonas de alto uso con nivelacion y alineacion precisas.',
    servicio_3_titulo: 'ALICATADO DE COCINAS',
    servicio_3_texto: 'Paredes con estilo y soluciones funcionales para cocinas familiares de uso diario.',
    servicios_extra: 'Servicios adicionales: LVT, suelos de madera, enlucido, recrecidos, preparacion de superficies y trabajos de pavimentacion exterior.',
    cta_secundario: 'PIDE TU PRESUPUESTO GRATIS HOY',
    proyectos_titulo: 'Proyectos recientes',
    proyectos_intro: 'Una seleccion de nuestros ultimos trabajos de alicatado y solado.',
    galeria_proyectos: 'Galeria de proyectos',
    abrir_proyecto_1: 'Abrir proyecto 1',
    abrir_proyecto_2: 'Abrir proyecto 2',
    abrir_proyecto_3: 'Abrir proyecto 3',
    abrir_proyecto_4: 'Abrir proyecto 4',
    abrir_proyecto_5: 'Abrir proyecto 5',
    abrir_proyecto_6: 'Abrir proyecto 6',
    alt_proyecto_1: 'Proyecto de alicatado 1',
    alt_proyecto_2: 'Proyecto de alicatado 2',
    alt_proyecto_3: 'Proyecto de alicatado 3',
    alt_proyecto_4: 'Proyecto de alicatado 4',
    alt_proyecto_5: 'Proyecto de alicatado 5',
    alt_proyecto_6: 'Proyecto de alicatado 6',
    cerrar_visor: 'Cerrar visor',
    imagen_anterior: 'Imagen anterior',
    imagen_siguiente: 'Imagen siguiente',
    alt_visor: 'Proyecto ampliado',
    resenas_titulo: 'Testimonios',
    resenas_intro: 'Lo que dicen nuestros clientes sobre nuestro trabajo.',
    resena_1_texto: 'Acabado preciso, trato muy profesional en obra y el bano ha quedado exactamente como queriamos.',
    resena_2_texto: 'Respuesta rapida, presupuesto claro y resultado de alto nivel desde la preparacion hasta el final.',
    resena_3_texto: 'Contratamos a El ultimo movimiento para cocina y pasillo, y la calidad del trabajo es excelente.',
    resena_1_zona: 'Valencia · Ruzafa',
    resena_2_zona: 'Valencia · Benimaclet',
    resena_3_zona: 'Valencia · Campanar',
    contacto_titulo: 'Alicatador en Valencia',
    contacto_texto: 'Trabajamos solo en Valencia. Todos los contactos y el mapa de cobertura estan en el pie de pagina.',
    contacto_telefono: 'Telefono: +44 7000 000000',
    enlaces_titulo: 'Enlaces adicionales',
    pie_texto: 'Diseno web para oficios y servicios',
    pie_ubicacion_titulo: 'Ubicacion',
    pie_ubicacion_texto: 'Valencia, Espana',
    pie_contacto_titulo: 'Contacto',
    pie_telefono: 'Telefono: +44 7000 000000',
    pie_mapa_titulo: 'Mapa de cobertura',
    pie_zona_texto: 'Zona de trabajo: solo Valencia',
    pie_respuesta_texto: 'Respondemos por WhatsApp en 5-10 min',
    pie_horario_texto: 'Horario: Lunes-Sabado, 08:00-20:00'
  },
  ru: {
    titulo_pagina: 'El ultimo movimiento | Professional Wall and Floor Tiling',
    meta_descripcion: 'Professional wall and floor tiling for residential and commercial spaces.',
    saltar_contenido: 'Перейти к содержанию',
    alt_logotipo: 'Логотип El ultimo movimiento',
    abrir_menu: 'Открыть меню',
    menu_sobre: 'О НАС',
    menu_servicios: 'УСЛУГИ',
    menu_proyectos: 'ПРОЕКТЫ',
    menu_resenas: 'ОТЗЫВЫ',
    menu_contacto: 'КОНТАКТЫ',
    portada_etiqueta: 'ПРОФЕССИОНАЛЬНАЯ УКЛАДКА ПЛИТКИ НА СТЕНЫ И ПОЛЫ ДЛЯ ЖИЛЫХ И КОММЕРЧЕСКИХ ПОМЕЩЕНИЙ',
    portada_titulo: 'ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ ПО УКЛАДКЕ ПЛИТКИ В MILTON KEYNES И ОКРЕСТНОСТЯХ',
    sobre_titulo: 'Преображаем Пространства с Профессиональной Укладкой Плитки',
    sobre_texto_1: 'El ultimo movimiento выполняет надежную и качественную укладку плитки для домов и коммерческих интерьеров. Мы облицовываем стены и полы в ванных, кухнях, коридорах и наружных зонах.',
    sobre_texto_2: 'От подбора материалов до подготовки поверхности и финальных деталей, каждый этап выполняется с вниманием к качеству и понятной коммуникацией.',
    cta_principal: 'ПОЛУЧИТЬ БЕСПЛАТНУЮ СМЕТУ СЕГОДНЯ',
    cta_pedir: 'Заказать',
    cta_ver_proyectos: 'Смотреть проекты',
    cta_resena: 'Оставить отзыв',
    confianza_etiqueta: 'Доверие и результат',
    confianza_1: 'Лет опыта',
    confianza_2: 'Завершенных объектов',
    confianza_3: 'Довольных клиентов',
    antes_despues_titulo: 'Сравнение до и после',
    antes_despues_intro: 'Потяните ползунок и сравните результат работ.',
    alt_antes: 'Состояние до укладки плитки',
    alt_despues: 'Состояние после укладки плитки',
    aria_comparador: 'Слайдер сравнения до и после',
    alt_retrato: 'Портрет мастера-плиточника',
    servicios_titulo: 'Наши услуги',
    servicios_intro: 'Наши услуги по укладке плитки помогают улучшить каждую зону вашего объекта: практично, долговечно и с аккуратной отделкой.',
    servicio_1_titulo: 'ПЛИТКА ДЛЯ ВАННЫХ',
    servicio_1_texto: 'Влагостойкие решения, ровные швы и премиальная отделка для современных ванных комнат.',
    servicio_2_titulo: 'ПЛИТКА ДЛЯ ПОЛОВ',
    servicio_2_texto: 'Износостойкая укладка для зон высокой нагрузки с точным выравниванием и геометрией.',
    servicio_3_titulo: 'ПЛИТКА ДЛЯ КУХОНЬ',
    servicio_3_texto: 'Стильные стены и практичные фартуки для семейных кухонь с ежедневной нагрузкой.',
    servicios_extra: 'Дополнительные услуги: LVT, деревянные полы, штукатурка, стяжка, подготовка оснований и наружное мощение.',
    cta_secundario: 'ЗАКАЗАТЬ БЕСПЛАТНУЮ СМЕТУ СЕГОДНЯ',
    proyectos_titulo: 'Последние проекты',
    proyectos_intro: 'Подборка наших недавних работ по облицовке стен и укладке напольной плитки.',
    galeria_proyectos: 'Галерея проектов',
    abrir_proyecto_1: 'Открыть проект 1',
    abrir_proyecto_2: 'Открыть проект 2',
    abrir_proyecto_3: 'Открыть проект 3',
    abrir_proyecto_4: 'Открыть проект 4',
    abrir_proyecto_5: 'Открыть проект 5',
    abrir_proyecto_6: 'Открыть проект 6',
    alt_proyecto_1: 'Проект плиточных работ 1',
    alt_proyecto_2: 'Проект плиточных работ 2',
    alt_proyecto_3: 'Проект плиточных работ 3',
    alt_proyecto_4: 'Проект плиточных работ 4',
    alt_proyecto_5: 'Проект плиточных работ 5',
    alt_proyecto_6: 'Проект плиточных работ 6',
    cerrar_visor: 'Закрыть просмотр',
    imagen_anterior: 'Предыдущее изображение',
    imagen_siguiente: 'Следующее изображение',
    alt_visor: 'Проект крупным планом',
    resenas_titulo: 'Отзывы',
    resenas_intro: 'Что клиенты говорят о нашей работе.',
    resena_1_texto: 'Точная отделка, профессиональная работа на объекте, и ванная получилась именно такой, как мы хотели.',
    resena_2_texto: 'Быстрый ответ, понятная смета и высокий стандарт качества от подготовки до финала.',
    resena_3_texto: 'Заказывали El ultimo movimiento для кухни и коридора, качество выполнения отличное.',
    resena_1_zona: 'Валенсия · Рузафа',
    resena_2_zona: 'Валенсия · Бенимаклет',
    resena_3_zona: 'Валенсия · Кампанар',
    contacto_titulo: 'Плиточник в Валенсии',
    contacto_texto: 'Мы работаем только по Валенсии. Все контакты и карта зоны обслуживания находятся в футере.',
    contacto_telefono: 'Телефон: +44 7000 000000',
    enlaces_titulo: 'Дополнительные ссылки',
    pie_texto: 'Веб-дизайн для строительных и сервисных компаний',
    pie_ubicacion_titulo: 'Локация',
    pie_ubicacion_texto: 'Валенсия, Испания',
    pie_contacto_titulo: 'Контакты',
    pie_telefono: 'Телефон: +44 7000 000000',
    pie_mapa_titulo: 'Карта зоны обслуживания',
    pie_zona_texto: 'Зона работы: только Валенсия',
    pie_respuesta_texto: 'Отвечаем в WhatsApp за 5-10 минут',
    pie_horario_texto: 'График: Понедельник-Суббота, 08:00-20:00'
  }
};

function actualizarEstadoBotones(idioma) {
  botonesIdioma.forEach((boton) => {
    const activo = boton.dataset.idioma === idioma;
    boton.classList.toggle('activo', activo);
    boton.setAttribute('aria-pressed', String(activo));
  });
}

function aplicarIdioma(idioma) {
  const idiomaSeguro = traducciones[idioma] ? idioma : 'es';
  const diccionario = traducciones[idiomaSeguro];

  document.documentElement.lang = idiomaSeguro;
  document.title = diccionario.titulo_pagina;

  if (metaDescripcion) {
    metaDescripcion.setAttribute('content', diccionario.meta_descripcion);
  }

  document.querySelectorAll('[data-i18n]').forEach((elemento) => {
    const clave = elemento.getAttribute('data-i18n');
    const valor = diccionario[clave];
    if (typeof valor !== 'string') {
      return;
    }

    if (elemento.tagName === 'BLOCKQUOTE') {
      const [texto, autor] = valor.split('\n');
      const cita = elemento.querySelector('cite');
      if (cita) {
        const primerNodo = elemento.firstChild;
        if (primerNodo && primerNodo.nodeType === Node.TEXT_NODE) {
          primerNodo.textContent = `${texto}\n`;
        } else {
          elemento.insertBefore(document.createTextNode(`${texto}\n`), cita);
        }
        cita.textContent = autor || cita.textContent;
      } else {
        elemento.textContent = valor;
      }
      return;
    }

    elemento.textContent = valor;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((elemento) => {
    const mapa = elemento.getAttribute('data-i18n-attr');
    if (!mapa) {
      return;
    }

    mapa.split(';').forEach((par) => {
      const [atributo, clave] = par.split(':');
      if (!atributo || !clave) {
        return;
      }
      const valor = diccionario[clave];
      if (typeof valor === 'string') {
        elemento.setAttribute(atributo.trim(), valor);
      }
    });
  });

  actualizarEstadoBotones(idiomaSeguro);
  localStorage.setItem(CLAVE_IDIOMA, idiomaSeguro);
}

botonesIdioma.forEach((boton) => {
  boton.addEventListener('click', () => {
    const idioma = boton.dataset.idioma;
    if (idioma) {
      aplicarIdioma(idioma);
    }
  });
});

const idiomaGuardado = localStorage.getItem(CLAVE_IDIOMA) || IDIOMA_POR_DEFECTO;
aplicarIdioma(idiomaGuardado);

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
  if (!visorImagen || !traducciones) {
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
