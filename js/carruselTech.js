// Obtenemos el contenedor de los slides
const slides = document.getElementById('carouselSlides');

// Contamos cuántos slides hay (por ejemplo: frontend, backend, etc.)
const totalSlides = slides.children.length;

// Guardamos en qué slide estamos actualmente (empieza en 0)
let currentIndex = 0;

// Cuánto tiempo debe tardar para cambiar automáticamente (en milisegundos)
const intervalTime = 8000; // 8000ms = 8 segundos

// Esta función actualiza la posición visible del carrusel
function updateSlidePosition() {
  // Usamos transform: translateX para mover el carrusel a la izquierda
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  // Ejemplo: si estamos en el slide 1 => -100%, en el 2 => -200%
}

// Esta función avanza al siguiente slide
function nextSlide() {
  // Suma 1 al índice. Si ya estamos en el último, regresa al primero
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition(); // Mueve el carrusel al nuevo slide
}

// Esta función regresa al slide anterior
function prevSlide() {
  // Resta 1 al índice. Si estamos en el primero, va al último
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition(); // Mueve el carrusel al nuevo slide
}

// Asociamos las funciones a los botones con sus ID
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Configura el auto-slide cada cierto tiempo
let autoSlide = setInterval(nextSlide, intervalTime);

// Detener el carrusel al pasar el mouse/Volver a activar al quitar el mouse
// mouseenter: detecta cuando el mouse entra al área del carrusel
// mouseleave: detecta cuando el mouse se va
// clearInterval(autoSlide): detiene el ciclo automático
// setInterval(...): vuelve a activarlo


// Obtenemos el contenedor principal del carrusel (el transparente)
const carouselContainer = document.getElementById('carouselContainer');

// Al pasar el mouse encima, detenemos el auto-slide
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

// Cuando el mouse sale del carrusel, lo volvemos a activar
carouselContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, intervalTime);
});

