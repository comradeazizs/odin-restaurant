import "./style.css";
import Icon from "./imgs/bologna.png";
import Photo from "./imgs/luigis-2.webp";
const content = document.querySelector("#content");

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

function addHome() {
   const main = document.createElement("main");
   const h2 = document.createElement("h2");
   h2.appendChild(
      document.createTextNode("Traditional dishes of the Emilian cuisine")
   );
   main.appendChild(h2);
   const photo = new Image();
   photo.src = Photo;
   main.appendChild(photo);
   const para = document.createElement("p");
   para.appendChild(
      document.createTextNode(
         "A timeless cuisine serving dishes of the Emilian tradition: from the" +
            " most popular dishes, like tagliatelle Bolognese and tortellini in" +
            " broth, to the rare and much-appreciated boiled meat"
      )
   );
   main.appendChild(para);
   content.appendChild(main);
}
addHome();

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

function addMenu() {
   const sect = document.createElement("section");
   const h2 = document.createElement("h2");
   h2.appendChild(document.createTextNode("Menu"));
   sect.appendChild(h2);
   const table = document.createElement("table");
   const tHead = document.createElement("thead");
   const thr = document.createElement("tr");
   ["Meal", "Price"].forEach((word) => {
      let th = document.createElement("th");
      th.appendChild(document.createTextNode(word));
      thr.appendChild(th);
   });
   const tBody = document.createElement("tbody");

   menuArr.forEach((item) => {
      const tr = document.createElement("tr");
      const dataName = document.createElement("td");
      dataName.appendChild(document.createTextNode(item.name));
      tr.appendChild(dataName);
      const dataPrice = document.createElement("td");
      dataPrice.classList.add('price')
      dataPrice.appendChild(document.createTextNode(item.price));
      tr.appendChild(dataPrice);
      tBody.appendChild(tr);
   });
   tHead.appendChild(thr);
   table.appendChild(tHead);
   table.appendChild(tBody);
   sect.appendChild(table);
   content.appendChild(sect);
}
addMenu();
