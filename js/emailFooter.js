document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.getElementById("emailForm");
  const destinatario = "yosscm2@gmail.com";

  if (emailForm) {
    emailForm.addEventListener("click", function () {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        // Abrir app de correo en móvil
        window.location.href = `mailto:${destinatario}`;
      } else {
        // Abrir Gmail en escritorio
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}`;
        window.open(gmailUrl, "_blank");
      }
    });
  }
});