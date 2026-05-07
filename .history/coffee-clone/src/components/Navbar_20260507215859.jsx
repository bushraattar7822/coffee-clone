// Navbar.jsx
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

import logo from "../assets/logo.webp";
import hero from "../assets/hero.webp";
import newyork from "../assets/newyork.webp";
import walking from "../assets/walking.webp";
import bench from "../assets/bench.webp";

const menuData = {
  SHOP: {
    type: "shop",
    product: {
      img: hero,
      title: "Build Your Own Coffee Bundle",
      price: "From $33.00",
    },
  },
  CLASSES: {
    type: "cards",
    title: "CLASSES",
    links: ["Public Classes", "Professional Certification", "Private & Corporate Events"],
    cards: [
      { img: bench, label: "UPCOMING CLASSES" },
      { img: newyork, label: "PROFESSIONAL TRAINING" },
    ],
  },
  CATERING: {
    type: "cards",
    title: "CATERING",
    links: ["Our Services", "Joe 2 Go", "Residencies"],
    cards: [
      { img: hero, label: "CATER WITH JOE" },
      { img: newyork, label: "OUR SERVICES" },
    ],
  },
  LOCATIONS: {
    type: "locations",
    cards: [
      { img: walking, title: "Visit Joe at the TWA Hotel" },
      { img: hero, title: "Order Local Pick Up" },
    ],
  },
  WHOLESALE: {
    type: "cards",
    title: "WHOLESALE",
    links: ["Coffee Program", "Coffee Services", "Education & Training", "Proudly Serving Program"],
    cards: [
      { img: hero, label: "OUR COFFEE PROGRAM" },
      { img: newyork, label: "OUR TECH SERVICES" },
    ],
  },
  DISCOVER: {
    type: "discover",
    cards: [
      { img: walking, label: "HUMANITIES STATEMENT" },
      { img: bench, label: "WE'RE HIRING" },
    ],
  },
};

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[70] border-b border-[#dedede] bg-white">
      <div className="relative h-[69px] px-[58px]">
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
          <div className="hidden h-full items-center gap-[36px] lg:flex">
            <button className="mr-[70px] text-[#202326]">
              <Search size={25} strokeWidth={1.7} />
            </button>

            <MegaItem label="SHOP" />
            <MegaItem label="CLASSES" />
            <MegaItem label="CATERING" />
          </div>

          <Link to="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Joe Coffee"
              className="h-[34px] w-auto object-contain"
            />
          </Link>

          <div className="hidden h-full items-center justify-end gap-[38px] lg:flex">
            <MegaItem label="LOCATIONS" />
            <MegaItem label="WHOLESALE" />
            <MegaItem label="DISCOVER" />

            <button className="text-[#202326]">
              <User size={24} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="relative text-[#202326]"
            >
              <ShoppingBag size={23} strokeWidth={1.6} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#118acb] text-[10px] font-black text-white">
                  {count}
                </span>
              )}
            </button>
          </div>

          <div className="flex justify-end lg:hidden">
            <button
              className="text-[#202326]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#dedede] bg-white px-6 py-4 lg:hidden">
          {Object.keys(menuData).map((item) => (
            <Link
              key={item}
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#dedede] py-4 text-[15px] font-black text-[#24282a]"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function MegaItem({ label }) {
  return (
    <div className="group flex h-full items-center">
      <button className="flex h-full items-center gap-1 border-b border-transparent text-[15px] font-black uppercase tracking-[-0.03em] text-[#24282a] group-hover:border-[#24282a]">
        {label}
        <ChevronDown
          size={15}
          strokeWidth={2.4}
          className="transition-transform duration-150 group-hover:rotate-180"
        />
      </button>

      <div className="invisible absolute left-0 top-full w-full bg-white opacity-0 group-hover:visible group-hover:opacity-100">
        <MegaPanel data={menuData[label]} />
      </div>
    </div>
  );
}

function MegaPanel({ data }) {
  if (data.type === "shop") return <ShopMega product={data.product} />;
  if (data.type === "locations") return <LocationsMega cards={data.cards} />;
  if (data.type === "discover") return <DiscoverMega cards={data.cards} />;
  return <CardsMega data={data} />;
}

function ShopMega({ product }) {
  return (
    <div className="min-h-[498px] px-[65px] py-10">
      <div className="grid grid-cols-[277px_287px_287px_367px] gap-0">
        <div className="pr-10">
          <MenuBlock
            title="COFFEE"
            items={["Signature", "Seasonal", "Atlas", "One City", "Bundles", "Women Produced"]}
          />
          <MenuHeading title="SUBSCRIBE & SAVE" />
          <MenuHeading title="COLD BREW" />
          <MenuBlock
            title="SINGLE SERVE COFFEE"
            items={["Bruvi", "Cometeer", "Specialty Instant Coffee"]}
          />
        </div>

        <div className="border-l border-[#e3e3e3] px-10">
          <MenuBlock
            title="ROAST TYPE"
            items={["Light Roast", "Medium Roast", "Medium Dark Roast", "Dark Roast", "French Roast Dark"]}
          />
          <div className="h-[45px]" />
          <MenuBlock
            title="BREW GEAR"
            items={["Chemex", "Hario", "Kalita", "Acadia", "Bruvi", "Breville"]}
          />
        </div>

        <div className="border-l border-[#e3e3e3] px-10">
          <MenuBlock
            title="MERCHANDISE"
            items={["Gift Cards", "Tea & Cocoa", "Limited Time", "Mugs", "Apparel", "Sticker & Pins"]}
          />
          <div className="h-[45px]" />
          <MenuBlock
            title="REGION"
            items={["Central America", "South America", "Mexico", "Africa"]}
          />
        </div>

        <Link to="/shop" className="block">
          <div className="relative h-[365px] w-[367px] overflow-hidden bg-[#83d5df]">
            <span className="absolute left-3 top-3 z-10 bg-[#24282a] px-3 py-1 text-[14px] font-black text-white">
              Sold out
            </span>
            <img src={product.img} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="mt-5 text-[16px] font-black text-[#303437]">
            {product.title}
          </p>
          <p className="mt-2 text-[16px] font-black text-[#303437]">
            {product.price}
          </p>
        </Link>
      </div>
    </div>
  );
}

function CardsMega({ data }) {
  return (
    <div className="min-h-[390px] px-[65px] py-10">
      <div className="grid grid-cols-[300px_1fr_1fr] gap-[65px]">
        <div>
          <MenuHeading title={data.title} />
          <div className="space-y-[7px]">
            {data.links.map((item) => (
              <Link
                key={item}
                to="/shop"
                className="block text-[16px] font-black leading-[1.28] text-[#303437]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {data.cards.map((card) => (
          <ImageButtonCard key={card.label} img={card.img} label={card.label} />
        ))}
      </div>
    </div>
  );
}

function LocationsMega({ cards }) {
  const left = [
    "Flatiron",
    "Bergen St",
    "Governors Island",
    "Brooklyn Heights",
    "Dumbo",
    "Battery Maritime Building",
    "Westfield at WTC",
    "LaGuardia Place",
    "West Village",
    "13th Street",
    "Union Square West",
    "Pro Shop - W 21st Street",
  ];

  const right = [
    "Chelsea",
    "Bryant Park",
    "Grand Central: Graybar Passage",
    "Grand Central: Lower Level",
    "Long Island City Roastery Cafe",
    "W 68th & Columbus",
    "W 85th & Columbus",
    "Columbia Pulitzer Hall",
    "Columbia Dodge Hall",
    "Columbia Northwest Corner Building",
    "Columbia Business School",
    "TWA Hotel: John F. Kennedy International Airport",
  ];

  return (
    <div className="min-h-[430px] px-[65px] py-10">
      <div className="grid grid-cols-[260px_270px_1fr_1fr] gap-10">
        <div>
          <UnderlinedHeading title="SAME DAY ORDERING" />
          <UnderlinedHeading title="ALL LOCATIONS" />
          <LinkList items={left} />
        </div>

        <div className="border-l border-[#e3e3e3] pl-10 pt-[36px]">
          <LinkList items={right} />
        </div>

        {cards.map((card) => (
          <Link key={card.title} to="/shop" className="block">
            <img src={card.img} alt="" className="h-[296px] w-full object-cover" />
            <p className="mt-4 text-[16px] font-black text-[#303437]">
              {card.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DiscoverMega({ cards }) {
  return (
    <div className="min-h-[390px] px-[65px] py-10">
      <div className="grid grid-cols-[300px_1fr_1fr] gap-[65px]">
        <div>
          <MenuHeading title="PEOPLE" />
          <LinkList items={["We're Hiring", "Humanities"]} />
          <MenuHeading title="OUR STORY" />
          <MenuHeading title="LEARN" />
          <LinkList items={["Brew Guides", "Blog"]} />
          <MenuHeading title="CONTACT US" />
        </div>

        {cards.map((card) => (
          <ImageButtonCard key={card.label} img={card.img} label={card.label} />
        ))}
      </div>
    </div>
  );
}

function ImageButtonCard({ img, label }) {
  return (
    <Link to="/shop" className="relative block h-[309px] overflow-hidden">
      <img src={img} alt="" className="h-full w-full object-cover" />
      <span className="absolute bottom-[30px] left-1/2 flex h-[46px] min-w-[230px] -translate-x-1/2 items-center justify-center rounded-full bg-[#118acb] px-9 text-center text-[15px] font-black text-white">
        {label}
      </span>
    </Link>
  );
}

function MenuBlock({ title, items }) {
  return (
    <div className="mb-6">
      <MenuHeading title={title} />
      <LinkList items={items} />
    </div>
  );
}

function MenuHeading({ title }) {
  return (
    <h3 className="mb-3 text-[18px] font-black uppercase leading-tight text-[#303437]">
      {title}
    </h3>
  );
}

function UnderlinedHeading({ title }) {
  return (
    <h3 className="mb-[7px] w-fit border-b border-[#303437] text-[18px] font-black uppercase leading-tight text-[#303437]">
      {title}
    </h3>
  );
}

function LinkList({ items }) {
  return (
    <div className="space-y-[5px]">
      {items.map((item) => (
        <Link
          key={item}
          to="/shop"
          className="block text-[16px] font-black leading-[1.28] text-[#303437]"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
