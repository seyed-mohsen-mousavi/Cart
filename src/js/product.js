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

// Find item
let findedprotact = product.find((e) => {
  return e.id == userIDParam;
});
// Create Element Html
productElm.insertAdjacentHTML(
  "beforeend",
  `<div class="rounded-2xl w-3/6 ml-auto h-full bg-cover bg-center animate-fade" style="background-image:url( ` +
    findedprotact.img +
    `)"></div>
          <div class="flex flex-col h-full">
<div>
    <h1 class="text-8xl font-medium font-Rubik animate-wiggle">` +
    findedprotact.name +
    `</h1>
    <p class="w-[40rem] text-3xl font-Oswald text-green-950 p-7 ">Lorem ipsum dolor sit amet,
        consectetur adipisicing
        elit. Vel, natus
        dolore earum
        mollitia iste incidunt debitis placeat? Enim recusandae aliquam labore error, hic dignissimos,
        blanditiis similique ab amet voluptatem reprehenderit. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Consequatur illo ducimus sit quo dolorum fugit, eligendi eveniet a mollitia error
        corrupti odio, aliquam qui laboriosam quos. Necessitatibus dolore sint reprehenderit.</p>
</div>
<div class="flex items-center gap-5 p-6 pb-10 mt-auto ">
    <p class="text-4xl font-Oswald ">$<span>` +
    findedprotact.price +
    `</span></p>
    <button class=" space-y-20 group">
        <div class="w-full">
            <div class="flex-1 h-full w-96 mx-auto">
                <div class="flex w-full bg-green-400 shadow rounded-lg py-4 px-16">
                    <p class="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white">
                        Add and Back</p>
                    <div class="group-hover:translate-x-1 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </button>
</div>
</div>
`
);
document.title = findedprotact.name;
