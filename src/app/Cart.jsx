/* eslint-disable @next/next/no-img-element */
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineStop,
  AiOutlineLock,
  AiOutlineRight,
} from "react-icons/ai";
import { Card } from "./Card";

export default function Cart() {
  return (
    <main>
      <div>
        <h1 className="mt-5 text-xs text-gray-500">
          Home / All Seeds / Apple Seed / Your Cart
        </h1>

        <h1 className="mt-4 text-2xl font-bold rounded-r w-10 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-[300px] ">Your Cart</span>
        </h1>
      </div>

      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between mt-10 border border-dotted px-5 py-5 border-blue-700 mb-3">
        <div className="flex flex-row space-x-5">
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
            alt="Sunset in the mountains"
            className=" w-40 h-28 rounded-lg"
          />
          <div className="flex flex-col">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <h1>Price: 1099</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <AiOutlinePlusCircle />
          <h1>1</h1>
          <AiOutlineMinusCircle />
        </div>
        <div>
          <h1 className=" text-gray-400">Rs. 1099</h1>
        </div>
        <div>
          <AiOutlineStop className="text-red-600 font-bold" />
        </div>
      </section>
      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between mt-10 border border-dotted px-5 py-5 border-blue-700 mb-3">
        <div className="flex flex-row space-x-5">
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
            alt="Sunset in the mountains"
            className=" w-40 h-28 rounded-lg"
          />
          <div className="flex flex-col">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <h1>Price: 1099</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <AiOutlinePlusCircle />
          <h1>1</h1>
          <AiOutlineMinusCircle />
        </div>
        <div>
          <h1 className=" text-gray-400">Rs. 1099</h1>
        </div>
        <div>
          <AiOutlineStop className="text-red-600 font-bold" />
        </div>
      </section>
      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between mt-10 border border-dotted px-5 py-5 border-blue-700 mb-3">
        <div className="flex flex-row space-x-5">
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
            alt="Sunset in the mountains"
            className=" w-40 h-28 rounded-lg"
          />
          <div className="flex flex-col">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <h1>Price: 1099</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <AiOutlinePlusCircle />
          <h1>1</h1>
          <AiOutlineMinusCircle />
        </div>
        <div>
          <h1 className=" text-gray-400">Rs. 1099</h1>
        </div>
        <div>
          <AiOutlineStop className="text-red-600 font-bold" />
        </div>
      </section>
      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between mt-10 border border-dotted px-5 py-5 border-blue-700 mb-3">
        <div className="flex flex-row space-x-5">
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2022/04/042522_JR_davinci_tree_feat.jpg"
            alt="Sunset in the mountains"
            className=" w-40 h-28 rounded-lg"
          />
          <div className="flex flex-col">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <h1>Price: 1099</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <AiOutlinePlusCircle />
          <h1>1</h1>
          <AiOutlineMinusCircle />
        </div>
        <div>
          <h1 className=" text-gray-400">Rs. 1099</h1>
        </div>
        <div>
          <AiOutlineStop className="text-red-600 font-bold" />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="hidden lg:block">Sub Total</h1>
        <div className="flex flex-row justify-between lg:hidden ">
          <h1>Sub Total</h1>
          <div className="lg:hidden">
            <h1>Rs 1099</h1>
          </div>
        </div>
        <div className="lg:mt-8">
          <a
            href="/payment"
            class="inline-flex focus:outline-none bg-green-500 items-center justify-center w-full lg:px-96  py-2 lg:mr-3 mt-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
          >
            <AiOutlineLock className="lg:mr-2" /> Checkout
          </a>
          <div className="text-center text-sm text-gray-400 mt-2 mb-5">
            <span className="flex items-center justify-center space-x-2">
              <a href="/">
                <span> Continue Shopping</span>
              </a>
              <span className="mt-1">
                <AiOutlineRight />
              </span>
            </span>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1>Rs 1099</h1>
        </div>
      </div>

      <div className="mt-20 mb-20">
        <h1 className="mt-4 text-2xl font-bold rounded-r w-28 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-[300px] ">Our Top Seller</span>
        </h1>
        <section className="flex flex-col lg:flex-row lg:space-x-10 mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </main>
  );
}
