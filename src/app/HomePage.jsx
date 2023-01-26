/* eslint-disable @next/next/no-img-element */

import { Card } from "./Card";

export function HomePage() {
  return (
    <main>
      <div>
        <section class="bg-white mt-5 ">
          <div class="grid  mx-auto lg:gap-8 xl:gap-0 ml-0 mr-0 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold text-green-500 tracking-tight leading-none md:text-5xl xl:text-6xl ">
                70% OFF
              </h1>
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold  tracking-tight leading-none md:text-5xl xl:text-6xl ">
                FALL PLANTED BULBS
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <a
                href="#"
                class="inline-flex bg-green-500 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
              >
                Shop Now
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-green-500 border border-green-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
              >
                Learn More
              </a>
            </div>
            <div class="lg:mt-0 lg:col-span-5  lg:ml-40 lg:flex mt-5 ">
              <img
                className="rounded-md h-fit "
                src="https://images.unsplash.com/photo-1596605872817-7615f7ea2aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="mt-4 text-2xl font-bold rounded-r w-48 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-[400px] ">
            Explore Our Popular Categories
          </span>
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div class="col-span-2 ">
          <img
            className="rounded-md h-60 w-full"
            src="https://phsonline.org/uploads/attachments/cl4o8j4om379fthra39rg21n7-2023-flowershow-edit.0.46.1440.753.full.jpg"
            alt=""
          />
        </div>
        <div class="">
          <img
            className="rounded-md h-60 "
            src="https://phsonline.org/uploads/attachments/cl4o8j4om379fthra39rg21n7-2023-flowershow-edit.0.46.1440.753.full.jpg"
            alt=""
          />
        </div>
        <div class="">
          <img
            className="rounded-md h-60 "
            src="https://phsonline.org/uploads/attachments/cl4o8j4om379fthra39rg21n7-2023-flowershow-edit.0.46.1440.753.full.jpg"
            alt=""
          />
        </div>
        <div class="col-span-2">
          <img
            className="rounded-md h-60  w-full"
            src="https://phsonline.org/uploads/attachments/cl4o8j4om379fthra39rg21n7-2023-flowershow-edit.0.46.1440.753.full.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="mt-4 text-2xl font-bold rounded-r w-10 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block  ">Trending</span>
        </h1>
        <section className="flex flex-col lg:flex-row lg:space-x-10 mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>

      <div className="mt-20">
        <h1 className="mt-4 text-2xl font-bold rounded-r  w-20 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-40 ">Explore More</span>
        </h1>

        <section className="flex flex-col lg:flex-row lg:space-x-28 mt-4">
          <div class="max-w-sm rounded overflow-hidden  mt-5   border-spacing-24 px-3 py-2 shadow-lg">
            <img
              src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
              alt="Sunset in the mountains"
              class="w-full"
            />
            <div class="px-0 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-0 pt-4 pb-2 mb-7">
              <a
                href="#"
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover: py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Read Article
              </a>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden  mt-5  border-spacing-24 px-3 py-2 shadow-lg">
            <img
              src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
              alt="Sunset in the mountains"
              class="w-full"
            />
            <div class="px-0 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-0 pt-4 pb-2   mb-7">
              <a
                href="#"
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover: py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Read Article
              </a>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden  mt-5  border-spacing-24 px-3 py-2 shadow-lg">
            <img
              src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
              alt="Sunset in the mountains"
              class="w-full"
            />
            <div class="px-0 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-0 pt-4 pb-2  mb-7">
              <a
                href="#"
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover: py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Read Article
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
