import heroImage from "../assets/hero.webp";
import joeLogo from "../assets/logo.webp";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, cityCollection } from "../data/products";

// ── MARQUEE (Commitment Community Curiosity Craft) ──
function Marquee() {
  const items = [
    { icon: "🕊️", label: "Commitment" },
    { icon: "🧑‍🤝‍🧑", label: "Community" },
    { icon: "☕", label: "Curiosity" },
    { icon: "🎨", label: "Craft" },
  ];
  const repeated = [...items, ...items, ...items];
  return (
   <div className="overflow-hidden bg-white py-10 border-y border-gray-100">
      <motion.div
  className="flex gap-20 items-center"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {repeated.map((item, i) => (
  <div
    key={i}
    className="flex items-center gap-6 shrink-0"
  >
    {/* JOE COFFEE LOGO */}
   <img
  src={joeLogo}
  alt="Joe Coffee"
  className="h-[52px] w-auto object-contain"
/>

    {/* ICON */}
    <span className="text-5xl">
      {item.icon}
    </span>

    {/* TEXT */}
    <span className="text-[42px] font-black text-joe-dark tracking-tight leading-none">
      {item.label}
    </span>
  </div>
))}
      </motion.div>
    </div>
  );
}

// ── VALUES SLIDESHOW ──
const valueSlides = [
  {
    label: "IT'S NOT ONLY ABOUT THE COFFEE",
    title: "Community Comes First",
    text: "Joe is more than coffee. Each cafe reflects its neighborhood, celebrating diversity and creating a place where everyone feels welcome. From farmers to baristas to guests, the focus has always been on people and the connections they make.",
    img: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800&q=80",
  },
  {
    label: "CRAFT WITHOUT PRETENSE",
    title: "Coffee With Integrity",
    text: "Joe takes coffee seriously but never in a way that feels exclusive. Every step, from sourcing with long-term partners to roasting in Long Island City, is done with care and quality. The goal is to make excellent coffee approachable and genuine.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
  },
  {
    label: "EVOLVING WITH PURPOSE",
    title: "Where Everyone's a Regular",
    text: "For more than 20 years Joe has gone from a single cafe in the Village to a link of cafes across New York. Along the way we've expanded into catering, wholesale, and tech solutions. Each new step carries the same focus on quality, connection, and hospitality that defines the cafe experience.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
];

function ValuesSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const variants = {
    enter: (d) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } },
    exit: (d) => ({ y: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.5 } }),
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* LEFT TEXT */}
      <div className="flex items-center px-12 lg:px-20 py-20 relative overflow-hidden bg-white">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col justify-center px-12 lg:px-20"
          >
            <p className="text-[11px] font-bold tracking-widest uppercase text-joe-mid mb-5">
              {valueSlides[current].label}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-joe-dark leading-tight mb-6">
              {valueSlides[current].title}
            </h2>
            <p className="text-base text-joe-mid leading-relaxed max-w-md">
              {valueSlides[current].text}
            </p>
          </motion.div>
        </AnimatePresence>
        {/* DOTS */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {valueSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-joe-dark" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            src={valueSlides[current].img}
            alt={valueSlides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}


      {/* ── HERO ── */}
// ── PRODUCT SLIDER ──
function ProductSlider() {
  const { addToCart } = useCart();
  const [start, setStart] = useState(0);
  const visible = 4;

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(products.length - visible, s + 1));

  return (
    <section className="px-8 lg:px-16 py-16 bg-white">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-joe-dark">Meet Our Coffees</h2>
        <Link to="/shop" className="text-[12px] font-bold tracking-widest uppercase text-joe-dark border-b-2 border-joe-dark pb-0.5 hover:text-joe-blue hover:border-joe-blue transition-colors">
          SEE MORE
        </Link>
      </div>
      <div className="relative">
        {/* PREV */}
        {start > 0 && (
          <button onClick={prev} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-joe-blue hover:text-white hover:border-joe-blue transition-all">
            <ChevronLeft size={18}/>
          </button>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
          {products.slice(start, start + visible).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden aspect-square mb-3 bg-joe-cream">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <span className="absolute top-2 left-2 bg-joe-dark text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">Sold out</span>
                  {product.sub.includes("Save") && (
                    <span className="absolute top-8 left-2 bg-joe-blue text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">Subscribe & Save</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-joe-dark mb-1">{product.name}</p>
                <p className="text-sm text-joe-mid">From ${product.price.toFixed(2)}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full border border-joe-dark py-2 text-[11px] font-bold tracking-widest uppercase hover:bg-joe-dark hover:text-white transition-all"
              >
                CHOOSE OPTIONS
              </button>
            </motion.div>
          ))}
        </div>
        {/* NEXT */}
        {start + visible < products.length && (
          <button onClick={next} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-joe-blue hover:text-white hover:border-joe-blue transition-all">
            <ChevronRight size={18}/>
          </button>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
     {/* ── HERO ── */}
<section
  className="relative overflow-hidden"
  style={{
    height: "88vh",
    background: "#a08eb5",
  }}
>
  {/* HERO IMAGE */}
  <img
    src={heroImage}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* GRAIN OVERLAY */}
  <div
    className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
      backgroundSize: "180px 180px",
    }}
  />
</section>
      {/* ── APP BANNER ── */}
      <section className="bg-joe-blue text-white text-center py-10 px-8">
        <p className="text-[11px] font-bold tracking-widest uppercase mb-2">DOWNLOAD THE JOE COFFEE APP</p>
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-6">Skip the Line & Order Online</h3>
        <a href="#" className="inline-block bg-joe-dark text-white px-10 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-black transition-colors">
          ORDER NOW
        </a>
      </section>

      {/* ── PRODUCT SLIDER ── */}
      <ProductSlider />

      {/* ── REGULAR CLUB ── */}
      <section className="bg-joe-blue text-white px-8 lg:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-white font-extrabold leading-none mb-2" style={{ fontFamily: "serif", fontSize: "clamp(40px,7vw,90px)" }}>
              <div className="italic" style={{ fontSize: "0.9em" }}>The</div>
              <div className="italic">Regular</div>
            </div>
            <div className="bg-joe-dark text-white px-6 py-2 inline-block text-lg font-bold tracking-widest uppercase rounded-sm">
              COFFEE CLUB
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Wanna be a Regular?</h2>
          <p className="text-base font-light leading-relaxed mb-6 opacity-90">
            Join the Regular Coffee Club and keep Joe Coffee on repeat. Pick your favorite, choose your cadence, and we'll make sure it shows up fresh, right when you need it.
          </p>
          <a href="#" className="inline-block text-white border-b-2 border-white pb-0.5 text-[12px] font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
            JOIN THE CLUB
          </a>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── VALUES SLIDESHOW ── */}
      <ValuesSlideshow />

      {/* ── TWA + CATERING CARDS ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {[
          {
            title: "Joe Coffee at the TWA Hotel",
            desc: "Located inside the iconic TWA Hotel at JFK, this cafe blends mid-century design with modern convenience.",
            cta: "SEE YOU SOON",
            img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
          },
          {
            title: "Catering & Events",
            desc: "From office meetings to celebrations, we'll bring specialty coffee service to match the moment.",
            cta: "LEARN MORE",
            img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
          },
        ].map((card) => (
          <div key={card.title} className="relative overflow-hidden group" style={{ minHeight: "500px" }}>
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ filter: "brightness(0.55)" }}/>
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-snug">{card.title}</h3>
              <p className="text-sm text-white/85 font-light leading-relaxed mb-6 max-w-sm">{card.desc}</p>
              <a href="#" className="inline-block bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors self-start">
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── ONE CITY COLLECTION ── */}
      <section className="px-8 lg:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-joe-mid mb-4">ONE CITY COLLECTION</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-joe-dark leading-tight mb-5">Rooted in New York</h2>
            <p className="text-base text-joe-mid leading-relaxed mb-8 max-w-md">
              The One City Collection is a tribute to the city we call home. Roasted to please every palate, these coffees are designed to be as versatile and dynamic as New York itself.
            </p>
            <a href="#" className="inline-block bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors">
              SHOP NOW
            </a>
            <div className="mt-10">
              <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80" alt="New York" className="w-full rounded-sm object-cover" style={{ height: "300px" }}/>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {cityCollection.map((p) => (
              <div key={p.id} className="flex items-center gap-4 border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="relative w-24 h-24 flex-shrink-0 bg-joe-blue overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <span className="absolute top-1 left-1 bg-joe-dark text-white text-[9px] font-bold px-1.5 py-0.5 uppercase">Sold out</span>
                  <span className="absolute top-5 left-1 bg-joe-blue text-white text-[9px] font-bold px-1.5 py-0.5 uppercase">Subscribe & Save</span>
                </div>
                <div>
                  <p className="font-bold text-joe-dark mb-1">{p.name}</p>
                  <p className="text-sm text-joe-mid">From ${p.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gridTemplateRows: "1fr 1fr" }}>
          {/* photo 1 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
          {/* photo 2 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
          {/* CENTER TEXT */}
          <div className="bg-gray-50 aspect-square flex flex-col items-center justify-center text-center p-6 col-span-1 row-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <p className="text-[11px] font-bold tracking-widest uppercase text-joe-mid mb-2">FOLLOW US</p>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-joe-dark mb-4">On instagram</h3>
            <p className="text-sm text-joe-mid mb-6">
              Tag <strong className="text-joe-dark">@joecoffeecompany</strong> in your Instagram photos for a chance to be featured here.
            </p>
            <a href="https://www.instagram.com/joecoffeecompany/" target="_blank" rel="noreferrer"
              className="bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors">
              FOLLOW US
            </a>
          </div>
          {/* photo 3 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
          {/* photo 4 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
          {/* photo 5 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
          {/* photo 6 */}
          <div className="overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80" alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"/>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />

    </main>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-16 px-8 text-center" style={{ background: "#7dcfee" }}>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-joe-dark mb-3">Stay in the loop</h2>
      <p className="text-base text-joe-dark/80 mb-8">Be the first to know about fresh coffees, menu updates, and news from Joe.</p>
      {done ? (
        <p className="text-joe-dark font-bold text-lg">✓ Thank you for subscribing!</p>
      ) : (
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full text-joe-dark text-sm outline-none border-none shadow-sm"
          />
          <button
            onClick={() => { if (email.includes("@")) setDone(true); }}
            className="bg-joe-blue text-white px-12 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
          >
            SUBSCRIBE
          </button>
        </div>
      )}
    </section>
  );
}