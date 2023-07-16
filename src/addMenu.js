export default function addMenu(menu) {
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

   menu.forEach((item) => {
      const tr = document.createElement("tr");
      const dataName = document.createElement("td");
      dataName.appendChild(document.createTextNode(item.name));
      tr.appendChild(dataName);
      const dataPrice = document.createElement("td");
      dataPrice.classList.add("price");
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
