const phone = "96550720240";

const message = encodeURIComponent(
  "مرحبًا TechnoVolt، أريد الاستفسار عن خدمة تركيب/صيانة. من فضلك تواصلوا معي."
);

const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
const callUrl = `tel:+${phone}`;

const whatsappButtons = [
  "whatsappHero",
  "whatsappContact",
  "floatingWhatsapp"
];

const callButtons = [
  "callHero",
  "callContact"
];

whatsappButtons.forEach((id) => {
  const element = document.getElementById(id);
  if (element) element.href = whatsappUrl;
});

callButtons.forEach((id) => {
  const element = document.getElementById(id);
  if (element) element.href = callUrl;
});

document.getElementById("year").textContent = new Date().getFullYear();