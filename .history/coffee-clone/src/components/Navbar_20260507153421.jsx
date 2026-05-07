import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const shopMenu = {
  Coffee: ["Signature","Seasonal","Atlas","One City","Bundles","Women Produced","Subscribe & Save"],
  "Roast Type": ["Light Roast","Medium Roast","Medium Dark","Dark Roast","French Roast Dark"],
  Merchandise: ["Gift Cards","Tea & Cocoa","Mugs","Apparel","Sticker & Pins"],
  "Cold Brew": ["Single Serve","Bruvi","Cometeer","Specialty Instant"],
  "Brew Gear": ["Chemex","Hario","Kalita","Acaia","Breville"],
  Region: ["Central America","South America","Mexico","Africa"],
};

const locationsMenu = {
  "Same Day Ordering": ["All Locations","Flatiron","Bergen St","Brooklyn Heights","Dumbo","West Village","13th Street","Union Square West"],
  "Visit Us": ["Chelsea","Bryant Park","Grand Central","Long Island City Roastery","Columbia University","TWA Hotel at JFK"],
};

const discoverMenu = {
  People: ["We're Hiring","Humanities"],
  Learn: ["Our Story","Brew Guides","Blog","Contact Us"],
};

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="bg-white border-b border-joe-light sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 h-16">

        {/* LEFT LINKS */}
        <div className="hidden lg:flex items-center">
          {/* SHOP */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">
              Shop
            </button>
            <div className="hidden group-hover:flex absolute top-16 left-0 bg-white border border-joe-light shadow-lg p-8 gap-8 z-50 min-w-max">
              {Object.entries(shopMenu).map(([cat, items]) => (
                <div key={cat} className="min-w-[130px]">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">{cat}</p>
                  {items.map(item => (
                    <Link key={item} to="/shop" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5 transition-colors">{item}</Link>
                  ))}
                </div>
              ))}
              <div className="min-w-[160px]">
                <img src="https://joecoffeecompany.com/cdn/shop/files/Build-Your-Own-Coffee-Box.gif?v=1764009102&width=533" alt="Bundle" className="w-40 h-24 object-cover rounded"/>
                <p className="text-[11px] mt-2 font-medium">Build Your Own Bundle</p>
                <p className="text-[11px] text-joe-mid">From $33.00</p>
              </div>
            </div>
          </div>

          {/* CLASSES */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">Classes</button>
            <div className="hidden group-hover:flex absolute top-16 left-0 bg-white border border-joe-light shadow-lg p-8 gap-8 z-50">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">Classes</p>
                {["Public Classes","Professional Certification","Private & Corporate Events"].map(i=>(
                  <Link key={i} to="#" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5">{i}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <img src="https://joecoffeecompany.com/cdn/shop/files/CUPPING_21599.jpg?v=1757724799&width=360" className="w-40 h-24 object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-1.5">Upcoming Classes</div>
                </div>
                <div className="relative">
                  <img src="https://joecoffeecompany.com/cdn/shop/files/OFFICAL_JOE_21709.jpg?v=1757724799&width=360" className="w-40 h-24 object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-1.5">Professional Training</div>
                </div>
              </div>
            </div>
          </div>

          {/* CATERING */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">Catering</button>
            <div className="hidden group-hover:flex absolute top-16 left-0 bg-white border border-joe-light shadow-lg p-8 gap-8 z-50">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">Catering</p>
                {["Our Services","Joe 2 Go","Residencies"].map(i=>(
                  <Link key={i} to="#" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5">{i}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <img src="https://joecoffeecompany.com/cdn/shop/files/111219_Joe_Coffee-046.jpg?v=1757725213&width=360" className="w-40 h-24 object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-1.5">Cater with Joe</div>
                </div>
                <div className="relative">
                  <img src="https://joecoffeecompany.com/cdn/shop/files/Mulberry_27.jpg?v=1757725184&width=360" className="w-40 h-24 object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-1.5">Our Services</div>
                </div>
              </div>
            </div>
          </div>

          <Link to="#" className="px-4 h-16 flex items-center text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">
            Order Local Pick Up
          </Link>
        </div>

        {/* LOGO CENTER */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 text-joe-dark no-underline">
          <div className="w-9 h-9 rounded-full bg-joe-dark flex items-center justify-center text-white font-playfair text-sm font-semibold">J</div>
          <div>
            <span className="block text-[11px] tracking-widest uppercase font-medium leading-tight">Joe Coffee</span>
            <span className="block text-[11px] tracking-widest uppercase font-medium leading-tight text-joe-mid">Company</span>
          </div>
        </Link>

        {/* RIGHT LINKS */}
        <div className="hidden lg:flex items-center">
          {/* LOCATIONS */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">Locations</button>
            <div className="hidden group-hover:flex absolute top-16 right-0 bg-white border border-joe-light shadow-lg p-8 gap-8 z-50">
              {Object.entries(locationsMenu).map(([cat,items])=>(
                <div key={cat} className="min-w-[160px]">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">{cat}</p>
                  {items.map(i=><Link key={i} to="#" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5">{i}</Link>)}
                </div>
              ))}
            </div>
          </div>

          {/* WHOLESALE */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">Wholesale</button>
            <div className="hidden group-hover:block absolute top-16 right-0 bg-white border border-joe-light shadow-lg p-8 z-50 min-w-[200px]">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">Wholesale</p>
              {["Coffee Program","Coffee Services","Education & Training","Proudly Serving Program"].map(i=>(
                <Link key={i} to="#" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5">{i}</Link>
              ))}
            </div>
          </div>

          {/* DISCOVER */}
          <div className="relative group">
            <button className="px-4 h-16 text-xs font-medium tracking-widest uppercase hover:text-joe-blue transition-colors">Discover</button>
            <div className="hidden group-hover:flex absolute top-16 right-0 bg-white border border-joe-light shadow-lg p-8 gap-8 z-50">
              {Object.entries(discoverMenu).map(([cat,items])=>(
                <div key={cat} className="min-w-[130px]">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3 pb-2 border-b border-joe-light">{cat}</p>
                  {items.map(i=><Link key={i} to="#" className="block text-[13px] text-joe-dark hover:text-joe-blue py-0.5">{i}</Link>)}
                </div>
              ))}
            </div>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-1 ml-2">
            <button className="p-2 hover:text-joe-blue transition-colors"><Search size={18}/></button>
            <button className="p-2 hover:text-joe-blue transition-colors"><User size={18}/></button>
            <button className="p-2 hover:text-joe-blue transition-colors relative" onClick={()=>setIsOpen(true)}>
              <ShoppingBag size={18}/>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-joe-blue text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{count}</span>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU BTN */}
        <button className="lg:hidden ml-auto p-2" onClick={()=>setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-joe-light px-6 py-4 flex flex-col gap-3">
          {["Shop","Classes","Catering","Locations","Wholesale","Discover"].map(item=>(
            <Link key={item} to="/shop" className="text-sm font-medium tracking-widest uppercase py-2 border-b border-joe-light" onClick={()=>setMobileOpen(false)}>{item}</Link>
          ))}
          <div className="flex gap-4 pt-2">
            <button className="p-2"><Search size={20}/></button>
            <button className="p-2"><User size={20}/></button>
            <button className="p-2 relative" onClick={()=>{setIsOpen(true);setMobileOpen(false)}}>
              <ShoppingBag size={20}/>
              {count>0&&<span className="absolute -top-0.5 -right-0.5 bg-joe-blue text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{count}</span>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}