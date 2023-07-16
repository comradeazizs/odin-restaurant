import Photo from "./imgs/luigis-2.webp";

export default function addHome() {
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
