/* eslint-disable @next/next/no-img-element */
export default function SignUp() {
  return (
    <section>
      <div class="container px-6 py-12">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1596605872817-7615f7ea2aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              class="w-full lg:h-[700px] rounded-lg shadow-lg"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div>
              <h1 className="mt-4 mb-5 text-2xl font-bold rounded-r w-16 border-4 border-b-yellow-600 border-t-0 border-r-0 border-l-0 ">
                <span className=" block w-[300px] ">Sign Up</span>
              </h1>
              <h1 className="mb-4">Welcome back! Please enter your details</h1>
            </div>
            <form>
              <div class="mb-6">
                <h1 className=" font-semibold text-gray-500 mb-2">Name</h1>
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                />
              </div>

              <div class="mb-6">
                <h1 className=" font-semibold text-gray-500 mb-2">Email</h1>
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-6">
                <h1 className=" font-semibold text-gray-500 mb-2">Password</h1>
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                <h1 className=" text-sm text-gray-400 mt-2">
                  Must be at least 8 characters
                </h1>
              </div>

              <div class="flex justify-between items-center mb-6">
                <a
                  href="#!"
                  class="text-gray-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Create account
              </button>
              <button
                type="button"
                class=" w-full border border-black mt-3 text-black  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="green"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign Up with Google
              </button>

              <div className="text-center">
                <h1>
                  Already have an account ?{" "}
                  <a href="/login">
                    <span className="font-bold">Log in</span>
                  </a>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
