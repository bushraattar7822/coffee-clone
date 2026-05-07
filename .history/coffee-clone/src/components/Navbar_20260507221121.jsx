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

const images = {
  bundle:
    "https://joecoffeecompany.com/cdn/shop/files/Build-Your-Own-Coffee-Box.gif?v=1764009102&width=533",

  classesLeft:
    "https://joecoffeecompany.com/cdn/shop/files/Joe_Coffee_Tube.jpg?v=1758200148&width=533",
  classesRight:
    "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-classes-espresso-workshop-960x720.jpg?v=1757269419&width=533",

  cateringLeft:
    "https://joecoffeecompany.com/cdn/shop/files/Box_Coffee.jpg?v=1756169010&width=533",
  cateringRight:
    "https://joecoffeecompany.com/cdn/shop/files/SnapInsta.to_449114301_1025039375907398_2555987533984262244_n.jpg?v=1756172335&width=533",

  locationLeft:
    "https://joecoffeecompany.com/cdn/shop/files/Joe_Coffee_Tube.jpg?v=1758200148&width=533",
  locationRight:
    "https://joecoffeecompany.com/cdn/shop/files/ezgif.com-gif-maker_15.gif?v=1757984051&width=533",

  wholesaleLeft:
    "https://joecoffeecompany.com/cdn/shop/files/Retail_Bags_3.jpg?v=1757270604&width=533",
  wholesaleRight:
    "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-classes-espresso-workshop-960x720.jpg?v=1757269419&width=533",

  discoverLeft:
    "https://joecoffeecompany.com/cdn/shop/files/227A9827.jpg?v=1757256129&width=533",
  discoverRight:
    "https://joecoffeecompany.com/cdn/shop/files/Joe_Amsterdam-80_2.jpg?v=1757269438&width=533",
};

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink =
    "px-5 h-20 flex items-center gap-2 text-[14px] font-extrabold tracking-wide uppercase text-white hover:text-white/75 transition-all duration-300 cursor-pointer whitespace-nowrap";

  return (
    <nav className="sticky top-0 z-50 relative" style={{ background: "#118ACB" }}>
      <div className="relative flex items-center justify-between px-10 h-20">
        <div className="hidden lg:flex items-center">
          <button className={`${navLink} group relative`}>
            <Search size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Search
            </span>
          </button>

          <MegaNav label="SHOP" />
          <MegaNav label="CLASSES" />
          <MegaNav label="CATERING" />
        </div>

        <Link to="/" className="absolute left-[46.7%] -translate-x-1/2 flex items-center">
          <span
            className="text-white font-black text-[42px] leading-none"
            style={{ fontFamily: "serif", letterSpacing: "-2px" }}
          >
            JoeCoffee
          </span>
        </Link>

        <div className="hidden lg:flex items-center">
          <MegaNav label="LOCATIONS" />
          <MegaNav label="WHOLESALE" />
          <MegaNav label="DISCOVER" />

          <button className={`${navLink} group relative`}>
            <User size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Account
            </span>
          </button>

          <button className={`${navLink} relative group`} onClick={() => setIsOpen(true)}>
            <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[11px] font-bold tracking-widest uppercase text-white transition-opacity">
              Cart
            </span>

            {count > 0 && (
              <span className="absolute top-5 right-3 bg-white text-joe-blue text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold">
                {count}
              </span>
            )}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button className="text-white p-2" onClick={() => setIsOpen(true)}>
            <ShoppingBag size={22} />
          </button>

          <button className="text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-joe-blue border-t border-white/20 px-6 py-4 flex flex-col gap-2">
          {["Shop", "Classes", "Catering", "Locations", "Wholesale", "Discover"].map((item) => (
            <Link
              key={item}
              to="/shop"
              className="text-white font-bold text-sm tracking-widest uppercase py-3 border-b border-white/20"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function MegaNav({ label }) {
  return (
    <div className="group h-20 flex items-center">
      <button className="px-5 h-20 flex items-center gap-1 text-[14px] font-extrabold tracking-wide uppercase text-white hover:text-white/75 transition-all duration-300">
        {label}
        <ChevronDown size={15} className="group-hover:rotate-180 transition-transform" />
      </button>

      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-20 w-full bg-white text-[#24282a] shadow-xl border-t border-gray-200 z-50">
        <MegaContent label={label} />
      </div>
    </div>
  );
}

function MegaContent({ label }) {
  if (label === "SHOP") return <ShopMega />;
  if (label === "LOCATIONS") return <LocationsMega />;
  if (label === "DISCOVER") return <DiscoverMega />;

  const data = {
    CLASSES: {
      title: "CLASSES",
      links: ["Public Classes", "Professional Certification", "Private & Corporate Events"],
      cards: [
        { image: images.classesLeft, button: "UPCOMING CLASSES" },
        { image: images.classesRight, button: "PROFESSIONAL TRAINING" },
      ],
    },
    CATERING: {
      title: "CATERING",
      links: ["Our Services", "Joe 2 Go", "Residencies"],
      cards: [
        { image: images.cateringLeft, button: "CATER WITH JOE" },
        { image: images.cateringRight, button: "OUR SERVICES" },
      ],
    },
    WHOLESALE: {
      title: "WHOLESALE",
      links: ["Coffee Program", "Coffee Services", "Education & Training", "Proudly Serving Program"],
      cards: [
        { image: images.wholesaleLeft, button: "OUR COFFEE PROGRAM" },
        { image: images.wholesaleRight, button: "OUR TECH SERVICES" },
      ],
    },
  }[label];

  return (
    <div className="px-[65px] py-10 min-h-[390px] grid grid-cols-[300px_1fr_1fr] gap-[65px]">
      <div>
        <Heading>{data.title}</Heading>
        <LinkList items={data.links} />
      </div>

      {data.cards.map((card) => (
        <ImageButton key={card.button} image={card.image} button={card.button} />
      ))}
    </div>
  );
}

function ShopMega() {
  return (
    <div className="px-[65px] py-10 min-h-[498px] grid grid-cols-[277px_287px_287px_367px] gap-0">
      <div className="pr-10">
        <Block title="COFFEE" items={["Signature", "Seasonal", "Atlas", "One City", "Bundles", "Women Produced"]} />
        <Heading>SUBSCRIBE & SAVE</Heading>
        <Heading>COLD BREW</Heading>
        <Block title="SINGLE SERVE COFFEE" items={["Bruvi", "Cometeer", "Specialty Instant Coffee"]} />
      </div>

      <div className="border-l border-gray-200 px-10">
        <Block title="ROAST TYPE" items={["Light Roast", "Medium Roast", "Medium Dark Roast", "Dark Roast", "French Roast Dark"]} />
        <div className="h-10" />
        <Block title="BREW GEAR" items={["Chemex", "Hario", "Kalita", "Acadia", "Bruvi", "Breville"]} />
      </div>

      <div className="border-l border-gray-200 px-10">
        <Block title="MERCHANDISE" items={["Gift Cards", "Tea & Cocoa", "Limited Time", "Mugs", "Apparel", "Sticker & Pins"]} />
        <div className="h-10" />
        <Block title="REGION" items={["Central America", "South America", "Mexico", "Africa"]} />
      </div>

      <Link to="/shop" className="block group/item">
        <div className="relative h-[365px] w-[367px] overflow-hidden bg-[#83d5df]">
          <span className="absolute left-3 top-3 bg-[#24282a] text-white text-[14px] font-extrabold px-3 py-1 z-10">
            Sold out
          </span>
          <img src={images.bundle} alt="" className="h-full w-full object-cover" />
        </div>

        <p className="mt-5 text-[16px] font-extrabold group-hover/item:underline underline-offset-4">
          Build Your Own Coffee Bundle
        </p>
        <p className="mt-2 text-[16px] font-extrabold">From $33.00</p>
      </Link>
    </div>
  );
}

function LocationsMega() {
  return (
    <div className="px-[65px] py-10 min-h-[430px] grid grid-cols-[260px_270px_1fr_1fr] gap-10">
      <div>
        <Underlined>SAME DAY ORDERING</Underlined>
        <Underlined>ALL LOCATIONS</Underlined>
        <LinkList
          items={[
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
          ]}
        />
      </div>

      <div className="border-l border-gray-200 pl-10 pt-[36px]">
        <LinkList
          items={[
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
          ]}
        />
      </div>

      <ImageTitle image={images.locationLeft} title="Visit Joe at the TWA Hotel" />
      <ImageTitle image={images.locationRight} title="Order Local Pick Up" />
    </div>
  );
}

function DiscoverMega() {
  return (
    <div className="px-[65px] py-10 min-h-[390px] grid grid-cols-[300px_1fr_1fr] gap-[65px]">
      <div>
        <Heading>PEOPLE</Heading>
        <LinkList items={["We're Hiring", "Humanities"]} />
        <Heading>OUR STORY</Heading>
        <Heading>LEARN</Heading>
        <LinkList items={["Brew Guides", "Blog"]} />
        <Heading>CONTACT US</Heading>
      </div>

      <ImageButton image={images.discoverLeft} button="HUMANITIES STATEMENT" />
      <ImageButton image={images.discoverRight} button="WE'RE HIRING" />
    </div>
  );
}

function ImageButton({ image, button }) {
  return (
    <Link to="/shop" className="relative block h-[309px] overflow-hidden group/item">
      <img src={image} alt="" className="h-full w-full object-cover" />
      <span className="absolute bottom-[30px] left-1/2 -translate-x-1/2 h-[46px] min-w-[230px] rounded-full bg-[#118acb] text-white text-[15px] font-extrabold flex items-center justify-center px-8 group-hover/item:underline underline-offset-4">
        {button}
      </span>
    </Link>
  );
}

function ImageTitle({ image, title }) {
  return (
    <Link to="/shop" className="block group/item">
      <img src={image} alt="" className="h-[296px] w-full object-cover" />
      <p className="mt-4 text-[16px] font-extrabold group-hover/item:underline underline-offset-4">
        {title}
      </p>
    </Link>
  );
}

function Block({ title, items }) {
  return (
    <div className="mb-6">
      <Heading>{title}</Heading>
      <LinkList items={items} />
    </div>
  );
}

function Heading({ children }) {
  return (
    <h3 className="mb-3 text-[18px] font-extrabold uppercase leading-tight text-[#303437]">
      {children}
    </h3>
  );
}

function Underlined({ children }) {
  return (
    <h3 className="mb-[7px] w-fit border-b border-[#303437] text-[18px] font-extrabold uppercase leading-tight text-[#303437] hover:border-transparent hover:underline underline-offset-4">
      {children}
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
          className="block text-[16px] font-extrabold leading-[1.28] text-[#303437] hover:underline underline-offset-4 decoration-[1px]"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
