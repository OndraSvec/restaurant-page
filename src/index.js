import homePage from "./pages/home";
import navBar from "./components/navbar";

function pageLoad() {
  const contentDiv = document.getElementById("content");
  [navBar(), homePage()].forEach((element) => contentDiv.appendChild(element));

  return contentDiv;
}
pageLoad();
