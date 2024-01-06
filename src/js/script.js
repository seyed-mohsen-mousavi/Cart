// Hi evryone ❤️

let $ = document;
const cart = $.getElementById("cart");
const divCart = $.getElementById("mouse-out");
const items = $.getElementById("Items");
const itemNumber = $.getElementById("total_item_number");
const totalPrice = $.getElementById("subtotal");
const cartItems = $.getElementById("cartitems");
const closeBtn = $.getElementById("close");
const shoppingCart = $.getElementById("shopping-cart");

const searchUl = $.querySelector(".autocom-box");
const searchActiv = $.querySelector(".search-input");
const searchInput = $.querySelector("input");

const pantFilter = $.getElementById("pants");
const shirtFilter = $.getElementById("shirt");
const allItems = $.getElementById("all");

// add or remove Item in object
const product = [
  {
    id: 1,
    name: "Shirt 1",
    price: "11.99",
    corent: 1,
    img: "src/img/Ti-Shirt-01.jpg",
    shirt: true,
  },
  {
    id: 2,
    name: "Pants",
    price: "50.99",
    corent: 1,
    img: "src/img/pant.webp",
    pant: true,
  },
  {
    id: 3,
    name: "Pants Cargo lash",
    price: "12.5",
    corent: 1,
    img: "src/img/pant.jpg",
    pant: true,
  },
  {
    id: 4,
    name: "Shirt 3",
    price: "15.99",
    corent: 1,
    img: "src/img/Ti-Shirt-02.avif",
    shirt: true,
  },
  {
    id: 5,
    name: "Shirt polo",
    price: "15.99",
    corent: 1,
    img: "src/img/Polo-Shirt.jpeg",
    shirt: true,
  },
  {
    id: 6,
    name: "Jordan pants",
    price: "50.99",
    corent: 1,
    img: "src/img/Jordan-pants.webp",
    pant: true,
  },
  {
    id: 7,
    name: "Pants Cargo",
    price: "60",
    corent: 1,
    img: "src/img/pants2.webp",
    pant: true,
  },
  {
    id: 8,
    name: "Shirt 4",
    price: "22",
    corent: 1,
    img: "src/img/Ti-shirt-03.avif",
    shirt: true,
  },
];
// The root of all 1.createAllElements 2.createShirtFilter 3.createPantsFilter
function createElemntHandler(item) {
  items.insertAdjacentHTML(
    "beforeend",
    `<div data-wow-duration="` +
      item.id * 150 +
      `ms"
      class="container mx-auto p-7 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl wow animate-fade-down">
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
                  <a href="product/?id=` +
      item.id +
      `" class="text-white text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg font-semibold bg-slate-300 py-1 px-1 md:py-2 md:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Continuation</a>
            </div>
          </div>
      </div>
      </div>`
  );
}

// function for createAll Elements in click to the All button To html
function createAllElements() {
  items.innerHTML = "";
  allItems.style.color = "rgb(74 222 128 / var(--tw-text-opacity))";
  pantFilter.style.color = "white";
  shirtFilter.style.color = "white";
  product.forEach((item) => {
    createElemntHandler(item);
  });
  localStorage.removeItem("pants");
  localStorage.removeItem("shirt");
  localStorage.setItem("all", true);
}

// add product Cart And Total Price
let cartItem = [];
function addItemHanler(e) {

  // is have =>
  let isHaveProduct = cartItem.find((item) => {
    return e == item.id;
  });
  if (!isHaveProduct) {
    cartItem.push(product[e - 1]);
    createCartitem();
  } else {
    cartItem.forEach((i) => {
      if (i.id == e) {
        i.corent++;
        createCartitem();
      }
    });
  }
}

function createCartitem() {
  itemNumber.innerHTML = cartItem.length;
  // total price
  let totalResult = 0;
  cartItem.forEach((product) => {
    totalResult = (totalResult + +product.price) * product.corent;
  });
  totalPrice.innerHTML = totalResult.toFixed(2);
  cartItems.innerHTML = "";
  let svg;
  cartItem.forEach((itemCart) => {
    if (itemCart.corent >= 2) {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>
    `;
    } else {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
    `;
    }
    cartItems.insertAdjacentHTML(
      "beforeend",
      `
    <li class="flex py-6">
    <div
        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src="` +
        itemCart.img +
        `"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="h-full w-full object-cover object-center">
    </div>

    <div class="ml-4 flex flex-1 flex-col">
        <div>
            <div
                class="flex justify-between text-base font-medium text-gray-900">
                <h3>
                    <a href="product/?id=` +
        itemCart.id +
        `">` +
        itemCart.name +
        `</a>
                </h3>
                <p class="ml-4">$<span>` +
        itemCart.price +
        `</span></p>
            </div>
            <p class="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div class="flex flex-1 items-end flex-row-reverse text-sm">
            <div class="flex gap-2 text-red-500">
              <button id="dcorent" onclick="dcorent(` +
        itemCart.corent +
        `,` +
        itemCart.id +
        `)">
        ` +
        svg +
        `
              </button> ` +
        itemCart.corent +
        ` <button onclick="acorent(` +
        itemCart.id +
        `)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>  
            <button>
            </div>

        </div>
    </div>
</li>
    `
    );
  });
}

function dcorent(corent, id) {
  if (corent == 1) {
    let deletedItem = cartItem.filter((e) => {
      return id !== e.id;
    });
    cartItem = deletedItem;
    createCartitem();
    console.log(deletedItem);
  } else {
    cartItem.forEach((e) => {
      if (e.id == id) {
        e.corent--;
      }
    });
    createCartitem();
  }
}
function acorent(id) {
  cartItem.forEach((e) => {
    if (e.id == id) {
      e.corent++;
    }
  });
  createCartitem();
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
  localStorage.removeItem("pants");
  localStorage.removeItem("all");
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
  localStorage.removeItem("shirt");
  localStorage.removeItem("all");
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

// Search

let searchInputValue;

searchInput.addEventListener("keyup", (e) => {
  searchUl.innerHTML = "";
  if (searchInput.value) {
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
  }
});
function searchLiGenerator(name) {
  name.forEach((e) => {
    searchUl.insertAdjacentHTML(
      "beforeend",
      `                            <a href="product/?id=` +
        e.id +
        `" class="items-center hover:bg-[#b8b8b85d] transition-all w-full">
      <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4 bg-cover bg-center"
          style="background-image:url(` +
        e.img +
        `)">
      </div>
      <p class="font-medium  text-white">` +
        e.name +
        `</p>
  </a>
    `
    );
  });
}

closeBtn.addEventListener("click", () => {
  side.classList.remove("translate-x-0");
  side.classList.add("translate-x-full");
  setTimeout(() => {
    {
      shoppingCart.classList.remove("opacity-100");
      shoppingCart.classList.add("opacity-0");
      shoppingCart.classList.remove("visible");
      shoppingCart.classList.add("invisible");
    }
  }, 100);
});
cart.addEventListener("click", () => {
  side.classList.remove("translate-x-full");
  side.classList.add("translate-x-0");
  setTimeout(() => {
    {
      shoppingCart.classList.remove("opacity-0");
      shoppingCart.classList.add("opacity-100");
      shoppingCart.classList.remove("invisible");
      shoppingCart.classList.add("visible");
    }
  }, 100);
});
