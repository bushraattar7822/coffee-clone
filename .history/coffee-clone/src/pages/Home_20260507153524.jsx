import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, cityCollection } from "../data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <img
          src="https://joecoffeecompany.com/cdn/shop/files/227A9934_3_889d3298-dd47-4431-9c0b-4b826d9c7d1a.jpg?v=1757982537"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="relative z-10 px-10 lg:px-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opaci