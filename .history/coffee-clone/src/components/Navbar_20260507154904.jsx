import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = "px-4 h-16 flex items-center gap-1 text-[12px] font-bold tracking-widest uppercase text-white hover:text-white/75 transition-colors cursor-pointer whitespace-nowrap";

  return (
    <nav className="sticky top-0 z-50" style={{ background: "#118acb" }}>
      <div className="flex items-center justify-between px-6 h-16">

        {/* LEFT */}
        <div className="hidden lg:flex items-center">
          <button className={navLink}><Search size={18}/></button>
          <NavDropdown label="SHOP" items={["Coffee","Cold Brew","Brew Gear","Merchandise","Bundles"]}/>
          <NavDropdown label="CLASSES" items={["Public Classes","Professional Certification","Private Events"]}/>
          <NavDropdown label="CATERING" items={["Our Services","Joe 2 Go","Residencies"]}/>
        </div>

        {/* LOGO */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <span className="text-white font-extrabold text-2xl tracking-tight" style={{ fontFamily: "serif", letterSpacing: "-1px" }}>
            JoeCoffee
          </span>
        </Link>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center">
          <NavDropdown label="LOCATIONS" items={["All Locations","Flatiron","West Village","Brooklyn Heights","Dumbo"]}/>
          <NavDropdown label="WHOLESALE" items={["Coffee Program","Coffee Services","Education & Training"]}/>
          <NavDropdown label="DISCOVER" items={["Our Story","Brew Guides","Blog","Contact Us","We're Hiring"]}/>
          <button className={navLink}><User size={18}/></button>
          <button className={navLink + " relative"} onClick={() => setIsOpen(true)}>
            <ShoppingBag size={18}/>
            {count > 0 && (
              <span className="absolute top-3 right-2 bg-white text-joe-blue text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{count}</span>
            )}
          </button>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button className="text-white p-2" onClick={() => setIsOpen(true)}><ShoppingBag size={20}/></button>
          <button className="text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-joe-blue border-t border-white/20 px-6 py-4 flex flex-col gap-2">
          {["Shop","Classes","Catering","Locations","Wholesale","Discover"].map(item => (
            <Link key={item} to="/shop" className="text-white font-bold text-sm tracking-widest uppercase py-2 border-b border-white/20" onClick={() => setMobileOpen(false)}>{item}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="px-4 h-16 flex items-center gap-1 text-[12px] font-bold tracking-widest uppercase text-white hover:text-white/75 transition-colors">
        {label} <ChevronDown size={13}/>
      </button>
      {open && (
        <div className="absolute top-16 left-0 bg-white shadow-xl border border-gray-100 py-4 min-w-[200px] z-50">
          {items.map(item => (
            <Link key={item} to="/shop" className="block px-6 py-2 text-sm text-joe-dark hover:bg-joe-cream hover:text-joe-blue transition-colors font-medium">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}