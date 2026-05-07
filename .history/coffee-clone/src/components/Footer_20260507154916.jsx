import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#118acb" }} className="text-white">
      {/* TOP */}
      <div className="px-8 lg:px-20 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Customer Service */}
        <div>
          <p className="font-bold text-sm mb-2">Customer Service Hours</p>
          <p className="text-sm font-light opacity-80">Monday-Friday, 9am - 5pm EST</p>
          <p className="text-sm font-light opacity-80">Please allow 24–48 hours for a response.</p>
        </div>
        {/* SHOP */}
        <div>
          <p className="font-bold text-[11px] tracking-widest uppercase mb-4">SHOP</p>
          {["Coffee","Cold Brew Collection","Specialty Instant Coffee","Gifts & Merchandise","Brew Gear","Classes","My Account"].map(i => (
            <Link key={i} to="#" className="block text-sm opacity-80 hover:opacity-100 py-1 font-light transition-opacity">{i}</Link>
          ))}
        </div>
        {/* LEARN */}
        <div>
          <p className="font-bold text-[11px] tracking-widest uppercase mb-4">LEARN</p>
          {["Locations","Wholesale","Contact","Blog","Frequently Asked Questions","Privacy Policy","Accessibility Statement","Download Our App"].map(i => (
            <Link key={i} to="#" className="block text-sm opacity-80 hover:opacity-100 py-1 font-light transition-opacity">{i}</Link>
          ))}
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="px-8 lg:px-20 pb-6 flex flex-col gap-4">
        <div className="flex items-center gap-5">
          {[["𝕏","https://x.com"],["f","https://facebook.com"],["◉","https://instagram.com"],["♪","https://tiktok.com"],["in","https://linkedin.com"]].map(([icon,href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="text-white opacity-80 hover:opacity-100 text-lg transition-opacity">{icon}</a>
          ))}
        </div>
        <p className="text-sm opacity-70">© 2026, Joe Coffee Company. <a href="#" className="underline hover:opacity-100">Powered by Shopify</a></p>
        <button className="self-start bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors">
          🤍 Follow on shop
        </button>
      </div>

      {/* GIANT TEXT */}
      <div className="overflow-hidden">
        <p className="text-white font-extrabold leading-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 18vw, 220px)", fontFamily: "serif", opacity: 1, letterSpacing: "-4px", marginLeft: "-8px" }}>
          JoeCoffee
        </p>
      </div>
    </footer>
  );
}