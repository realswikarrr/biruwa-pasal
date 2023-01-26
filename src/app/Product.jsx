/* eslint-disable @next/next/no-img-element */
import { AiOutlineDown } from "react-icons/ai";
import { Card } from "./Card";
export default function Product() {
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white mb-20">
      <div class="container  mx-auto mt-5">
        <div class="mx-auto flex flex-col lg:flex-row ">
          <div className="flex flex-col mt-7 ">
            <img
              alt="ecommerce"
              class="w-full rounded-md h-3/4"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <div className="mt-4 flex flex-row space-x-2">
              <img
                alt="ecommerce"
                class=" w-28 rounded-md"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
              <img
                alt="ecommerce"
                class=" w-40 rounded-md"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
              <img
                alt="ecommerce"
                class=" w-40 rounded-md"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
              <img
                alt="ecommerce"
                class=" w-40 rounded-md"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
            </div>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Home / All Seeds / Seeds
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <h1 className="font-bold text-xl">RS 199</h1>
            <h1 className="font-bold text-sm">Product Details</h1>
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex flex-row items-center justify-between">
              <a
                href="#"
                class="inline-flex bg-green-500 items-center justify-center px-20 py-2 mr-3 mt-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
              >
                Shop Now
              </a>
              <div className="border border-gray-400 px-2 rounded-md mt-2">
                <h1 className="flex flex-row items-center space-x-2 text-gray-500">
                  <span>Quantity</span>
                  <span>
                    <AiOutlineDown />
                  </span>
                </h1>
              </div>
            </div>
            <div className="border-2 rounded-md border-spacing-28 text-center  py-32 border-green-700 mt-5">
              <h1>Offers</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="mt-4 text-2xl font-bold rounded-r w-28 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-[300px] ">Related Products</span>
        </h1>
        <section className="flex flex-col lg:flex-row lg:space-x-10 mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </section>
  );
}
