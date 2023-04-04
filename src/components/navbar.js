import "../styles/navbar.css";

export default function navBar() {
  const navigationBar = document.createElement("nav");
  navigationBar.classList.add("navBar");

  const UL = document.createElement("ul");

  const homeLi = document.createElement("li");
  const menuLi = document.createElement("li");
  const contactLi = document.createElement("li");

  const homeA = document.createElement("a");
  const menuA = document.createElement("a");
  const contactA = document.createElement("a");

  homeA.textContent = "home";
  menuA.textContent = "menu";
  contactA.textContent = "contact";

  homeLi.appendChild(homeA);
  menuLi.appendChild(menuA);
  contactLi.appendChild(contactA);

  [homeLi, menuLi, contactLi].forEach((element) => UL.appendChild(element));

  navigationBar.appendChild(UL);

  return navigationBar;
}
