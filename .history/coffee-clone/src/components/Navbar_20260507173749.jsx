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
    "px-5 h-16 flex items-center gap-2 text-[13px] font-black tracking-[1.8px] uppercase text-white hover:bg-black/25 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap rounded-md";

  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{ background: "#118acb" }}
    >
      <div className="flex items-center justify-between px-8 h-[72px] relative">

        {/* LEFT */}
        <div className="hidden lg:flex items-center gap-1">

          {/* SEARCH */}
          <button className={navLink}>
            <Search size={19} strokeWidth={3} />
            <span>Search</span>
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
          className="absolute left-[48.5%] -translate-x-1/2 flex items-center"
        >
          <span
            className="text-white font-black text-[42px] leading-none tracking-[-2px]"
            style={{
              fontFamily:
                '"Cooper Black", "Cooper Std Black", Georgia, serif',
            }}
          >
            JoeCoffee
          </span>
        </Link>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-1">

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

          {/* LOGIN */}
          <button className={navLink}>
            <User size={19} strokeWidth={3} />
            <span>Login</span>
          </button>

          {/* CART */}
          <button
            className={navLink + " relative"}
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag size={19} strokeWidth={3} />
            <span>Cart</span>

            {count > 0 && (
              <span className="absolute top-3 right-2 bg-white text-joe-blue text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black">
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
            <ShoppingBag size={22} strokeWidth={3} />
          </button>

          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={3} />
            ) : (
              <Menu size={24} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#118acb] border-t border-white/20 px-6 py-4 flex flex-col gap-2">

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
              className="text-white font-black text-sm tracking-[2px] uppercase py-3 px-2 rounded-md hover:bg-black/25 transition-all duration-300"
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
      <button
        className="
          px-5
          h-16
          flex
          items-center
          gap-1
          text-[13px]
          font-black
          tracking-[1.8px]
          uppercase
          text-white
          hover:bg-black/25
          hover:text-white
          transition-all
          duration-300
          rounded-md
        "
      >
        {label}
        <ChevronDown size={14} strokeWidth={3} />
      </button>

      {open && (
        <div className="absolute top-16 left-0 bg-white shadow-2xl border border-gray-100 py-4 min-w-[220px] z-50 rounded-md overflow-hidden">

          {items.map((item) => (
            <Link
              key={item}
              to="/shop"
              className="
                block
                px-6
                py-3
                text-[13px]
                font-extrabold
                tracking-wide
                text-joe-dark
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
              "
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}