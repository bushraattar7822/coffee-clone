import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink =
    "px-5 h-20 flex items-center gap-2 text-[14px] font-extrabold tracking-wide uppercase text-white hover:text-white/75 transition-all duration-300 cursor-pointer whitespace-nowrap";

  return (
    <nav
      className="sticky top-0 z-50"
      style={{ background: "#118ACB" }}
    >
      <div className="relative flex items-center justify-between px-10 h-20">

        {/* LEFT */}
        <div className="hidden lg:flex items-center">
          
          {/* SEARCH */}
          <button className={`${navLink} group relative`}>
            <Search
              size={22}
              className="group-hover:scale-110 transition-transform"
            />

            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Search
            </span>
          </button>

          <NavDropdown
            label="SHOP"
            items={[
              "Coffee",
              "Cold Brew",
              "Brew Gear",
              "Merchandise",
              "Bundles",
            ]}
          />

          <NavDropdown
            label="CLASSES"
            items={[
              "Public Classes",
              "Professional Certification",
              "Private Events",
            ]}
          />

          <NavDropdown
            label="CATERING"
            items={[
              "Our Services",
              "Joe 2 Go",
              "Residencies",
            ]}
          />
        </div>

        {/* LOGO */}
        <Link
  to="/"
  className="absolute left-[46.7%] -translate-x-1/2 flex items-center"
>
          <span
            className="text-white font-black text-[42px] leading-none"
            style={{
              fontFamily: "serif",
              letterSpacing: "-2px",
            }}
          >
            JoeCoffee
          </span>
        </Link>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center">

          <NavDropdown
            label="LOCATIONS"
            items={[
              "All Locations",
              "Flatiron",
              "West Village",
              "Brooklyn Heights",
              "Dumbo",
            ]}
          />

          <NavDropdown
            label="WHOLESALE"
            items={[
              "Coffee Program",
              "Coffee Services",
              "Education & Training",
            ]}
          />

          <NavDropdown
            label="DISCOVER"
            items={[
              "Our Story",
              "Brew Guides",
              "Blog",
              "Contact Us",
              "We're Hiring",
            ]}
          />

          {/* USER */}
          <button className={`${navLink} group relative`}>
            <User
              size={22}
              className="group-hover:scale-110 transition-transform"
            />

            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Account
            </span>
          </button>

          {/* CART */}
          <button
            className={`${navLink} relative group`}
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag
              size={22}
              className="group-hover:scale-110 transition-transform"
            />

            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Cart
            </span>

            {count > 0 && (
              <span className="absolute top-5 right-3 bg-white text-joe-blue text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button
            className="text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag size={22} />
          </button>

          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-joe-blue border-t border-white/20 px-6 py-4 flex flex-col gap-2">
          {[
            "Shop",
            "Classes",
            "Catering",
            "Locations",
            "Wholesale",
            "Discover",
          ].map((item) => (
            <Link
              key={item}
              to="/shop"
              className="text-white font-bold text-sm tracking-widest uppercase py-3 border-b border-white/20"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-5 h-20 flex items-center gap-1 text-[14px] font-extrabold tracking-wide uppercase text-white hover:text-white/75 transition-all duration-300">
        {label}

        <ChevronDown size={15} />
      </button>

      {open && (
        <div className="absolute top-20 left-0 bg-white shadow-2xl border border-gray-100 py-4 min-w-[230px] z-50">
          {items.map((item) => (
            <Link
              key={item}
              to="/shop"
              className="block px-6 py-3 text-sm text-joe-dark hover:bg-joe-cream hover:text-joe-blue transition-colors font-semibold"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}