
// ضع رقمك هنا بصيغة دولية بدون علامة +
// مثال للكويت: 96555555555
const phone = "96550720240";

const messages = {
  general: "مرحبًا TechnoVolt، أحتاج خدمة في الكويت. الخدمة المطلوبة: كاميرات / انتركم / قفل كهربائي / كهرباء. منطقتي هي: ",
  cctv: "مرحبًا TechnoVolt، أريد تركيب أو صيانة كاميرات مراقبة في الكويت. منطقتي هي: ",
  intercom: "مرحبًا TechnoVolt، أريد تركيب أو صيانة انتركم في الكويت. منطقتي هي: ",
  locks: "مرحبًا TechnoVolt، أريد تركيب قفل كهربائي أو قفل ذكي في الكويت. منطقتي هي: ",
  electricity: "مرحبًا TechnoVolt، أحتاج فني كهرباء في الكويت. نوع العطل هو: "
};

function whatsappUrl(service) {
  const text = encodeURIComponent(messages[service] || messages.general);
  return `https://wa.me/${phone}?text=${text}`;
}

function setupContactButtons() {
  document.querySelectorAll(".js-whatsapp").forEach((el) => {
    const service = el.dataset.service || "general";
    el.href = whatsappUrl(service);
  });

  document.querySelectorAll(".js-call").forEach((el) => {
    el.href = `tel:+${phone}`;
  });
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("show"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupContactButtons();
  setupMenu();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
