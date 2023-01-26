import Cart from "../Cart";
import { Footer } from "../Footer";

import NavBar from "../NavBar";

export default function cart() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Cart />
      </div>
      <Footer />
    </>
  );
}
