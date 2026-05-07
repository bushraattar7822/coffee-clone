import heroImage from "../assets/hero.webp";
import newYorkImage from "../assets/newyork.webp";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, cityCollection } from "../data/products";

const cdn = (file) => `https://joecoffeecompany.com/cdn/shop/files/${file}`;

function Marquee() {
  const ref = useRef(null);

  const items = [
    {
      img: cdn("Pigeon-on-cup.jpg?v=1757511437&width=533"),
      label: "Commitment",
    },
    {
      img: cdn("bench-scene.jpg?v=1757511437&width=533"),
      label: "Community",
    },
    {
      img: cdn("Joe-Coffee-Cup-2.jpg?v=1757511437&width=533"),
      label: "Curiosity",
    },
    {
      img: cdn("father-daughter.jpg?v=1757511437&width=533"),
      label: "Craft",
    },
  ];

  const repeated = [...items, ...items, ...items, ...items];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-white py-8 border-y border-gray-100"
    >
      <motion.div
        className="flex items-center gap-12"
        style={{ width: "max-content", x }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0">
            <span className="text-[30px] lg:text-[38px] font-black text-joe-dark tracking-tight leading-none">
              {item.label}
            </span>

            <img
              src={item.img}
              alt={item.label}
              className="w-[66px] h-[66px] lg:w-[74px] lg:h-[74px] object-cover rounded-sm"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const valueSlides = [
  {
    label: "IT'S NOT ONLY ABOUT THE COFFEE",
    title: "Community Comes First",
    text: "Joe is more than coffee. Each cafe reflects its neighborhood, celebrating diversity and creating a place where everyone feels welcome. From farmers to baristas to guests, the focus has always been on people and the connections they make.",
    img: cdn("227A9858.jpg?v=1757512449&width=900"),
  },
  {
    label: "CRAFT WITHOUT PRETENSE",
    title: "Coffee With Integrity",
    text: "Joe takes coffee seriously but never in a way that feels exclusive. Every step, from sourcing with long-term partners to roasting in Long Island City, is done with care and quality.",
    img: cdn("DSC00947.jpg?v=1757512483&width=900"),
  },
  {
    label: "EVOLVING WITH PURPOSE",
    title: "Where Everyone's a Regular",
    text: "For more than 20 years Joe has gone from a single cafe in the Village to a link of cafes across New York. Each new step carries the same focus on quality, connection, and hospitality.",
    img: cdn("DSC01239_1.jpg?v=1757512525&width=900"),
  },
];

function ValuesSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % valueSlides.length);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const imageVariants = {
    enter: (d) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.05, ease: "easeInOut" },
    },
    exit: (d) => ({
      y: d > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.85, ease: "easeInOut" },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 24 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -18,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] bg-white">
      <div className="relative overflow-hidden min-h-[420px] lg:min-h-[620px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            src={valueSlides[current].img}
            alt={valueSlides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="relative flex items-center px-10 lg:px-20 py-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-[520px]"
          >
            <p className="text-[12px] font-black tracking-widest uppercase text-joe-mid mb-5">
              {valueSlides[current].label}
            </p>

            <h2 className="text-[42px] lg:text-[56px] font-black text-joe-dark leading-[0.95] mb-7">
              {valueSlides[current].title}
            </h2>

            <p className="text-[16px] text-joe-mid font-semibold leading-7">
              {valueSlides[current].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {valueSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-joe-dark scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSlider() {
  const { addToCart } = useCart();
  const [start, setStart] = useState(0);
  const visible = 4;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () =>
    setStart((s) => Math.min(products.length - visible, s + 1));

  return (
    <section className="px-8 lg:px-16 py-16 bg-white">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-joe-dark">
          Meet Our Coffees
        </h2>

        <Link
          to="/collections/shop-all"
          className="text-[12px] font-bold tracking-widest uppercase text-joe-dark border-b-2 border-joe-dark pb-0.5 hover:text-joe-blue hover:border-joe-blue transition-colors"
        >
          SEE MORE
        </Link>
      </div>

      <div className="relative">
        {start > 0 && (
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-joe-blue hover:text-white hover:border-joe-blue transition-all"
          >
            <ChevronLeft size={18} />
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
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-2 left-2 bg-joe-dark text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">
                    Sold out
                  </span>

                  {product.sub.includes("Save") && (
                    <span className="absolute top-8 left-2 bg-joe-blue text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">
                      Subscribe & Save
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-joe-dark mb-1">
                  {product.name}
                </p>
                <p className="text-sm text-joe-mid">
                  From ${product.price.toFixed(2)}
                </p>
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

        {start + visible < products.length && (
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-joe-blue hover:text-white hover:border-joe-blue transition-all"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
}

const featureCards = [
  {
    title: "Joe Coffee at the TWA Hotel",
    desc: "Located inside the iconic TWA Hotel at JFK, this cafe blends mid-century design with modern convenience.",
    cta: "SEE YOU SOON",
    img: cdn("227A9827.jpg?v=1757256129&width=900"),
    path: "/pages/locations",
  },
  {
    title: "Catering & Events",
    desc: "From office meetings to celebrations, we'll bring specialty coffee service to match the moment.",
    cta: "LEARN MORE",
    img: cdn("joe-coffee-espresso-tamp-step-4_54a6d2f7-e168-4708-8d03-ce406d27b64f.gif?v=1757366218&width=900"),
    path: "/pages/catering-events",
  },
  {
    title: "Classes & Experiences",
    desc: "Whether you're a coffee professional or simply curious to learn something new, our programs cover everything from barista fundamentals to advanced techniques.",
    cta: "BOOK A CLASS",
    img: cdn("dancing_watermarked_1.jpg?v=1757513706&width=900"),
    path: "/pages/home-consumers",
  },
  {
    title: "Joe Humanity",
    desc: "Guided by our values, we're committed to equity, inclusion, and community care across every part of our work.",
    cta: "READ OUR STATEMENT",
    img: cdn("Joe_Coffee_Tube.jpg?v=1758200148&width=900"),
    path: "/pages/wholesale",
  },
];

function FeatureCards() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {featureCards.map((card) => (
        <Link
          key={card.title}
          to={card.path}
          className="relative overflow-hidden group min-h-[500px]"
        >
          <img
            src={card.img}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.58]"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-10">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-snug">
              {card.title}
            </h3>

            <p className="text-sm text-white/90 font-semibold leading-relaxed mb-6 max-w-sm">
              {card.desc}
            </p>

            <span className="inline-flex bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors self-start">
              {card.cta}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{ height: "88vh", background: "#a08eb5" }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </section>

      <section className="bg-joe-blue text-white text-center py-10 px-8">
        <p className="text-[11px] font-bold tracking-widest uppercase mb-2">
          DOWNLOAD THE JOE COFFEE APP
        </p>
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-6">
          Skip the Line & Order Online
        </h3>
        <a
          href="https://order.thanx.com/joecoffee"
          className="inline-block bg-joe-dark text-white px-10 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-black transition-colors"
        >
          ORDER NOW
        </a>
      </section>

      <ProductSlider />

      <section className="bg-joe-blue text-white px-8 lg:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center">
          <img
            src="https://joecoffeecompany.com/cdn/shop/files/The_Regular_Coffee_Club.png?v=1776999362&width=720"
            alt="The Regular Coffee Club"
            className="max-w-[420px] w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Wanna be a Regular?
          </h2>
          <p className="text-base font-light leading-relaxed mb-6 opacity-90">
            Join the Regular Coffee Club and keep Joe Coffee on repeat. Pick
            your favorite, choose your cadence, and we'll make sure it shows up
            fresh, right when you need it.
          </p>
          <Link
            to="/collections/shop-all"
            className="inline-block text-white border-b-2 border-white pb-0.5 text-[12px] font-bold tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            JOIN THE CLUB
          </Link>
        </div>
      </section>

      <Marquee />
      <ValuesSlideshow />
      <FeatureCards />

      <section className="px-8 lg:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.7fr] gap-16 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-joe-mid mb-4">
              ONE CITY COLLECTION
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-joe-dark leading-tight mb-5">
              Rooted in New York
            </h2>
            <p className="text-base text-joe-mid leading-relaxed mb-8 max-w-md">
              The One City Collection is a tribute to the city we call home.
              Roasted to please every palate, these coffees are designed to be
              as versatile and dynamic as New York itself.
            </p>
            <Link
              to="/collections/shop-all"
              className="inline-block bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
            >
              SHOP NOW
            </Link>

            <div className="mt-10">
              <img
                src={newYorkImage}
                alt="New York"
                className="w-full h-[750px] rounded-sm object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {cityCollection.map((p) => (
              <div
                key={p.id}
                className="w-full max-w-[260px] mx-auto border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white overflow-hidden"
              >
                <div className="relative w-full h-[240px] bg-joe-blue overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-2 left-2 bg-joe-dark text-white text-[9px] font-bold px-2 py-1 uppercase">
                    Sold out
                  </span>

                  <span className="absolute top-10 left-2 bg-joe-blue text-white text-[9px] font-bold px-2 py-1 uppercase">
                    Subscribe & Save
                  </span>
                </div>

                <div className="p-4 text-center">
                  <p className="text-xl font-black text-joe-dark mb-2">
                    {p.name}
                  </p>
                  <p className="text-base text-joe-mid font-medium">
                    From ${p.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstagramSection />
      <NewsletterSection />
    </main>
  );
}

function InstagramSection() {
  const images = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80",
    "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&q=80",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80",
  ];

  return (
    <section className="bg-white">
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ gridTemplateRows: "1fr 1fr" }}
      >
        {images.slice(0, 2).map((img) => (
          <div key={img} className="overflow-hidden aspect-square">
            <img
              src={img}
              alt="Instagram"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}

        <div className="bg-gray-50 aspect-square flex flex-col items-center justify-center text-center p-6 col-span-1 row-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2">
          <p className="text-[11px] font-bold tracking-widest uppercase text-joe-mid mb-2">
            FOLLOW US
          </p>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-joe-dark mb-4">
            On instagram
          </h3>
          <p className="text-sm text-joe-mid mb-6">
            Tag <strong className="text-joe-dark">@joecoffeecompany</strong> in
            your Instagram photos for a chance to be featured here.
          </p>
          <a
            href="https://www.instagram.com/joecoffeecompany/"
            target="_blank"
            rel="noreferrer"
            className="bg-joe-blue text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
          >
            FOLLOW US
          </a>
        </div>

        {images.slice(2).map((img) => (
          <div key={img} className="overflow-hidden aspect-square">
            <img
              src={img}
              alt="Instagram"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-16 px-8 text-center" style={{ background: "#7dcfee" }}>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-joe-dark mb-3">
        Stay in the loop
      </h2>
      <p className="text-base text-joe-dark/80 mb-8">
        Be the first to know about fresh coffees, menu updates, and news from
        Joe.
      </p>

      {done ? (
        <p className="text-joe-dark font-bold text-lg">
          Thank you for subscribing!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full text-joe-dark text-sm outline-none border-none shadow-sm"
          />
          <button
            onClick={() => {
              if (email.includes("@")) setDone(true);
            }}
            className="bg-joe-blue text-white px-12 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
          >
            SUBSCRIBE
          </button>
        </div>
      )}
    </section>
  );
}
