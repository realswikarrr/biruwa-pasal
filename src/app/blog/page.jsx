import { Footer } from "../Footer";
import { Blog } from "../Blog";
import NavBar from "../NavBar";

export default function blog() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4 ml-2 mr-2">
        <NavBar />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
