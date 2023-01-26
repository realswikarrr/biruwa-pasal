import Payment from "../Payment";
import { Footer } from "../Footer";

import NavBar from "../NavBar";

export default function payment() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Payment />
      </div>
      <Footer />
    </>
  );
}
