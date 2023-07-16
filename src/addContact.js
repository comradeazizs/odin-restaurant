export default function addContact() {
   const sect = document.createElement("section");
   const h2 = document.createElement("h2");
   h2.appendChild(document.createTextNode("Contact"));
   sect.appendChild(h2);
   const para = document.createElement("p");
   para.appendChild(document.createTextNode("Number: 012 345 6789"));
   sect.appendChild(para);
   para.appendChild(document.createElement("br"));
   const adress = document.createElement("p");
   para.appendChild(
      document.createTextNode("H. Z. Tagiyev, 14, Baku Azerbaijan")
   );
   sect.appendChild(adress);
   content.appendChild(sect);
}
