/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export function Blog() {
  return (
    <main>
      <div>
        <h1 className="mt-5 text-xs text-gray-500">Home/Blog</h1>
      </div>

      <div>
        <h1 className="mt-4 text-2xl font-bold rounded-r border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 w-8">
          Blog
        </h1>
        <section className="mt-4">
          <div class="bg-[url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1674701265~exp=1674701865~hmac=4da3b96c0173ce038ba1d637dc4844a024e4b2def38842d79a24ad52ef2db6f4')] text-white py-20 rounded-md  bg-cover">
            <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
              <div class="flex flex-col w-full  justify-center items-start p-8 mt-44">
                <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                  Season of mists and mellow fruitfullness
                </h2>
                <p class="text-sm md:text-base text-gray-50 mb-4">
                  Explore your favourite events and register now to showcase
                  your talent and win exciting prizes. Explore your favourite
                  <br />
                  events and register now to showcase your talent and win
                  exciting prizes. Explore your favourite events and register
                  now to showcase <br /> your talent and win exciting prizes.
                </p>
                <a
                  href="#"
                  class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <h1 className="mt-4 text-2xl font-bold rounded-r  w-20 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-40 ">Explore More</span>
        </h1>

        <section className="flex flex-col lg:flex-row lg:space-x-28 mt-4 mb-20">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5  border-spacing-24 px-3 py-2 ">
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
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Read Article
              </a>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5  border-spacing-24 px-3 py-2 ">
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
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Read Article
              </a>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5  border-spacing-24 px-3 py-2">
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
                class="bg-transparent hover:bg-green-500 text-white-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent"
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
