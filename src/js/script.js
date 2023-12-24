// Hi evryone ❤️

let $ = document;
const cart = $.getElementById("cart");
const cartItems = $.getElementById("cart-items");
const divCart = $.getElementById("mouse-out");
const listItemCart = $.getElementById("list-itemCart");
const items = $.getElementById("Items");
const itemNumber = $.getElementById("total_item_number");

const searchUl = $.querySelector(".autocom-box");
const searchActiv = $.querySelector(".search-input");
const searchInput = $.querySelector("input");

const pantFilter = $.getElementById("pants");
const shirtFilter = $.getElementById("shirt");
const allItems = $.getElementById("all");
// animation Cart And Hover :
cart.addEventListener("mouseover", () => {
  cartItems.classList.add("animate-fade-left");
  cartItems.classList.remove("animate-jump-out");
  cartItems.classList.remove("hidden");
});
divCart.addEventListener("mouseleave", () => {
  cartItems.classList.add("animate-jump-out");
  cartItems.classList.remove("animate-fade-left");
});

// add or remove Item in object
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
// The root of all 1.createAllElements 2.createShirtFilter 3.createPantsFilter
function createElemntHandler(item) {
  items.insertAdjacentHTML(
    "beforeend",
    `<div
      class="container mx-auto p-7 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl animate-delay-[` +
      item.id * 100 +
      `ms] animate-fade-down">
      <div  class="md:w-72 lg:w-64 xl:w-72 w-50 h-56  md:h-64 lg:h-64 bg-cover bg-center hover:bg-top transition-all rounded-xl mr-auto ml-auto" style="background-image: url(` +
      item.img +
      `)"></div>
      <div class="flex justify-between items-center">
          <div>
              <h1 class="mt-5 lg:text-xl md:text-xl text-sm font-semibold">` +
      item.name +
      `</h1>
      <div class="flex gap-2 mt-4">
      <p class="font-Oswald">$<span >` +
      item.price +
      `</span></p>
      <p class="font-Oswald">$<span class=" line-through decoration-red-600 cursor-default">` +
      (+item.price + 4).toFixed(2) +
      `</span></p>
      </div>
          </div>
          <div>
          <div class="flex flex-col gap-2 m-5">
          <button onclick="addItemHanler(` +
      item.id +
      `)" class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-green-400 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Buy Now</button>
                  <button onclick="showDataProduct(` +
      item.id +
      `)" class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-slate-300 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Continuation</button>
            </div>
          </div>
      </div>
      </div>`
  );
}
// Bakcground Image: Body
$.body.style.backgroundImage = "url(../src/img/pants.webp)";

// function for createAll Elements in click to the All button To html
function createAllElements() {
  items.innerHTML = "";
  allItems.style.color = "rgb(74 222 128 / var(--tw-text-opacity))";
  pantFilter.style.color = "white";
  shirtFilter.style.color = "white";
  product.forEach((item) => {
    createElemntHandler(item);
  });
  localStorage.clear();
  localStorage.setItem("all", true);
}

// add product Cart And Total Price
const cartItem = [];
function addItemHanler(e) {
  cartItem.push(product[e - 1]);
  itemNumber.innerHTML = cartItem.length;
  $.getElementById("btn").classList.remove("hidden");
  $.getElementById("price").classList.remove("hidden");
  listItemCart.innerHTML = "";
  let sum = 0;
  cartItem.forEach((e) => {
    sum += Number(e.price);
    $.getElementById("price").innerHTML = "Total Price : " + sum.toFixed(2);
  });
  cartItem.forEach((e) => {
    createNewItemCart(e);
  });
  // scroll
  if (cartItem.length >= 4) {
    cartItems.classList.add("h-60");
  } else {
    cartItems.classList.remove("h-60");
  }
}
// Create Product Elm
function createNewItemCart(item) {
  listItemCart.insertAdjacentHTML(
    "beforeend",
    ` <li class="border-gray-400 flex flex-row mb-2">
  <div
      class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4 bg-cover bg-center"
          style="background-image:url(` +
      item.img +
      `)">
      </div>
      <div class="flex-1 pl-1 mr-16">
          <div class="font-medium ">` +
      item.name +
      `</div>
          <div class="text-gray-600 text-sm">` +
      item.price +
      `</div>
      </div>
      <button class="text-white text-xs bg-red-500 p-1 rounded">Delete</button>
  </div>
</li>`
  );
}
// for moments is empty cartElm
if (listItemCart.innerHTML != "") {
  listItemCart.innerHTML = "No item ! 😐";
  $.getElementById("btn").classList.add("hidden");
  $.getElementById("price").classList.add("hidden");
}
// log my Name
console.warn("Mr.R00T");
// ------

