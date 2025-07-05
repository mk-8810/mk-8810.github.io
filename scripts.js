document.addEventListener("DOMContentLoaded", () => {
  const consultationBtn = document.querySelector(".hero button");

  if (consultationBtn) {
    consultationBtn.addEventListener("click", () => {
      showConsultationMessage();
    });
  }
});

function showConsultationMessage() {
  const message = `
    Thank you for your interest in Acme Consulting!
    A representative will reach out to you shortly to schedule your free consultation.
  `;
  alert(message.trim());
}
