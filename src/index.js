import homePage from "./pages/home";
import menuPage from "./pages/menu";
import contactPage from "./pages/contact";
import navBar from "./components/navbar";
import "./styles/navbar.css";

const removeContent = () => {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

const addContent = (content) => {
  const contentDiv = document.getElementById("content");
  [navBar(), content].forEach((element) => contentDiv.appendChild(element));
  return contentDiv;
};

export function homePageLoad() {
  removeContent();
  addContent(homePage());

  const naviBar = document.querySelector("nav");
  const home = naviBar.firstChild.firstChild.lastChild;
  home.classList.add("menuElementActive");
}
homePageLoad();

export function menuPageLoad() {
  removeContent();
  addContent(menuPage());

  const naviBar = document.querySelector("nav");
  const menu = naviBar.firstChild.childNodes[1].lastChild;
  menu.classList.add("menuElementActive");
}

export function contactPageLoad() {
  removeContent();
  addContent(contactPage());

  const naviBar = document.querySelector("nav");
  const contact = naviBar.firstChild.childNodes[2].lastChild;
  contact.classList.add("menuElementActive");
}
