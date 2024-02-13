import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import CategoriesAll from "./components/Categories/CategoriesAll";
import CategoriesFurnitures from "./components/Categories/CategoriesFurniture";
import CategoriesElectronics from "./components/Categories/CategoriesElectronics";
import CategoriesLamps from "./components/Categories/CategoriesLamps";
import CategoriesKitchen from "./components/Categories/CategoriesKitchen";
import CategoriesChairs from "./components/Categories/CategoriesChairs";
import CategoriesSkinCare from "./components/Categories/CategoriesSkinCare";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />}>
          <Route path="all" element={<CategoriesAll />} />
          <Route path="furniture" element={<CategoriesFurnitures />} />
          <Route path="electronics" element={<CategoriesElectronics />} />
          <Route path="lamps" element={<CategoriesLamps />} />
          <Route path="kitchen" element={<CategoriesKitchen />} />
          <Route path="chairs" element={<CategoriesChairs />} />
          <Route path="skin-care" element={<CategoriesSkinCare />} />
        </Route>

      </Routes>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
