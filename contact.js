document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = form ? form.querySelector("button[type='submit']") : null;
  if (form && button) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      button.classList.add("sent-animation");
      setTimeout(() => {
        button.classList.remove("sent-animation");
        alert("Mensagem enviada! Obrigado por entrar em contato.");
        form.reset();
      }, 700); // tempo da animação
    });
  }
});
