import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { HomePageLast } from "./HomePageLast";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className="lg:mr-20 lg:ml-20 mt-4  ml-2 mr-2">
        <NavBar />
        <HomePage />
      </div>

      <HomePageLast />
      <Footer />
    </>
  );
}
