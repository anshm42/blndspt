import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar.tsx";
import HomePage from "./HomePage.tsx";
import ItemPage from "./ItemPage.tsx";

import AboutUs from "./AboutUs.tsx";
import Shop from "./Shop.tsx";
import Contact from "./Contact.tsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item-page" element={<ItemPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
