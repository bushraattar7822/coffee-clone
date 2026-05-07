import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes("@")) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-joe-dark text-white">
      {/* NEWSLETTER */}
      <div className="px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/40 mb-3">Stay Connected</p>
          <h3 className="font-playfair text-3xl font-semibold mb-4">Stay in the loop</h3>
          <p className="text-sm text-white/60 font-light leading-relaxed mb-6">Be the first to know about fresh coffees, menu updates, and news from Joe.</p>
          <div className="text-xs text-white/50 leading-relaxed">
            <strong className="text-white/70 text-sm">Customer Service Hours</strong><br/>
            Monday–Friday, 9am–5pm EST<br/>
            Please allow 24–48 hours for a response.
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-[10px] tracking-widest uppercase text-white/40 mb-3">Email Address *</label>
          {subscribed ? (
            <p className="text-joe-blue text-sm">✓ Thank you! Check your email to confirm your subscription.</p>
          ) : (
            <div className="flex">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-joe-blue transition-colors"
              />
              <button onClick={handleSubscribe} className="bg-white text-joe-dark px-6 text-[10px] font-bold tracking-widest uppercase hover:bg-joe-blue hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>

      {/* LINKS */}
      <div className="px-20 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <p className="font-playfair text-2xl font-semibold mb-3">Joe Coffee Company</p>
          <p className="text-sm text-white/50 font-light leading-relaxed mb-6 max-w-xs">
            A New York City based roaster sharing coffee through nationwide shipping, subscriptions, wholesale programs, classes, tech support, and our cafes.
          </p>
          <div className="flex gap-3">
            {[["𝕏","https://x.com/JoecoffeeNYC"],["f","https://www.facebook.com/JoeCoffeeCompany/"],["◉","https://www.instagram.com/joecoffeecompany/"],["♪","https://www.tiktok.com/@joecoffeeco"],["in","https://www.linkedin.com/company/joe-coffee/"]].map(([icon, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs text-white/60 hover:border-white hover:text-white transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-5">Shop</p>
          {["Coffee","Cold Brew Collection","Specialty Instant Coffee","Gifts & Merchandise","Brew Gear","Classes","My Account"].map(i=>(
            <Link key={i} to="#" className="block text-sm text-white/60 hover:text-white py-1 font-light transition-colors">{i}</Link>
          ))}
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-5">Learn</p>
          {["Locations","Wholesale","Contact","Blog","FAQ","Privacy Policy","Accessibility Statement","Download Our App"].map(i=>(
            <Link key={i} to="#" className="block text-sm text-white/60 hover:text-white py-1 font-light transition-colors">{i}</Link>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="px-20 py-5 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/30">© 2026 <a href="#" className="hover:text-white/60 transition-colors">Joe Coffee Company</a>. Powered by Shopify.</p>
      </div>
    </footer>
  );
}