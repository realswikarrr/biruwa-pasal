import { Footer } from "../Footer";

import NavBar from "../NavBar";
import SignUp from "../SignUp";

export default function login() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}
