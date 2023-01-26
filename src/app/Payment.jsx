export default function Payment() {
  return (
    <main>
      <div>
        <h1 className="mt-5 text-xs text-gray-500">
          Home / Apple Seed / Your Cart / Payment Detail
        </h1>

        <h1 className="mt-4 text-2xl font-bold rounded-r w-16 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
          <span className=" block w-[300px] ">Payment Details</span>
        </h1>
      </div>

      <div className="lg:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="mt-4">Enter your payment detail below to purchase</h1>

          <div className="mt-4">
            <h1 className="text-gray-400 font-semibold">Email</h1>
            <input
              type="email"
              placeholder="Enter your email"
              className=" focus:outline-none border border-gray-400 p-1 w-2/3 rounded-lg"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-gray-400 font-semibold">Name on Card</h1>
            <input
              type="email"
              placeholder="Name On Card"
              className=" focus:outline-none border border-gray-400 p-1  w-2/3 rounded-lg"
            />
          </div>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-3 ">
            <div>
              <h1 className="text-gray-400 font-semibold">Card Number</h1>
              <input
                type="email"
                placeholder="Card No"
                className=" focus:outline-none border border-gray-400 p-1 w-80 rounded-lg"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
              <div>
                <h1 className="text-gray-400 font-semibold">CVV</h1>
                <input
                  type="email"
                  placeholder="CVV"
                  className=" focus:outline-none border border-gray-400 p-1 w-32 rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-gray-400 font-semibold  mt-5 lg:mt-0">
                  Expiry
                </h1>
                <input
                  type="email"
                  placeholder="Expiry"
                  className=" focus:outline-none border border-gray-400 p-1 w-32 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-400 font-semibold">Billing Address</h1>
            <input
              type="email"
              placeholder="Name On Card"
              className=" focus:outline-none border border-gray-400 p-1  lg:w-2/3 rounded-lg"
            />
          </div>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-10 ">
            <div>
              <h1 className="text-gray-400 font-semibold">State / Province</h1>
              <input
                type="email"
                placeholder="State / Province"
                className=" focus:outline-none border border-gray-400 p-1 lg:w-96 rounded-lg"
              />
            </div>

            <div>
              <h1 className="text-gray-400 font-semibold mt-5 lg:mt-0">
                Zip Code
              </h1>
              <input
                type="email"
                placeholder="Zip Code"
                className=" focus:outline-none border border-gray-400 p-1 w-32 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-400 font-semibold">Country</h1>
            <input
              type="dropdown"
              placeholder="Enter Your Country"
              className=" focus:outline-none border border-gray-400 p-1  w-2/3 rounded-lg"
            />
          </div>
          <div className="mt-5 mb-20">
            <a
              href="#"
              class="inline-flex bg-green-500 items-center justify-center lg:w-2/3 w-full  px-10 py-2 lg:mr-3 mt-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Complete Payment
            </a>
          </div>
        </div>

        <div className=" shadow-lg  h-44 px-10 rounded-md mb-20 lg:mb-0">
          <h1 className="font-bold">Order Summary:</h1>
          <div className="flex flex-row items-center justify-between">
            <h1>Items(4):</h1>
            <h1>Rs 1099</h1>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Shipping And Handling:</h1>
            <h1>Rs 1099</h1>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Before Tax:</h1>
            <h1>Rs 1099</h1>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Tax Collected:</h1>
            <h1>Rs 1099</h1>
          </div>
          <div className="flex flex-row items-center justify-between mt-5">
            <h1 className="font-bold">Order Total:</h1>
            <h1 className="font-bold">Rs 2099</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
