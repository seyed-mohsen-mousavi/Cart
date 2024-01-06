<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Store</title>
    <link rel="stylesheet" href="./public/build/tailwind.css" />
    <link rel="stylesheet" href="src/css/somthingStyle.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</head>

<body class="h-screen scroll-smooth bg-cover bg-center bg-[#171717] font-Poppins">
    <section class="container  pb-5 rounded-b-lg pt-2 flex flex-col items-center relative">
        <!-- Cart BTN -->
        <div class="absolute z-50 left-1">
            <button
                class="group/cart bg-white p-2 rounded-lg hover:bg-slate-400 transition-colors relative wow animate__rubberBand"
                id="cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" data-slot="icon" class="w-6 h-6 group-hover/cart:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span class="absolute w-4 h-4 bg-green-300 rounded-full text-xs text-center font-semibold text-white "
                    id="total_item_number">0</span>
            </button>
        </div>
        <!-- Filter Card -->
        <div class="m-5 ml-28 flex justify-between items-center gap-5 w-full">
            <h1 class="text-2xl lg:text-3xl text-white font-medium">Products</h1>
            <div class="flex gap-5 items-center">
                <!-- Search Box -->
                <div class="flex gap-4 items-center">
                    <div class="relative search-input">
                        <input class="text-black placeholder:text-black " type="text"
                            placeholder="Type to search...">
                        <div class="autocom-box absolute w-full z-50 flex flex-col backdrop-blur-lg rounded-b-xl">
                            <!-- here list are inserted from javascript -->
                        </div>
                        <div class="absolute right-3 top-4 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- buttons -->
                <div class="flex mr-5 backdrop-blur-md p-6 rounded-2xl">
                    <button id="all"
                        class="text-white text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl pl-4 transition-all font-semibold">All</button>
                    <button id="pants"
                        class="text-white text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl pl-4 transition-all font-semibold">Pants</button>
                    <button id="shirt"
                        class="text-white text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl pl-4 transition-all font-semibold">Shirt</button>
                </div>
            </div>
        </div>
        <!-- products -->
        <div id="Items" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 ">
        </div>
        <!-- shopping cart -->
        <div class="invisible relative z-10 ease-in-out duration-500 opacity-0" aria-labelledby="slide-over-title"
            role="dialog" aria-modal="true" id="shopping-cart">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 overflow-hidden " id="sideRoot">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="  pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-500 sm:duration-700"
                        id="side">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping
                                            cart</h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button"
                                                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" id="close">
                                                <span class="absolute -inset-0.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul role="list" class="-my-6 divide-y divide-gray-200" id="cartitems">
                                                <!--  products... -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <!-- sub Total -->
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$<span id="subtotal"></span></p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.
                                    </p>
                                    <div class="mt-6">
                                        <a href="cart/"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600">Checkout</a>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button type="button"
                                                class="font-medium text-green-600 hover:text-green-500">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="src/js/script.js"></script>
    <script src="node_modules/wow.js/dist/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
    <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>

</body>

</html>