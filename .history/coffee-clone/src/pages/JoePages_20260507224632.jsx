import { Link } from "react-router-dom";

const A = {
  daily: "https://joecoffeecompany.com/cdn/shop/files/Daily_cf816b92-967a-4a18-9967-669e300f1fd3.jpg?v=1778087208&width=533",
  waverly: "https://joecoffeecompany.com/cdn/shop/files/Waverly.jpg?v=1778087228&width=533",
  amsterdam: "https://joecoffeecompany.com/cdn/shop/files/Amsterdamcopy2.jpg?v=1776738256&width=533",
  village: "https://joecoffeecompany.com/cdn/shop/files/The-Villagecopy_74fafa71-7147-4595-b82e-ef194227efae.jpg?v=1778087218&width=533",
  benchmark: "https://joecoffeecompany.com/cdn/shop/files/227A9827.jpg?v=1757256129&width=533",
  classesHero: "https://joecoffeecompany.com/cdn/shop/files/imgi_29_JoeCoffee_theWorkshop_WebBanner-2500x998_0bd7e497-8730-46af-8747-f9e92441c399.png?v=1756143491&width=1500",
  latte: "https://joecoffeecompany.com/cdn/shop/files/Classes-Latte-Art_67fd8bbe-9651-4f0e-b969-4c7bc779d61e.jpg?v=1757324994&width=533",
  espresso: "https://joecoffeecompany.com/cdn/shop/files/Classes-Espresso-Workshop-1280x960.jpg?v=1757258383&width=533",
  cateringHero: "https://joecoffeecompany.com/cdn/shop/files/imgi_34_Catering-Block.jpg?v=1750951068&width=1500",
  services: "https://joecoffeecompany.com/cdn/shop/files/Mulberry_18.jpg?v=1756169219&width=720",
  residencies: "https://joecoffeecompany.com/cdn/shop/files/Publicis_8_1.jpg?v=1756169117&width=720",
  joe2go: "https://joecoffeecompany.com/cdn/shop/files/Box_Coffee.jpg?v=1756169010&width=720",
  wholesaleHero: "https://joecoffeecompany.com/cdn/shop/files/DSC00948_1.jpg?v=1757266812&width=1500",
  wholesaleBeans: "https://joecoffeecompany.com/cdn/shop/files/DSC00948-1-2048x1365.png?v=1755793387&width=720",
  wholesaleLatte: "https://joecoffeecompany.com/cdn/shop/files/Classes-Latte-Art_1_7eda2473-22a1-419d-b09b-7c182b93eb3a.png?v=1755880165&width=720",
  wholesaleCupping: "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-quality-cupping-960x720_1f8067e8-abce-4783-80fe-afcc003e58da.png?v=1755880214&width=720",
  twa: "https://joecoffeecompany.com/cdn/shop/files/TWA_2_copy.jpg?v=1758213049&width=720",
  bryant: "https://joecoffeecompany.com/cdn/shop/files/Social_Posts_1_81482864-88e8-48d9-8260-aac02700ab8e.jpg?v=1758292127&width=533",
  bergen: "https://joecoffeecompany.com/cdn/shop/files/IMG_0049_1.jpg?v=1757294252&width=533",
  brooklyn: "https://joecoffeecompany.com/cdn/shop/files/DSC00719.jpg?v=1757294847&width=533",
  dumbo: "https://joecoffeecompany.com/cdn/shop/files/Dumbo_2.jpg?v=1757294253&width=533",
  lic: "https://joecoffeecompany.com/cdn/shop/files/IMG_1674.jpg?v=1757294252&width=533",
};

const page = "bg-white text-[#202326] font-['Nunito']";
const h1 = "text-[64px] leading-none font-black tracking-[-0.04em]";
const h2 = "text-[38px] leading-tight font-black tracking-[-0.03em]";

function Button({ children }) {
  return <button className="rounded-full bg-[#118acb] px-10 py-4 text-[15px] font-black text-white">{children}</button>;
}

function Hero({ image, title, eyebrow }) {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        {eyebrow && <p className="mb-6 text-[16px] font-black uppercase tracking-wide text-[#202326]">{eyebrow}</p>}
        <h1 className={h1}>{title}</h1>
      </div>
    </section>
  );
}

