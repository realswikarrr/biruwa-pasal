import { Card } from "./Card";

import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";

export default function Seed() {
  return (
    <main>
      <div>
        <h1 className="mt-5 text-xs text-gray-500">Home / All Seeds</h1>
      </div>

      <div>
        <div class="lg:grid lg:grid-cols-3 gap-4">
          <div className="hidden lg:block">
            <div class="mt-5  lg:w-96">
              <h1>Filters</h1>

              <div className="border-2 rounded-md border-spacing-28 px-14 py-14 border-green-700 mt-5">
                <h1 className="font-bold">BRAND</h1>
                <div>
                  <span className="flex flex-row items-center text-gray-400 space-x-2 mt-5">
                    <AiOutlineSearch />
                    <input
                      placeholder="Search"
                      type="text"
                      className="border border-t-0 border-r-0 border-l-0 border-gray-400 ring-0  focus:outline-none"
                    />
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
              </div>
            </div>

            <div class="mt-5 lg:w-96">
              <div className="border-2 rounded-md border-spacing-28 px-14 py-14 border-green-700">
                <h1 className="font-bold">TYPE</h1>
                <div>
                  <span className="flex flex-row items-center text-gray-400 space-x-2 mt-5">
                    <AiOutlineSearch />
                    <input
                      placeholder="Search"
                      type="text"
                      className="border border-t-0 border-r-0 border-l-0 border-gray-400 ring-0  focus:outline-none"
                    />
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-2">
                  <input type="checkbox" />
                  <h1>Advait Infratech</h1>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2 ...">
            <div>
              <div className="flex flex-row items-center justify-between">
                <h1 className="mt-4 text-2xl font-bold rounded-r w-10 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
                  <span className="block w-[200px]">All Seeds</span>
                </h1>
                <div className="border border-gray-400 px-2 rounded-md mt-2">
                  <h1 className="flex flex-row items-center space-x-2 text-gray-500">
                    <span>Deafult Sorting</span>
                    <span>
                      <AiOutlineDown />
                    </span>
                  </h1>
                </div>
              </div>
              <section className="flex flex-col lg:flex-row lg:space-x-5 mt-4">
                <Card />
                <Card />
                <Card />
              </section>
              <section className="flex flex-col lg:flex-row lg:space-x-5 mt-4">
                <Card />
                <Card />
                <Card />
              </section>
              <section className="flex flex-col lg:flex-row lg:space-x-5 mt-4 mb-4">
                <Card />
                <Card />
                <Card />
              </section>
            </div>
            <div className=" float-right mb-20">
              <h1 className="flex flex-row items-center space-x-2 text-gray-500">
                <span>View More</span>
                <span>
                  <AiOutlineDown />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
