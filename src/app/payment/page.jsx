import Payment from "../Payment";
import { Footer } from "../Footer";

import NavBar from "../NavBar";

export default function payment() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4 ml-2 mr-2">
        <NavBar />
        <Payment />
      </div>
      <Footer />
    </>
  );
}
