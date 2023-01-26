/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

export function Footer() {
  return (
    <>
      <footer className="footer hidden lg:flex  p-10 bg-neutral text-neutral-content bg-black w-full text-white mb-0  justify-between flex-col lg:flex-row">
        <div className="ml-10 ">
          <h1 className="font-bold">Payment Methods</h1>
          <img
            className=" w-32 mt-2"
            src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
          />
          <h1 className="mt-3 font-bold">Download Our App</h1>
          <h1 className=" text-sm">Download Our App On Either Of This</h1>
          <img
            className=" w-40 mt-2"
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
          />
          <h1 className="text-xs mt-5">CopyRight @Karan_Singh_Sitaual</h1>
        </div>
        <div className="mt-20 ml-10 lg:mr-20">
          <a
            href="https://flowbite.com/"
            className="flex items-center lg:justify-center"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              <span className=" text-green-500">Biruwa</span>pasal
            </span>
          </a>
          <h1>Hello Hello This Is Biruwa Pasal Buy From Us</h1>
        </div>
        <div className="mt-20 ml-10 lg:mr-20">
          <h1>Follow Us</h1>
          <h1 className="flex flex-row items-center">
            <AiFillInstagram />
            @biruwaPasal
          </h1>
          <h1 className="flex flex-row items-center">
            <AiFillFacebook />
            @biruwaPasal
          </h1>
          <h1 className="flex flex-row items-center">
            <AiFillTwitterSquare /> @biruwaPasal
          </h1>
        </div>
      </footer>

      {/* Footer For Mobile */}
      <footer className="footer lg:hidden  p-5 bg-neutral text-neutral-content bg-black w-full text-white mb-0 flex justify-between flex-col lg:flex-row">
        <div className="mt-5 ">
          <a
            href="https://flowbite.com/"
            className="flex items-center justify-center lg:justify-center"
          >
            <span className="self-center text-xl font-semibold  ">
              <span className=" text-green-500">Biruwa</span>pasal
            </span>
          </a>
          <h1 className="text-center">
            Hello Hello This Is Biruwa Pasal Buy From Us
          </h1>
        </div>

        <div className="flex  items-center justify-between">
          <div className=" mt-6 lg:mr-20">
            <h1>Follow Us</h1>
            <h1 className="flex flex-row items-center">
              <AiFillInstagram />
              @biruwaPasal
            </h1>
            <h1 className="flex flex-row items-center">
              <AiFillFacebook />
              @biruwaPasal
            </h1>
            <h1 className="flex flex-row items-center">
              <AiFillTwitterSquare /> @biruwaPasal
            </h1>
          </div>
          <div>
            <h1 className="font-bold">Payment Methods</h1>
            <img
              className=" w-32 mt-2"
              src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
            />
          </div>
        </div>

        <div className=" justify-center flex flex-col items-center mt-5">
          <h1 className="mt-3 font-bold">Download Our App</h1>
          <h1 className=" text-sm">Download Our App On Either Of This</h1>
          <img
            className=" w-40 mt-2"
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
          />
          <h1 className="text-xs mt-5">CopyRight @Karan_Singh_Sitaual</h1>
        </div>
      </footer>
    </>
  );
}
