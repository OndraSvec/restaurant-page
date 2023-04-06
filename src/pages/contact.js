import "../styles/contact.css";

export default function contactPage() {
  const container = document.createElement("div");
  container.classList.add("contact-container");

  const paraHeader = document.createElement("p");
  paraHeader.textContent = "Contact Us!";
  paraHeader.classList.add("paraHeader");

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("mapContainer");
  const mapFrame = document.createElement("iframe");
  mapFrame.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2498.93517822053!2d-149.24996896443062!3d-17.85748906291584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scz!4v1680764860842!5m2!1sen!2scz"
  );
  mapContainer.appendChild(mapFrame);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const location = document.createElement("div");
  const locPara1 = document.createElement("p");
  locPara1.textContent = "Location";
  const locPara2 = document.createElement("p");
  locPara2.textContent = "Teahupoo, Taiarapu-Ouest, French Polynesia";
  [locPara1, locPara2].forEach((element) => location.appendChild(element));

  const openingHours = document.createElement("div");
  const ohPara1 = document.createElement("p");
  ohPara1.textContent = "Opening Hours";
  const ohPara2 = document.createElement("p");
  ohPara2.textContent = "Every Day, 8:00-22:00";
  [ohPara1, ohPara2].forEach((element) => openingHours.appendChild(element));

  const contact = document.createElement("div");
  const conPara1 = document.createElement("p");
  conPara1.textContent = "Contact";
  const conPara2 = document.createElement("p");
  conPara2.textContent = "yourfavouriterestaurant@yfr.com";
  [conPara1, conPara2].forEach((element) => contact.appendChild(element));

  [location, openingHours, contact].forEach((element) =>
    contactInfo.appendChild(element)
  );

  [paraHeader, mapContainer, contactInfo].forEach((element) =>
    container.appendChild(element)
  );
  return container;
}
