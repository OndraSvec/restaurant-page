import "../styles/navbar.css";
import { homePageLoad, menuPageLoad, contactPageLoad } from "..";

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

  [homeA, menuA, contactA].forEach((element) =>
    element.addEventListener("click", handleClick)
  );

  navigationBar.appendChild(UL);

  return navigationBar;
}
function handleClick(e) {
  if (e.target.textContent === "home") {
    homePageLoad();
  } else if (e.target.textContent === "menu") {
    menuPageLoad();
  } else {
    contactPageLoad();
  }
}
