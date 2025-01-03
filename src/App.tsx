import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import ItemPage from "./ItemPage.tsx";

import AboutUs from "./AboutUs.tsx";
import Shop from "./Shop.tsx";
import Contact from "./Contact.tsx";
import Cart from "./Cart.tsx";
import { ShoppingCartProvider } from "./ShoppingCartContext.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/item-page" element={<ItemPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
