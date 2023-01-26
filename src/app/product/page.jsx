import { Footer } from "../Footer";
import NavBar from "../NavBar";
import Product from "../Product";

export default function product() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4 ml-2 mr-2">
        <NavBar />
        <Product />
      </div>
      <Footer />
    </>
  );
}
