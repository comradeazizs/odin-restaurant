import "./style.css";
import Icon from "./imgs/bologna.png";
const content = document.querySelector("#content");

console.log("hello world");

(function addHeader() {
   const header = document.createElement("header");
   const h1 = document.createElement("h1");
   h1.appendChild(document.createTextNode("Bolognese"));
   header.appendChild(h1);
   const logo = new Image();
   logo.src = Icon;
   const imgCont = document.createElement("div");
   imgCont.classList.add("img-cont");
   imgCont.appendChild(logo);
   header.appendChild(imgCont);

   const nav = document.createElement("nav");
   ["Home", "Menu", "Contact"].forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("tab");
      div.innerText = element;
      nav.appendChild(div);
   });
   header.appendChild(nav);
   content.appendChild(header);
})();
