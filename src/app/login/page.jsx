import Login from "../Login";
import { Footer } from "../Footer";

import NavBar from "../NavBar";

export default function login() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Login />
      </div>
      <Footer />
    </>
  );
}
