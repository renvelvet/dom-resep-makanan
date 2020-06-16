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
  "topping: pisang ambon, iris tipis",
];
const ulList = document.createElement("ul");

resep.forEach((items) => {
  let listItem = document.createTextNode(items);
  const list = document.createElement("li");
  list.appendChild(listItem);
  ulList.appendChild(list);
});
const gambarPancake = document.getElementById("image-body");
const gambar =
  "https://img.bestrecipes.com.au/vO8QHxam/w643-h428-cfill-q90/br/2019/01/banana-pancakes-recipe-522124-1.jpg";
document.getElementById("resep-body").appendChild(ulList);
document.getElementById(
  "image-body"
).innerHTML = `<img src="${gambar}" alt="pancake-banana">`;

// ------------ styling -----------------
gambarPancake.style.textAlign = "center";
gambarPancake.style.margin = "40px auto";
ulList.style.margin = "30px 0 0 0";
