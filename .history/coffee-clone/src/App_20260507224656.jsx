import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import AnnouncementBar from "./components/AnnouncementBar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import {
  ShopAll,
  ClassesPage,
  CateringPage,
  LocationsPage,
  WholesalePage,
} from "./pages/JoePages";

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
          <Route path="/pages/home-consumers" element={<ClassesPage />} />
          <Route path="/pages/catering-events" element={<CateringPage />} />
          <Route path="/pages/locations" element={<LocationsPage />} />
          <Route path="/pages/wholesale" element={<WholesalePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
