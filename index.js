const h1 = document.getElementById("judul");
console.log(h1);
h1.style.textAlign = "center";

const resep = [
  "250 g tepung terigu",
  "2 sdm gula pasir",
  "1 sdm baking powder",
  "1 sdt kayu manis bubuk",
  "½ sdt garam",
  "400 ml susu cair",
  "250 g pisang ambon matang",
  "2 butir telur ayam",
  "topping:",
  "madu",
  "pisang ambon, iris tipis",
  "blueberry",
];
const ulList = document.createElement("ul");

resep.forEach((items) => {
  let listItem = document.createTextNode(items);
  const list = document.createElement("li");
  list.appendChild(listItem);
  ulList.appendChild(list);
});

document.getElementById("resep-body").appendChild(ulList);
