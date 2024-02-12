import Banner1 from "./components/Banners/Banner1/Banner1";
import Banner2 from "./components/Banners/Banner2/Banner2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Trending from "./components/Trending/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Banner1 />
      <Trending />
      <Banner2 />
    </>
  );
}

export default App;
