const productsElm = document.getElementById("products");
const total = document.getElementById("Total-Price");

let nowLocation = location.search;
let locationSearchParams = new URLSearchParams(nowLocation);
let userIDParam = locationSearchParams.get("id");
const cart = JSON.parse(userIDParam);

let sum = 0;
cart.forEach((e) => {
  createElm(e);
  sum += Number(e.price);
  total.innerHTML = sum.toFixed(2);
});

function createElm(product) {
  // s
  let stringHtml =
    `<div class="flex flex-row md:flex-col justify-center">
    <div
    class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    <div class="w-full md:w-1/4 bg-white grid place-items-center">
        <img src="` +
    product.img +
    `"
            alt="tailwind logo" class="rounded-xl" />
    </div>
    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div class="flex justify-between item-center">
                <p class="text-gray-500 font-medium hidden md:block"></p>
            <div
                class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost</div>
        </div>
        <h3 class="font-black text-gray-800 md:text-3xl text-xl">` +
    product.name +
    `</h3>
        <p class="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the
            country’s sheer
            size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
        <p class="text-xl font-black text-gray-800">
            $<span>` +
    product.price +
    `</span>
            <span class="font-normal text-gray-600 text-base">/night</span>
        </p>
        <button class="text-white bg-red-400 p-3 ml-auto rounded"  >Remove</button>
    </div>
    </div>
    </div>`;

  // f
  productsElm.insertAdjacentHTML("beforeend", stringHtml);
}
