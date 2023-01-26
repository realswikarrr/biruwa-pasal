import { Footer } from "../Footer";
import NavBar from "../NavBar";
import Product from "../Product";

export default function product() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Product />
      </div>
      <Footer />
    </>
  );
}
