// Hi evryone ❤️
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const divCart = document.getElementById("mouse-out");
const listItemCart = document.getElementById("list-itemCart");
const items = document.getElementById("Items");
const itemNumber = document.getElementById("total_item_number");

const pantFilter = document.getElementById("pants");
const shirtFilter = document.getElementById("shirt");
const allItems = document.getElementById("all");
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

const protact = [
  {
    id: 1,
    name: "Ti-Shirt 1",
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
    name: "Pants ",
    price: "12.5",
    img: "../src/img/pant.jpg",
    pant: true,
  },
  {
    id: 4,
    name: "Ti-Shirt 2",
    price: "15.99",
    img: "../src/img/Ti-Shirt-02.avif",
    shirt: true,
  },
  {
    id: 5,
    name: "Ti-Shirt 2",
    price: "15.99",
    img: "../src/img/Ti-Shirt-02.avif",
    shirt: true,
  },
  {
    id: 6,
    name: "Pants",
    price: "50.99",
    img: "../src/img/pant.webp",
    pant: true,
  },
  {
    id: 7,
    name: "Pants",
    price: "50.99",
    img: "../src/img/pant.webp",
    pant: true,
  },
  {
    id: 8,
    name: "Pants ",
    price: "12.5",
    img: "../src/img/pant.jpg",
    pant: true,
  },
];
// append in Dom

function createAllElements() {
  items.innerHTML = "";
  protact.forEach((item) => {
    items.insertAdjacentHTML(
      "beforeend",
      `<div
        class="container mx-auto p-7 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl animate-delay-[`+ item.id * 100 + `ms] animate-fade-down">
        <div class="md:w-72 lg:w-64 xl:w-72 w-50 h-56  md:h-64 lg:h-64 bg-cover bg-center hover:bg-top transition-all rounded-xl mr-auto ml-auto" style="background-image: url(` +
        item.img +
        `)"></div>
        <div class="flex justify-between items-center">
            <div>
                <h1 class="mt-5 lg:text-2xl md:text-2xl text-sm font-semibold">` +
        item.name +
        `</h1>
                <p class="mt-2">` +
        item.price +
        `</p>
            </div>
            <div>
                <button onclick="addItemHanler(` +
        item.id +
        `)"
                    class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-green-400 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    Buy Now
                </button>
            </div>
        </div>
        </div>`
    );
  });
  localStorage.clear();
  localStorage.setItem("all", true);
}
const cartItem = [];
function addItemHanler(e) {
  cartItem.push(protact[e - 1]);
  itemNumber.innerHTML = cartItem.length;
  document.getElementById("btn").classList.remove("hidden");
  document.getElementById("price").classList.remove("hidden");
  listItemCart.innerHTML = "";
  let sum = 0;
  cartItem.forEach((e) => {
    sum += Number(e.price);
    document.getElementById("price").innerHTML =
      "Total Price : " + sum.toFixed(2);
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

if (listItemCart.innerHTML != "") {
  listItemCart.innerHTML = "No item ! 😐";
  document.getElementById("btn").classList.add("hidden");
  document.getElementById("price").classList.add("hidden");
}
// log my Name
console.log("Mr.R00T");
// ------

// Filter and SeItems localStorage
pantFilter.addEventListener("click", createPantsFilter);
shirtFilter.addEventListener("click", createShirtFilter);
allItems.addEventListener("click", createAllElements);
function createShirtFilter() {
  let shirt = [];
  protact.forEach(function (e) {
    if (e.shirt) {
      shirt.push(e);
    }
  });

  items.innerHTML = "";
  shirt.forEach((item) => {
    items.insertAdjacentHTML(
      "beforeend",
      `<div
        class="container mx-auto p-7 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl animate-delay-[`+ item.id * 100 + `ms] animate-fade-down">
        <div class="md:w-72 lg:w-64 xl:w-72 w-50 h-56  md:h-64 lg:h-64 bg-cover bg-center hover:bg-top transition-all rounded-xl mr-auto ml-auto" style="background-image: url(` +
        item.img +
        `)"></div>
        <div class="flex justify-between items-center">
            <div>
                <h1 class="mt-5 lg:text-2xl md:text-2xl text-sm font-semibold">` +
        item.name +
        `</h1>
                <p class="mt-2">` +
        item.price +
        `</p>
            </div>
            <div>
                <button onclick="addItemHanler(` +
        item.id +
        `)"
                    class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-green-400 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    Buy Now
                </button>
            </div>
        </div>
        </div>`
    );
  });
  localStorage.clear();
  localStorage.setItem("shirt", true);
}
function createPantsFilter() {
  let pants = [];
  let x = protact.forEach(function (e) {
    if (e.pant) {
      pants.push(e);
    }
  });
  items.innerHTML = "";
  pants.forEach((item) => {
    items.insertAdjacentHTML(
      "beforeend",
      `<div
        class="container mx-auto p-7 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl animate-delay-[`+ item.id * 100 + `ms] animate-fade-left">
        <div class="md:w-72 lg:w-64 xl:w-72 w-50 h-56  md:h-64 lg:h-64 bg-cover bg-center hover:bg-top transition-all rounded-xl mr-auto ml-auto" style="background-image: url(` +
        item.img +
        `)"></div>
        <div class="flex justify-between items-center">
            <div>
                <h1 class="mt-5 lg:text-2xl md:text-2xl text-sm font-semibold">` +
        item.name +
        `</h1>
                <p class="mt-2">` +
        item.price +
        `</p>
            </div>
            <div>
                <button onclick="addItemHanler(` +
        item.id +
        `)"
                    class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-green-400 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    Buy Now
                </button>
            </div>
        </div>
        </div>`
    );
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
