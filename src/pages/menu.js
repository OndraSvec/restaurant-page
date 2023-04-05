import "../styles/home.css";

export default function menuPage() {
  const container = document.createElement("div");
  container.classList.add("container");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to your new favourite restaurant!";
  const h2 = document.createElement("h2");
  h2.textContent = "Bringing you quality food ever since 1991.";
  [h1, h2].forEach((element) => container.appendChild(element));
  return container;
}
