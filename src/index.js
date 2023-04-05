import homePage from "./pages/home";
import navBar from "./components/navbar";
import "./styles/navbar.css";

export default function homePageLoad() {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  [navBar(), homePage()].forEach((element) => contentDiv.appendChild(element));

  const naviBar = document.querySelector("nav");
  const home = naviBar.firstChild.firstChild.lastChild;
  /*
  const menu = naviBar.firstChild.childNodes[1].lastChild;
  const contact = naviBar.firstChild.childNodes[2].lastChild;

  [menu, contact].forEach((element) =>
    element.classList.remove("menuElementActive")
  );
  */
  home.classList.add("menuElementActive");

  return contentDiv;
}
homePageLoad();
