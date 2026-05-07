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
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/70 mb-4"
          >Featured Collection</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="font-playfair text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6"
          >
            Cafè <em className="italic text-joe-gold">Feminista</em><br />Coffee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base text-white/80 font-light leading-relaxed mb-8 max-w-lg"
          >
            Celebrating women-produced coffees from farmers who are redefining the industry — one extraordinary cup at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/shop" className="bg-joe-blue text-white px-9 py-3.5 text-[11px] font-bold tracking-widest uppercase border-2 border-joe-blue hover:bg-transparent hover:text-white transition-all duration-300">
              Learn More & Shop
            </Link>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="w-px h-10 bg-white/40"
          />
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── APP BANNER ── */}
      <div className="bg-joe-cream border-b border-joe-light px-8 py-4 flex flex-wrap items-center justify-center gap-6">
        <p className="text-sm text-joe-dark font-medium tracking-wide">
          <strong>Download the Joe Coffee App</strong> — Skip the Line & Order Online
        </p>
        <a href="#" className="bg-joe-dark text-white px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-joe-blue transition-colors">
          Order Now
        </a>
      </div>

      {/* ── PRODUCTS ── */}
      <section className="px-8 lg:px-20 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-2">Our Coffees</p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-joe-dark">Meet Our Coffees</h2>
          </div>
          <Link to="/shop" className="text-[11px] font-semibold tracking-widest uppercase text-joe-dark border-b border-joe-dark pb-0.5 hover:text-joe-blue hover:border-joe-blue transition-colors">
            See More
          </Link>
        </div>
        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {products.slice(0, 6).map(product => (
            <motion.div key={product.id} variants={fadeUp} className="group cursor-pointer">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden bg-joe-cream aspect-square mb-3">
                  <img
                    src={product.img} alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-joe-blue text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-[13px] font-medium text-joe-dark leading-snug mb-1">{product.name}</p>
                <p className="text-[11px] text-joe-mid mb-1">{product.sub}</p>
                <p className="text-[13px] font-semibold text-joe-dark">From ${product.price.toFixed(2)}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 text-[10px] font-semibold tracking-widest uppercase text-joe-blue hover:text-joe-dark transition-colors"
              >
                Choose Options
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CLUB ── */}
      <section className="bg-joe-dark text-white grid grid-cols-1 lg:grid-cols-2">
        <div className="px-10 lg:px-20 py-20 flex flex-col justify-center">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-3">Subscription</p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold leading-tight mb-5">
            Wanna be a<br /><em className="italic text-joe-gold">Regular?</em>
          </h2>
          <p className="text-sm text-white/65 font-light leading-relaxed mb-8 max-w-md">
            Join the Regular Coffee Club and keep Joe Coffee on repeat. Pick your favorite, choose your cadence, and we'll make sure it shows up fresh, right when you need it.
          </p>
          <Link to="/shop" className="inline-block bg-joe-gold text-joe-dark px-9 py-3.5 text-[11px] font-bold tracking-widest uppercase hover:bg-yellow-600 transition-colors self-start">
            Join the Club
          </Link>
        </div>
        <div className="h-80 lg:h-auto">
          <img
            src="https://joecoffeecompany.com/cdn/shop/files/227A9934_3_889d3298-dd47-4431-9c0b-4b826d9c7d1a.jpg?v=1757982537"
            alt="Club" className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-joe-cream px-8 lg:px-20 py-20">
        <div className="text-center mb-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-3">Our Philosophy</p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-joe-dark mb-3">
            Commitment Community<br />Curiosity Craft
          </h2>
          <p className="text-joe-mid font-light italic font-playfair text-lg">it's not only about the coffee</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-joe-light">
          {[
            { num:"01", label:"Community", title:"Community Comes First", text:"Joe is more than coffee. Each cafe reflects its neighborhood, celebrating diversity and creating a place where everyone feels welcome. From farmers to baristas to guests, the focus has always been on people and the connections they make.", img:"https://joecoffeecompany.com/cdn/shop/files/CUPPING_21599.jpg?v=1757724799&width=360" },
            { num:"02", label:"Craft", title:"Coffee With Integrity", text:"Joe takes coffee seriously but never in a way that feels exclusive. Every step, from sourcing with long-term partners to roasting in Long Island City, is done with care and quality. The goal is to make excellent coffee approachable and genuine.", img:"https://joecoffeecompany.com/cdn/shop/files/OFFICAL_JOE_21709.jpg?v=1757724799&width=360" },
            { num:"03", label:"Curiosity", title:"Where Everyone's a Regular", text:"For more than 20 years Joe has grown from a single cafe in the Village to a network of cafes across New York. Each step carries the same focus on quality, connection, and hospitality that defines the cafe experience.", img:"https://joecoffeecompany.com/cdn/shop/files/111219_Joe_Coffee-046.jpg?v=1757725213&width=360" },
            { num:"04", label:"Commitment", title:"Craft Without Pretense", text:"We believe great coffee should be simple, honest, and joyful. Our commitment is to every person in the supply chain — from the farmers we partner with to the guest picking up their morning cup.", img:"https://joecoffeecompany.com/cdn/shop/files/Mulberry_27.jpg?v=1757725184&width=360" },
          ].map((v, i) => (
            <motion.div
              key={v.num}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 border border-joe-light ${i % 2 === 1 ? "bg-white" : ""}`}
            >
              <div className="p-10">
                <p className="font-playfair text-7xl font-semibold text-joe-light leading-none mb-4">{v.num}</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-blue mb-2">{v.label}</p>
                <h3 className="font-playfair text-xl font-semibold text-joe-dark mb-3">{v.title}</h3>
                <p className="text-sm text-joe-mid font-light leading-relaxed">{v.text}</p>
              </div>
              <img src={v.img} alt={v.title} className="w-full h-64 md:h-full object-cover"/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="grid grid-cols-1 lg:grid-cols-3">
        {[
          { label:"Locations", title:"Joe Coffee at the TWA Hotel", desc:"Located inside the iconic TWA Hotel at JFK, this cafe blends mid-century design with modern convenience.", cta:"See You Soon", img:"https://joecoffeecompany.com/cdn/shop/files/CUPPING_21599.jpg?v=1757724799" },
          { label:"Events", title:"Catering & Events", desc:"From office meetings to celebrations, we'll bring specialty coffee service to match the moment.", cta:"Learn More", img:"https://joecoffeecompany.com/cdn/shop/files/111219_Joe_Coffee-046.jpg?v=1757725213" },
          { label:"Education", title:"Classes & Experiences", desc:"Whether you're a coffee professional or simply curious, our programs cover everything from barista fundamentals to advanced techniques.", cta:"Book a Class", img:"https://joecoffeecompany.com/cdn/shop/files/OFFICAL_JOE_21709.jpg?v=1757724799" },
        ].map(card => (
          <div key={card.title} className="relative overflow-hidden cursor-pointer group">
            <img src={card.img} alt={card.title}
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ filter: "brightness(0.6)" }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-white/70 mb-2">{card.label}</p>
              <h3 className="font-playfair text-2xl font-semibold text-white mb-3 leading-snug">{card.title}</h3>
              <p className="text-sm text-white/75 font-light leading-relaxed mb-5">{card.desc}</p>
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-white border-b border-white/50 pb-0.5 self-start hover:border-white transition-colors">
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── ONE CITY ── */}
      <section className="bg-joe-dark text-white px-8 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-joe-gold bg-joe-gold/15 px-3.5 py-1.5 inline-block mb-5">
              ONE CITY Collection
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
              Rooted in<br />New York
            </h2>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-8 max-w-md">
              The One City Collection is a tribute to the city we call home. Roasted to please every palate, these coffees are designed to be as versatile and dynamic as New York itself.
            </p>
            <Link to="/shop" className="inline-block bg-joe-gold text-joe-dark px-9 py-3.5 text-[11px] font-bold tracking-widest uppercase hover:bg-yellow-600 transition-colors">
              Shop Now
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {cityCollection.map(p => (
              <div key={p.id} className="text-center cursor-pointer group" onClick={() => addToCart(products.find(x=>x.id===p.id))}>
                <div className="aspect-square overflow-hidden bg-white/5 mb-3">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <p className="text-xs font-medium text-white mb-1">{p.name}</p>
                <p className="text-xs text-white/50">From ${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="px-8 lg:px-20 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-joe-mid mb-1">Follow Along</p>
            <p className="text-sm text-joe-mid">Tag <strong className="text-joe-dark">@joecoffeecompany</strong> for a chance to be featured</p>
          </div>
          <a href="https://www.instagram.com/joecoffeecompany/" target="_blank" rel="noreferrer"
            className="text-[11px] font-semibold tracking-widest uppercase text-joe-dark border-b border-joe-dark pb-0.5 hover:text-joe-blue hover:border-joe-blue transition-colors">
            Follow Us
          </a>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
          {[
            "https://joecoffeecompany.com/cdn/shop/files/CUPPING_21599.jpg?v=1757724799",
            "https://joecoffeecompany.com/cdn/shop/files/OFFICAL_JOE_21709.jpg?v=1757724799",
            "https://joecoffeecompany.com/cdn/shop/files/111219_Joe_Coffee-046.jpg?v=1757725213",
            "https://joecoffeecompany.com/cdn/shop/files/Mulberry_27.jpg?v=1757725184",
            "https://joecoffeecompany.com/cdn/shop/files/227A9934_3_889d3298-dd47-4431-9c0b-4b826d9c7d1a.jpg?v=1757982537",
            "https://joecoffeecompany.com/cdn/shop/files/Build-Your-Own-Coffee-Box.gif?v=1764009102",
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden cursor-pointer group">
              <img src={src} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}