Replace your `src/pages/Home.jsx` with this:

```jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accessibility, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, cityCollection } from "../data/products";

const valueSlides = [
  {
    kicker: "IT'S NOT ONLY ABOUT THE COFFEE",
    title: "Community Comes First",
    copy: "Joe is more than coffee. Each cafe reflects its neighborhood, celebrating diversity and creating a place where everyone feels welcome. From farmers to baristas to guests, the focus has always been on people and the connections they make.",
    img: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    kicker: "CRAFT WITHOUT PRETENSE",
    title: "Coffee With Integrity",
    copy: "Joe takes coffee seriously but never in a way that feels exclusive. Every step, from sourcing with long-term partners to roasting in Long Island City, is done with care and quality. The goal is to make excellent coffee approachable and genuine.",
    img: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    kicker: "EVOLVING WITH PURPOSE",
    title: "Where Everyone’s a Regular",
    copy: "For more than 20 years Joe has gone from a single cafe in the Village to a link of cafes across New York. Along the way we’ve expanded into catering, wholesale, and tech solutions. Each new step carries the same focus on quality, connection, and hospitality.",
    img: "https://images.unsplash.com/photo-1507915135761-41a0a222c709?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <AppBanner />
      <CoffeeSlider />
      <RegularClub />
      <ValuesMarquee />
      <ValuesScroll />
      <FeatureCards />
      <OneCity />
      <InstagramGrid />
      <Newsletter />

      <button className="accessibility-dot" aria-label="Accessibility">
        <Accessibility size={28} />
      </button>

      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}

function Hero() {
  return (
    <section
      className="hero-bg relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-10 text-center text-white"
      style={{
        background:
          "radial-gradient(circle at 12% 76%, #e6a18d 0 14%, transparent 15%), radial-gradient(circle at 44% 62%, #242744 0 16%, transparent 17%), radial-gradient(circle at 72% 40%, #e29587 0 16%, transparent 17%), linear-gradient(115deg, #9586cc 0%, #a98aca 34%, #db9a99 72%, #8d87c7 100%)",
      }}
    >
      <div className="relative z-10 w-full max-w-[850px]">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-[58px] font-black leading-[.78] tracking-tight lg:text-[74px]"
        >
          <div className="text-[.38em]">café</div>
          <div>fem</div>
          <div>inista</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mx-auto text-left font-black leading-tight"
        >
          <p className="text-[28px] lg:text-[42px]">
            <span className="line-through opacity-80">just a coffee</span> a statement of intent.
          </p>
          <p className="text-[46px] leading-none lg:text-[68px]">leadership by women</p>
          <p className="max-w-[780px] text-[22px] leading-snug lg:text-[30px]">
            who grow, harvest, invest, and transform. moving into feminist futures within coffee.
            profound positive change, courage curiosity, and collective power{" "}
            <span className="line-through opacity-80">an idea to agree with</span>
          </p>
          <p className="text-[50px] leading-none lg:text-[72px]">a movement to join</p>
        </motion.div>

        <Link to="/shop" className="mt-[-12px] inline-block border-b-2 border-white text-[13px] font-black">
          LEARN MORE & SHOP CAFÉ FEMINISTA COFFEE
        </Link>
      </div>
    </section>
  );
}

function AppBanner() {
  return (
    <section className="bg-[#138ec8] px-6 py-10 text-center text-white">
      <p className="mb-6 text-[15px] font-black">DOWNLOAD THE JOE COFFEE APP</p>
      <h2 className="mb-8 text-[34px] font-black lg:text-[42px]">Skip the Line & Order Online</h2>
      <a href="#" className="inline-flex min-w-[174px] justify-center rounded-full bg-[#20252b] px-8 py-3.5 text-[15px] font-black">
        ORDER NOW
      </a>
    </section>
  );
}

function CoffeeSlider() {
  const { addToCart } = useCart();
  const [start, setStart] = useState(0);
  const visible = 4;
  const shown = products.slice(start, start + visible);

  return (
    <section className="bg-white px-[50px] pb-14 pt-16">
      <div className="mb-8 flex items-start justify-between">
        <h2 className="text-[42px] font-black leading-none lg:text-[48px]">Meet Our Coffees</h2>
        <Link to="/shop" className="mt-2 border-b border-black text-[15px] font-black">SEE MORE</Link>
      </div>

      <div className="relative">
        {start > 0 && (
          <button className="absolute left-5 top-[42%] z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white shadow" onClick={() => setStart(start - 1)}>
            <ChevronLeft />
          </button>
        )}

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
          {shown.map((product) => (
            <article className="group relative pb-5" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="relative mb-4 aspect-square overflow-hidden bg-[#f4f4f4]">
                  <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 bg-[#20252b] px-2.5 py-1 text-[14px] font-black text-white">Sold out</span>
                  {product.sub?.includes("Save") && (
                    <span className="absolute left-3 top-11 bg-[#138ec8] px-2.5 py-1 text-[14px] font-black text-white">
                      Subscribe & Save
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="absolute bottom-4 left-4 right-4 rounded-full bg-white py-4 text-[14px] font-black"
                  >
                    CHOOSE OPTIONS
                  </button>
                </div>
                <h3 className="text-[16px] font-black">{product.name}</h3>
                <p className="mt-1 text-[16px] font-black">From ${product.price.toFixed(2)}</p>
              </Link>
            </article>
          ))}
        </div>

        {start + visible < products.length && (
          <button className="absolute right-5 top-[42%] z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white shadow" onClick={() => setStart(start + 1)}>
            <ChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}

function RegularClub() {
  return (
    <section className="grid items-center gap-12 bg-[#138ec8] px-[50px] py-20 text-white lg:grid-cols-[380px_1fr]">
      <div className="leading-none">
        <div className="font-serif text-[88px] font-black italic tracking-[-.08em]">The<br />Regular</div>
        <div className="-rotate-6 bg-[#8bd4e3] px-5 py-2 text-[26px] font-black">COFFEE CLUB</div>
      </div>
      <div>
        <h2 className="mb-6 text-[34px] font-black lg:text-[40px]">Wanna be a Regular?</h2>
        <p className="mb-8 max-w-[780px] text-[17px] font-black leading-relaxed">
          Join the Regular Coffee Club and keep Joe Coffee on repeat. Pick your favorite, choose your cadence, and we’ll make sure it shows up fresh, right when you need it.
        </p>
        <a href="#" className="border-b-2 border-white text-[16px] font-black">JOIN THE CLUB</a>
      </div>
    </section>
  );
}

function ValuesMarquee() {
  const values = ["Commitment", "Community", "Curiosity", "Craft"];
  const repeated = [...values, ...values, ...values, ...values];

  return (
    <section className="overflow-hidden bg-white py-10">
      <motion.div
        className="flex w-max items-center gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((label, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[#8bd4e3] text-4xl">☕</div>
            <span className="text-[42px] font-black">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function ValuesScroll() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("values-scroll");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
      setActive(Math.min(valueSlides.length - 1, Math.floor(progress * valueSlides.length)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slide = valueSlides[active];

  return (
    <section id="values-scroll" className="relative h-[180vh] bg-white">
      <div className="sticky top-[70px] grid min-h-[650px] grid-cols-1 items-center gap-12 overflow-hidden px-[100px] py-14 lg:grid-cols-2">
        <motion.div key={slide.title} initial={{ opacity: 0.2, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-6 text-[16px] font-black tracking-wide">{slide.kicker}</p>
          <h2 className="mb-8 max-w-[520px] text-[50px] font-black leading-[1.12] lg:text-[58px]">{slide.title}</h2>
          <p className="max-w-[520px] text-[17px] font-black leading-relaxed">{slide.copy}</p>
        </motion.div>

        <div className="relative h-[490px]">
          <motion.img
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            initial={{ opacity: 0.45, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-[7%] top-1/2 flex -translate-y-1/2 flex-col gap-3">
          {valueSlides.map((item, index) => (
            <button key={item.title} onClick={() => setActive(index)} className={`h-2 w-2 rounded-full ${index === active ? "bg-black" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="grid gap-8 bg-white px-[50px] lg:grid-cols-2">
      {[
        {
          title: "Joe Coffee at the TWA Hotel",
          text: "Located inside the iconic TWA Hotel at JFK, this cafe blends mid-century design with modern convenience.",
          cta: "SEE YOU SOON",
          img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Catering & Events",
          text: "From office meetings to celebrations, we’ll bring specialty coffee service to match the moment.",
          cta: "LEARN MORE",
          img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80",
        },
      ].map((card) => (
        <article className="group relative min-h-[565px] overflow-hidden text-white" key={card.title}>
          <img src={card.img} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <h2 className="mb-5 text-[34px] font-black">{card.title}</h2>
            <p className="mb-8 max-w-[560px] text-[16px] font-black leading-relaxed">{card.text}</p>
            <a className="inline-flex rounded-full bg-[#138ec8] px-10 py-4 text-[15px] font-black" href="#">{card.cta}</a>
          </div>
        </article>
      ))}
    </section>
  );
}

