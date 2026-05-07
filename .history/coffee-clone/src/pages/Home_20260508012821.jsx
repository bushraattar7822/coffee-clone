import heroImage from "../assets/hero.webp";
import newYorkImage from "../assets/newyork.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, cityCollection } from "../data/products";

function Marquee() {
  const items = [
    {
      img: "https://joecoffeecompany.com/cdn/shop/files/Pigeon-on-cup.jpg?v=1757511437&width=533",
      label: "Commitment",
      height: "h-[78px]",
    },
    {
      img: "https://joecoffeecompany.com/cdn/shop/files/bench-scene.jpg?v=1757511437&width=533",
      label: "Community",
      height: "h-[120px]",
    },
    {
      img: "https://joecoffeecompany.com/cdn/shop/files/Joe-Coffee-Cup-2.jpg?v=1757511437&width=533",
      label: "Curiosity",
      height: "h-[100px]",
    },
    {
      img: "https://joecoffeecompany.com/cdn/shop/files/father-daughter.jpg?v=1757511437&width=533",
      label: "Craft",
      height: "h-[120px]",
    },
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="joe-marquee-wrap overflow-hidden bg-white py-10">
      <style>
        {`
          @keyframes joe-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }

          .joe-marquee-track {
            animation: joe-marquee 60s linear infinite;
          }

          .joe-marquee-wrap:hover .joe-marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="joe-marquee-track flex w-max items-center gap-[44px]">
        {repeated.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-[44px]">
            <span className="text-[40px] font-black leading-none text-joe-dark">
              {item.label}
            </span>

            <img
              src={item.img}
              alt=""
              className={`${item.height} w-auto object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: (d) => ({
      y: d > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
      <div className="relative flex items-center overflow-hidden bg-white px-12 py-20 lg:px-20">
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
            <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-joe-mid">
              {valueSlides[current].label}
            </p>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-joe-dark lg:text-5xl">
              {valueSlides[current].title}
            </h2>

            <p className="max-w-md text-base leading-relaxed text-joe-mid">
              {valueSlides[current].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          {valueSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "bg-joe-dark" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-[400px] overflow-hidden lg:min-h-0">
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
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
    <section className="bg-white px-8 py-16 lg:px-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold text-joe-dark lg:text-4xl">
          Meet Our Coffees
        </h2>

        <Link
          to="/shop"
          className="border-b-2 border-joe-dark pb-0.5 text-[12px] font-bold uppercase tracking-widest text-joe-dark transition-colors hover:border-joe-blue hover:text-joe-blue"
        >
          See More
        </Link>
      </div>

      <div className="relative">
        {start > 0 && (
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow transition-all hover:border-joe-blue hover:bg-joe-blue hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <div className="grid grid-cols-2 gap-4 overflow-hidden lg:grid-cols-4">
          {products.slice(start, start + visible).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative mb-3 aspect-square overflow-hidden bg-joe-cream">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 bg-joe-dark px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Sold out
                  </span>

                  {product.sub.includes("Save") && (
                    <span className="absolute left-2 top-8 bg-joe-blue px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Subscribe & Save
                    </span>
                  )}
                </div>

                <p className="mb-1 text-sm font-semibold text-joe-dark">
                  {product.name}
                </p>
                <p className="text-sm text-joe-mid">
                  From ${product.price.toFixed(2)}
                </p>
              </Link>

              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full border border-joe-dark py-2 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-joe-dark hover:text-white"
              >
                Choose Options
              </button>
            </motion.div>
          ))}
        </div>

        {start + visible < products.length && (
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow transition-all hover:border-joe-blue hover:bg-joe-blue hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
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
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </section>

      <section className="bg-joe-blue px-8 py-10 text-center text-white">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest">
          Download The Joe Coffee App
        </p>
        <h3 className="mb-6 text-3xl font-extrabold lg:text-4xl">
          Skip the Line & Order Online
        </h3>
        <a
          href="#"
          className="inline-block rounded-full bg-joe-dark px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-black"
        >
          Order Now
        </a>
      </section>

      <ProductSlider />

      <section className="bg-[#118acb] px-8 py-10 text-white lg:px-20">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full justify-center lg:w-1/3">
            <img
              src="https://joecoffeecompany.com/cdn/shop/files/The_Regular_Coffee_Club.png?v=1776999362&width=720"
              alt="Wanna be a Regular?"
              className="h-auto w-full max-w-[355px]"
            />
          </div>

          <div className="flex-1 text-left">
            <h2 className="mb-4 text-[34px] font-black leading-tight lg:text-[42px]">
              Wanna be a Regular?
            </h2>

            <p className="mb-6 max-w-[680px] text-[16px] font-semibold leading-7 text-white/90">
              Join the Regular Coffee Club and keep Joe Coffee on repeat. Pick
              your favorite, choose your cadence, and we’ll make sure it shows
              up fresh, right when you need it.
            </p>

            <Link
              to="/pages/the-regular-coffee-club"
              className="inline-block border-b-2 border-white pb-1 text-[12px] font-black uppercase tracking-widest text-white transition-opacity hover:opacity-70"
            >
              Join The Club
            </Link>
          </div>
        </div>
      </section>

      <Marquee />
      <ValuesSlideshow />

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
          <div
            key={card.title}
            className="group relative overflow-hidden"
            style={{ minHeight: "500px" }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.55)" }}
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <h3 className="mb-3 text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                {card.title}
              </h3>
              <p className="mb-6 max-w-sm text-sm font-light leading-relaxed text-white/85">
                {card.desc}
              </p>
              <a
                href="#"
                className="inline-block self-start rounded-full bg-joe-blue px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600"
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white px-8 py-20 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.5fr_0.7fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-joe-mid">
              One City Collection
            </p>
            <h2 className="mb-5 text-4xl font-extrabold leading-tight text-joe-dark lg:text-5xl">
              Rooted in New York
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-joe-mid">
              The One City Collection is a tribute to the city we call home.
              Roasted to please every palate, these coffees are designed to be
              as versatile and dynamic as New York itself.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-joe-blue px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600"
            >
              Shop Now
            </a>

            <div className="mt-10">
              <img
                src={newYorkImage}
                alt="New York"
                className="h-[750px] w-full rounded-sm object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {cityCollection.map((p) => (
              <div
                key={p.id}
                className="group mx-auto w-full max-w-[260px] cursor-pointer overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-[240px] w-full overflow-hidden bg-joe-blue">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 bg-joe-dark px-2 py-1 text-[9px] font-bold uppercase text-white">
                    Sold out
                  </span>

                  <span className="absolute left-2 top-10 bg-joe-blue px-2 py-1 text-[9px] font-bold uppercase text-white">
                    Subscribe & Save
                  </span>
                </div>

                <div className="p-4 text-center">
                  <p className="mb-2 text-xl font-black text-joe-dark">
                    {p.name}
                  </p>
                  <p className="text-base font-medium text-joe-mid">
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
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80",
    "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&q=80",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
  ];

  return (
    <section className="bg-white">
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ gridTemplateRows: "1fr 1fr" }}
      >
        {images.slice(0, 2).map((img) => (
          <div key={img} className="aspect-square overflow-hidden">
            <img
              src={img}
              alt="insta"
              className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}

        <div className="col-span-1 row-span-1 flex aspect-square flex-col items-center justify-center bg-gray-50 p-6 text-center lg:col-start-3 lg:row-span-2 lg:row-start-1">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-joe-mid">
            Follow Us
          </p>
          <h3 className="mb-4 text-3xl font-extrabold text-joe-dark lg:text-4xl">
            On instagram
          </h3>
          <p className="mb-6 text-sm text-joe-mid">
            Tag <strong className="text-joe-dark">@joecoffeecompany</strong> in
            your Instagram photos for a chance to be featured here.
          </p>
          <a
            href="https://www.instagram.com/joecoffeecompany/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-joe-blue px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600"
          >
            Follow Us
          </a>
        </div>

        {images.slice(2).map((img) => (
          <div key={img} className="aspect-square overflow-hidden">
            <img
              src={img}
              alt="insta"
              className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
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
    <section
      className="px-8 py-16 text-center"
      style={{ background: "#7dcfee" }}
    >
      <h2 className="mb-3 text-3xl font-extrabold text-joe-dark lg:text-4xl">
        Stay in the loop
      </h2>
      <p className="mb-8 text-base text-joe-dark/80">
        Be the first to know about fresh coffees, menu updates, and news from
        Joe.
      </p>

      {done ? (
        <p className="text-lg font-bold text-joe-dark">
          Thank you for subscribing!
        </p>
      ) : (
        <div className="mx-auto flex max-w-md flex-col items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full border-none px-6 py-4 text-sm text-joe-dark shadow-sm outline-none"
          />
          <button
            onClick={() => {
              if (email.includes("@")) setDone(true);
            }}
            className="rounded-full bg-joe-blue px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600"
          >
            Subscribe
          </button>
        </div>
      )}
    </section>
  );
}
