import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import AnnouncementBar from "./components/AnnouncementBar";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ShopAll from "./pages/ShopAll";
import Classes from "./pages/Classes";
import Catering from "./pages/Catering";
import Locations from "./pages/Locations";
import Wholesale from "./pages/Wholesale";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AnnouncementBar />
        <Navbar />
        <CartSidebar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<ShopAll />} />
          <Route path="/collections/shop-all" element={<ShopAll />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/pages/home-consumers" element={<Classes />} />
          <Route path="/pages/catering-events" element={<Catering />} />
          <Route path="/pages/locations" element={<Locations />} />
          <Route path="/pages/wholesale" element={<Wholesale />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
