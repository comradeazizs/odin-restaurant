import "./style.css";
import Icon from "./imgs/bologna.png";

import addContact from "./addContact.js";
import addMenu from "./addMenu.js";
import addHome from "./addHome.js";

const content = document.querySelector("#content");

let menuArr = [
   { name: "Tagliatelle Bolognese", price: 21 },
   { name: "Tagliolini with Culatello di Zibello in White Sauce", price: 21 },
   { name: "Tortellini Bolognese", price: 24 },
   { name: "Spaghettini with Bottarga (Mullet Roe)", price: 24 },
   { name: "Green Lasagna Bolognese", price: 22 },
   { name: "Homemade Tortelloni with Ricotta Cheese and Spinach", price: 22 },
   { name: "Bolognese Fried Risotto", price: 22 },
   { name: "Gragnano Spaghetti with Lobster", price: 38 },
   { name: "Fresh Tomato Soup", price: 18 }
];

function clearCont() {
   while (content.firstChild) {
      content.removeChild(content.firstChild);
   }
}

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
      div.classList.add("tab", element.toLowerCase());
      div.innerText = element;
      div.addEventListener("click", (e) => {
         clearCont();
         addHeader();
         if (e.target.classList.contains("home")) {
            addHome();
         } else if (e.target.classList.contains("menu")) {
            addMenu(menuArr);
         } else if (e.target.classList.contains("contact")) {
            addContact();
         }
      });
      nav.appendChild(div);
   });
   header.appendChild(nav);
   content.appendChild(header);
})();

addHome();
