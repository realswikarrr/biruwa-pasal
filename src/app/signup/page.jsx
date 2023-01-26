import { Footer } from "../Footer";

import NavBar from "../NavBar";
import SignUp from "../SignUp";

export default function login() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4 mr-2 ml-2">
        <NavBar />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}