export function ShopAll() {
  const products = [
    ["The Daily", "From $12.00", A.daily],
    ["The Waverly", "From $12.00", A.waverly],
    ["Amsterdam", "From $11.00", A.amsterdam],
    ["Colombia La Familia Guarnizo", "From $13.00", A.daily],
    ["The Village", "From $13.25", A.village],
    ["Benchmark", "From $12.00", A.benchmark],
  ];

  return (
    <main className={page}>
      <section className="px-[50px] pb-20 pt-8">
        <div className="mb-16 flex justify-center gap-4 text-[16px] font-black">
          <Link to="/">Home</Link><span>›</span><span>Collection</span><span>›</span><span>Shop All</span>
        </div>
        <h1 className={`${h1} mb-20 text-center`}>Shop All</h1>
        <div className="mb-12 flex items-center justify-between text-[16px] font-black">
          <span>Filter & sort</span>
          <div className="flex items-center gap-6"><span>56 products</span><button className="rounded-full border px-8 py-3">Featured⌄</button></div>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-3">
          {products.map(([name, price, image]) => (
            <Link key={name} to="/product/1" className="group">
              <div className="relative h-[390px] overflow-hidden bg-[#e7f6fb]">
                <span className="absolute left-3 top-3 z-10 bg-[#24282a] px-3 py-1 text-[14px] font-black text-white">Sold out</span>
                <span className="absolute left-3 top-10 z-10 bg-[#118acb] px-3 py-1 text-[14px] font-black text-white">Subscribe & Save</span>
                <img src={image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-[17px] font-black group-hover:underline">{name}</h3>
              <p className="mt-2 text-[16px] font-black">{price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ClassesPage() {
  return (
    <main className={page}>
      <Hero image={A.classesHero} eyebrow="THE WORKSHOP" title="Public Classes" />
      <section className="mx-auto max-w-[800px] px-6 py-12 text-center text-[17px] font-black leading-8">
        <p>Explore coffee brewing, espresso, latte art, tasting, and practical workshops built for curious home baristas and coffee lovers.</p>
      </section>
      <CardGrid title="Upcoming Classes" cards={[
        ["Latte Art", A.latte],
        ["Espresso Workshop", A.espresso],
        ["Coffee Brewing", A.classesHero],
      ]} />
    </main>
  );
}

export function CateringPage() {
  return (
    <main className={page}>
      <Hero image={A.cateringHero} title="Events & Catering" />
      <section className="mx-auto max-w-[780px] px-6 py-14 text-center text-[17px] font-black leading-8">
        <p>Bring a polished Joe Coffee bar to meetings, offices, weddings, brand moments, and private gatherings.</p>
        <div className="mt-8"><Button>START YOUR INQUIRY</Button></div>
      </section>
      <Split image={A.services} title="Our Services" text="Full espresso bars, brewed coffee, cold brew, tea, and hospitality-focused service for events of many sizes." />
      <Split flip image={A.residencies} title="Residencies & Long Term Pop Ups" text="Weekly, monthly, and seasonal coffee experiences for offices, campuses, and shared spaces." />
      <Split image={A.joe2go} title="Joe 2 Go" text="Portable coffee boxes for quick meetings and group service, with cups and classic Joe Coffee presentation." />
    </main>
  );
}

export function LocationsPage() {
  const cafes = [
    ["TWA Hotel", A.twa], ["Bryant Park", A.bryant], ["Bergen Street", A.bergen],
    ["Brooklyn Heights", A.brooklyn], ["Dumbo", A.dumbo], ["Long Island City Roastery Cafe", A.lic],
  ];

  return (
    <main className={page}>
      <section className="px-[50px] py-10">
        <h1 className="mb-10 text-center text-[36px] font-black">Locations</h1>
        <div className="overflow-hidden rounded border">
          <div className="flex h-[62px] items-center gap-6 border-b px-5 text-[16px] font-black">
            <span className="text-gray-500">Search your location</span><span>25 km⌄</span>
          </div>
          <div className="grid min-h-[385px] grid-cols-[40%_60%]">
            <div className="p-5 text-[15px] font-black"><h3 className="text-[22px]">13th Street</h3><p className="mt-2 max-w-[330px]">A cozy New York cafe with espresso, matcha, seating, and classic Joe Coffee drinks.</p></div>
            <div className="relative bg-[#dff4ff]">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(25deg,#8ed6f8 1px,transparent 1px),linear-gradient(115deg,#8ed6f8 1px,transparent 1px)", backgroundSize: "42px 42px" }} />
              {[["45%","18%","4"],["42%","38%","2"],["39%","60%","10"]].map(([l,t,n]) => <span key={t} style={{ left:l, top:t }} className="absolute grid h-14 w-14 place-items-center rounded-full bg-[#118acb] text-xl font-black text-white shadow">{n}</span>)}
            </div>
          </div>
        </div>
      </section>
      <BlueApp />
      <section className="px-[50px] py-16">
        <h2 className={`${h2} mb-12 text-center`}>Explore our Cafes</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {cafes.map(([name, image]) => <Cafe key={name} name={name} image={image} />)}
        </div>
      </section>
    </main>
  );
}

export function WholesalePage() {
  return (
    <main className={page}>
      <Hero image={A.wholesaleHero} title="Wholesale" />
      <section className="mx-auto max-w-[820px] px-6 py-12 text-center">
        <h2 className={`${h2} mb-6`}>Your Coffee & Tech, Elevated</h2>
        <p className="text-[17px] font-black leading-8">Wholesale coffee, training, equipment support, and service programs for cafes, hotels, offices, and hospitality teams.</p>
      </section>
      <Split image={A.wholesaleBeans} title="Our Wholesale Coffee Program Provides:" bullets={["Specialty coffee roasted in NYC", "Cold brew and ready-to-drink offerings", "Training, tech support, and equipment solutions", "Branded paper goods and marketing support"]} />
      <Split flip image={A.wholesaleLatte} title="A Full Ecosystem, More Than Coffee" bullets={["Bulk whole bean and ground coffee", "Cold brew in bulk and canned format", "Single serve and instant formats", "Support from coffee, catering, and training teams"]} />
      <Split image={A.wholesaleCupping} title="Built for Every Coffee Model" bullets={["Hotels and hospitality", "Office and business programs", "Transit hubs and high-volume locations", "Grocery and retail partners"]} />
    </main>
  );
}

function CardGrid({ title, cards }) {
  return (
    <section className="px-[50px] pb-20">
      <h2 className={`${h2} mb-10 text-center`}>{title}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map(([name, image]) => <Cafe key={name} name={name} image={image} />)}
      </div>
    </section>
  );
}

function Split({ image, title, text, bullets, flip }) {
  return (
    <section className={`grid items-center gap-14 px-[50px] py-16 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <img src={image} alt="" className="h-[470px] w-full object-cover" />
      <div className="max-w-[520px]">
        <h2 className={`${h2} mb-7`}>{title}</h2>
        {text && <p className="text-[17px] font-black leading-8">{text}</p>}
        {bullets && <ul className="list-disc space-y-2 pl-6 text-[17px] font-black leading-7">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
        <div className="mt-8"><Button>LEARN MORE</Button></div>
      </div>
    </section>
  );
}

function Cafe({ name, image }) {
  return (
    <Link to="/pages/locations" className="block text-center">
      <img src={image} alt="" className="h-[232px] w-full object-cover" />
      <h3 className="mt-5 text-[24px] font-black leading-tight">{name}</h3>
    </Link>
  );
}

function BlueApp() {
  return (
    <section className="mx-[50px] my-12 bg-[#118acb] px-16 py-20 text-center text-white">
      <p className="text-[16px] font-black">ORDER AHEAD</p>
      <h2 className="mx-auto mt-4 max-w-[520px] text-[42px] font-black leading-tight">Download the Joe Coffee App</h2>
      <p className="mt-5 font-black">Schedule for Pickup & Delivery</p>
      <div className="mt-8"><button className="rounded-full bg-[#24282a] px-12 py-4 font-black">ORDER ONLINE</button></div>
    </section>
  );
}
