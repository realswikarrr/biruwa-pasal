import { Footer } from "../Footer";
import { Blog } from "../Blog";
import NavBar from "../NavBar";

export default function blog() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