function OneCity() {
  return (
    <section className="grid gap-20 bg-white px-[100px] py-20 lg:grid-cols-[1fr_360px]">
      <div>
        <p className="mb-6 text-[17px] font-black tracking-wide">ONE CITY COLLECTION</p>
        <h2 className="mb-8 text-[56px] font-black leading-tight">Rooted in New York</h2>
        <p className="mb-9 max-w-[720px] text-[17px] font-black leading-relaxed">
          The One City Collection is a tribute to the city we call home. Roasted to please every palate, these coffees are designed to be as versatile and dynamic as New York itself.
        </p>
        <a href="#" className="inline-flex rounded-full bg-[#138ec8] px-10 py-4 text-[15px] font-black text-white">SHOP NOW</a>
        <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1100&q=80" alt="New York" className="mt-10 h-[330px] w-full max-w-[650px] object-cover" />
      </div>

      <div className="space-y-8">
        {cityCollection.map((product) => (
          <article className="bg-[#f4f4f4] p-4" key={product.id}>
            <img src={product.img} alt={product.name} className="mb-5 aspect-square w-full object-cover" />
            <h3 className="font-black">{product.name}</h3>
            <p className="mt-1 font-black">From ${product.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function InstagramGrid() {
  const pics = [
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section className="grid bg-white md:grid-cols-3">
      <div className="grid grid-cols-2">{pics.slice(0, 4).map((pic) => <img key={pic} src={pic} alt="" className="aspect-square h-full w-full object-cover" />)}</div>
      <div className="flex min-h-[450px] flex-col items-center justify-center px-10 text-center">
        <p className="mb-7 text-[17px] font-black">FOLLOW US</p>
        <h2 className="mb-8 text-[42px] font-black">On instagram</h2>
        <p className="mb-10 max-w-[420px] text-[16px] font-black leading-relaxed">Tag @joecoffeecompany in your Instagram photos for a chance to be featured here.</p>
        <a href="#" className="rounded-full bg-[#138ec8] px-10 py-4 text-[15px] font-black text-white">FOLLOW US</a>
      </div>
      <div className="grid grid-cols-2">{pics.slice(2, 6).map((pic) => <img key={pic} src={pic} alt="" className="aspect-square h-full w-full object-cover" />)}</div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-[#8bd4e3] px-6 py-14 text-center">
      <h2 className="mb-5 text-[34px] font-black">Stay in the loop</h2>
      <p className="mb-5 font-black">Be the first to know about fresh coffees, menu updates, and news from Joe.</p>
      {done ? (
        <p className="font-black">Thank you for subscribing!</p>
      ) : (
        <div className="mx-auto flex max-w-[530px] flex-col items-center gap-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 w-full rounded-full border border-gray-200 bg-white px-5 font-black outline-none" placeholder="Enter your email" />
          <button onClick={() => email.includes("@") && setDone(true)} className="rounded-full bg-[#138ec8] px-10 py-4 text-[15px] font-black text-white">SUBSCRIBE</button>
        </div>
      )}
    </section>
  );
}
```