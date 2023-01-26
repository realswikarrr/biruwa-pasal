import { Footer } from "../Footer";
import Seed from "../Seed";
import NavBar from "../NavBar";

export default function seeds() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <Seed />
      </div>
      <Footer />
    </>
  );
}
