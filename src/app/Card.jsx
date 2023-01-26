/* eslint-disable @next/next/no-img-element */
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
export function Card() {
  return (
    <div class=" max-w-lg  overflow-hidden  mt-5 border rounded-lg  border-spacing-24 px-3 py-2 shadow-lg">
      <img
        className=" rounded-3xl"
        src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
        alt="Sunset in the mountains"
        class="w-full"
      />
      <div class="px-0 py-4">
        <h1>Advaidt Infratech</h1>
        <div class="font-bold text-xl mb-2">Apple Seeds</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div>
          <h1 className="text-sm mt-2 font-bold">Pot Colour</h1>
          <div className="flex flex-row space-x-2 mt-2 justify-between">
            <div className="flex flex-row space-x-2">
              <div className=" border rounded-full border-green-800 border-spacing-24 py-1 px-1">
                <div className="bg-green-500 rounded-full w-8 h-4 ">&nbsp;</div>
              </div>
              <div className="rounded-full  border-spacing-24 py-1 px-1">
                <div className="bg-red-500 rounded-full w-8 h-4 ">&nbsp;</div>
              </div>
              <div className="  rounded-full border-spacing-24 py-1 px-1">
                <div className="bg-gray-500 rounded-full w-8 h-4 ">&nbsp;</div>
              </div>
              <div className="  rounded-full border-spacing-24 py-1 px-1">
                <div className="bg-pink-500 rounded-full w-8 h-4 ">&nbsp;</div>
              </div>
            </div>
            <div>
              <AiOutlineHeart className="text-red-800 font-bold text-xl" />
            </div>
          </div>
        </div>
        <hr className="mt-5 font-bold" />
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-sm">Price:</h1>
            <h1 className="font-bold">Rs 199</h1>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <a href="/cart">
              <AiOutlineShoppingCart className="text-2xl" />
            </a>
            <span>
              <a
                href="/payment"
                class="inline-flex bg-green-500 items-center justify-center px-1 py-1 font-medium  text-center text-white rounded-lg bg-primary-700 "
              >
                Buy Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
