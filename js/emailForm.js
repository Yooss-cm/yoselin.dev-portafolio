document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que el formulario recargue la página

      const mensajeInput = document.getElementById("mensaje");
      const mensaje = mensajeInput.value;

      const asunto = encodeURIComponent("Correo desde la web | Portafolio YC");
      const cuerpo = encodeURIComponent(mensaje);
      const destinatario = "yosscm2@gmail.com";

      // Detecta si el usuario está en un dispositivo móvil
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        // Si es móvil, usa mailto para abrir la app predeterminada de correo
        window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
      } else {
        // Si es computadora, abre Gmail directamente en modo redacción
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
        window.open(gmailUrl, "_blank");
      }

      // Limpia el campo de texto después de enviar
      mensajeInput.value = "";
    });
  }
});
