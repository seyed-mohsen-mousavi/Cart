const product = [
  {
    id: 1,
    name: "Shirt 1",
    price: "11.99",
    img: "../src/img/Ti-Shirt-01.jpg",
    shirt: true,
  },
  {
    id: 2,
    name: "Pants",
    price: "50.99",
    img: "../src/img/pant.webp",
    pant: true,
  },
  {
    id: 3,
    name: "Pants Cargo lash",
    price: "12.5",
    img: "../src/img/pant.jpg",
    pant: true,
  },
  {
    id: 4,
    name: "Shirt 3",
    price: "15.99",
    img: "../src/img/Ti-Shirt-02.avif",
    shirt: true,
  },
  {
    id: 5,
    name: "Shirt polo",
    price: "15.99",
    img: "../src/img/Polo-Shirt.jpeg",
    shirt: true,
  },
  {
    id: 6,
    name: "Jordan pants",
    price: "50.99",
    img: "../src/img/Jordan-pants.webp",
    pant: true,
  },
  {
    id: 7,
    name: "Pants Cargo",
    price: "60",
    img: "../src/img/pants2.webp",
    pant: true,
  },
  {
    id: 8,
    name: "Shirt 4",
    price: "22",
    img: "../src/img/Ti-shirt-03.avif",
    shirt: true,
  },
];
const productElm = document.getElementById("product");
let nowLocation = location.search;
let locationSearchParams = new URLSearchParams(nowLocation);
let userIDParam = locationSearchParams.get("id");

const imgProduct = document.getElementById("imgP");
const nameProduct = document.getElementById("nameP");
const priceProduct = document.getElementById("priceP");

// Find item
let findedprotact = product.find((e) => {
  return e.id == userIDParam;
});
console.log(imgProduct);
imgProduct.style.backgroundImage = "url(" + findedprotact.img + ")";
nameProduct.innerHTML = findedprotact.name;
priceProduct.innerHTML = findedprotact.price;
document.title = findedprotact.name;