//All Filter and SeItems localStorage
pantFilter.addEventListener("click", createPantsFilter);
shirtFilter.addEventListener("click", createShirtFilter);
allItems.addEventListener("click", createAllElements);

// Filter TI-shirts
function createShirtFilter() {
  let shirt = [];
  shirtFilter.style.color = "rgb(74 222 128 / var(--tw-text-opacity))";
  pantFilter.style.color = "white";
  allItems.style.color = "white";
  product.forEach(function (e) {
    if (e.shirt) {
      shirt.push(e);
    }
  });

  items.innerHTML = "";
  shirt.forEach((item) => {
    createElemntHandler(item);
  });
  localStorage.clear();
  localStorage.setItem("shirt", true);
}

// Filter Pants
function createPantsFilter() {
  let pants = [];
  pantFilter.style.color = "rgb(74 222 128 / var(--tw-text-opacity))";
  shirtFilter.style.color = "white";
  allItems.style.color = "white";
  let x = product.forEach(function (e) {
    if (e.pant) {
      pants.push(e);
    }
  });
  items.innerHTML = "";
  pants.forEach((item) => {
    createElemntHandler(item);
  });
  localStorage.clear();
  localStorage.setItem("pants", true);
}

// GetItems in localStorage
// ----------------
window.addEventListener("load", () => {
  if (localStorage.getItem("shirt")) {
    createShirtFilter();
  } else if (localStorage.getItem("pants")) {
    createPantsFilter();
  } else {
    createAllElements();
  }
});

function showDataProduct(e) {
  searchInput.value = "";
  let sum = "/E:/Cart/public/product.html?" + "id=" + e;
  location.href = sum;
}

// Search

let searchInputValue;

// find by includes
searchInput.addEventListener("keyup", (e) => {
  searchUl.innerHTML = "";
  if(searchInput.value){
    if (searchInput.value) {
      searchActiv.classList.add("active");
      searchUl.classList.add("animate-fade-up");
    } else {
      searchActiv.classList.remove("active");
      searchUl.classList.remove("animate-fade-up");
    }
    searchInputValue = searchInput.value;
    let filterSearch = product.filter((e) => {
      return e.name
        .toLocaleLowerCase()
        .startsWith(searchInputValue.toLocaleLowerCase());
    });
  
    if (filterSearch.length > 0) {
      searchLiGenerator(filterSearch);
    } else {
      searchActiv.classList.remove("active");
    }
    if (e.keyCode === 13) {
      let fristLength = filterSearch[0];
      showDataProduct(fristLength.id)
    }
  }
});
function searchLiGenerator(name) {
  name.forEach((e) => {
    searchUl.insertAdjacentHTML(
      "beforeend",
      `                            <li onclick="showDataProduct(` +
        e.id +
        `)" class="items-center hover:bg-[#b8b8b85d] transition-all w-full">
      <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4 bg-cover bg-center"
          style="background-image:url(` +
        e.img +
        `)">
      </div>
      <p class="font-medium  text-white">` +
        e.name +
        `</p>
  </li>
    `
    );
  });
}
