import Banner1 from "./components/Banners/Banner1/Banner1";
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
    </>
  );
}

export default App;
