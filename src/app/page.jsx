import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { HomePageLast } from "./HomePageLast";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className="mr-20 ml-20 mt-4">
        <NavBar />
        <HomePage />
      </div>
      <HomePageLast />
      <Footer />
    </>
  );
}
