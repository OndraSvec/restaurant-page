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

  [paraHeader, mapContainer].forEach((element) =>
    container.appendChild(element)
  );
  return container;
}
