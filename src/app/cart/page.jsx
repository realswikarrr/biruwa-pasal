import Cart from "../Cart";
import { Footer } from "../Footer";

import NavBar from "../NavBar";

export default function cart() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4 ml-2 mr-2">
        <NavBar />
        <Cart />
      </div>
      <Footer />
    </>
  );
}
