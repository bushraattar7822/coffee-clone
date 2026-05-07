import { useState } from "react";
import { Link } from "react-router-dom";

const images = {
  hero:
    "https://joecoffeecompany.com/cdn/shop/files/DSC00948_1.jpg?v=1757266812&width=1500",
  program:
    "https://joecoffeecompany.com/cdn/shop/files/DSC00948-1-2048x1365.png?v=1755793387&width=720",
  latte:
    "https://joecoffeecompany.com/cdn/shop/files/Classes-Latte-Art_1_7eda2473-22a1-419d-b09b-7c182b93eb3a.png?v=1755880165&width=720",
  cupping:
    "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-quality-cupping-960x720_1f8067e8-abce-4783-80fe-afcc003e58da.png?v=1755880214&width=720",

  coffeeProgram:
    "https://joecoffeecompany.com/cdn/shop/files/Retail_Bags_3.jpg?v=1757270604&width=900",
  techSolutions:
    "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-classes-espresso-workshop-960x720.jpg?v=1757269419&width=900",
  education:
    "https://joecoffeecompany.com/cdn/shop/files/Joe_Amsterdam-80_2.jpg?v=1757269438&width=900",
  proudly:
    "https://joecoffeecompany.com/cdn/shop/files/JPcollab_5.jpg?v=1757266576&width=900",
};

const accordions = [
  {
    title: "Sustainable Coffee Supply Stream",
    body: "Exceptional coffee is not just defined by quality but by its ability to leave a positive impact throughout the supply chain. We choose to source at least 80% of our coffees from Rainforest Alliance-certified producers and uphold social, economic, and environmental sustainability standards.",
  },
  {
    title: "A Committed Coffee Ally",
    body: "We are hands-on in every step of the process, from the first conversation to the first cup served in your space. We work with you on distribution solutions and help shape a coffee program that fits your needs.",
  },
  {
    title: "Roasting Expertise Meets Community Impact",
    body: "We roast every batch in NYC with precision and care, while investing in farmers, employees, and local communities through ethical sourcing, nonprofit support, and coffee initiatives with real impact.",
  },
];

const serviceCards = [
  {
    title: "Coffee Program",
    image: images.coffeeProgram,
    path: "/pages/wholesale",
  },
  {
    title: "Tech Solutions",
    image: images.techSolutions,
    path: "/pages/wholesale",
  },
  {
    title: "Education & Training",
    image: images.education,
    path: "/pages/wholesale",
  },
  {
    title: "Proudly Serving Joe",
    image: images.proudly,
    path: "/pages/wholesale",
  },
];

export default function Wholesale() {
  return (
    <main className="bg-white font-['Nunito'] text-[#24282a]">
      <section className="relative flex h-[420px] items-center justify-center overflow-hidden">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 text-center">
          <h1 className="text-[68px] font-black leading-none text-white">
            Wholesale
          </h1>
          <a
            href="https://tally.so/r/w4MN2X"
            className="mt-8 inline-flex h-[48px] min-w-[300px] items-center justify-center rounded-full bg-[#118acb] px-8 text-[15px] font-black uppercase text-white transition-all duration-300 hover:bg-[#0b6f9f]"
          >
            Make A Wholesale Inquiry
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-12 text-center">
        <h2 className="text-[34px] font-black">Your Coffee & Tech, Elevated</h2>
        <p className="mt-7 text-[16px] font-black leading-7">
          At Joe Coffee, we believe that great coffee is about more than just
          coffee, it is about collaboration, expertise, and a shared commitment
          to quality and sustainability initiatives.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1250px] grid-cols-1 gap-14 px-6 py-12 lg:grid-cols-2">
        <img src={images.program} alt="" className="h-[430px] w-full object-cover" />

        <div className="flex flex-col justify-center">
          <h2 className="text-[42px] font-black leading-tight">
            Our Wholesale Coffee Program Provides:
          </h2>
          <ul className="mt-7 list-disc space-y-2 pl-5 text-[16px] font-black leading-7">
            <li>Specialty coffee, expertly roasted in NYC</li>
            <li>Cold brew, instant coffee, and ready-to-drink offerings</li>
            <li>Sustainably sourced coffee from trusted producers</li>
            <li>Dedicated training and education to elevate your team</li>
            <li>Seamless technical support and equipment solutions</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1250px] grid-cols-1 gap-14 px-6 py-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-[42px] font-black leading-tight">
            A Full Ecosystem, More Than Coffee
          </h2>
          <p className="mt-7 text-[16px] font-black leading-7">
            We offer a white glove program that includes specialty coffee,
            training, equipment support, marketing materials, and collaboration
            with our catering team.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[16px] font-black leading-7">
            <li>Whole bean bulk, ground, and fractional packs</li>
            <li>Shelf stable cold brew in bulk and canned format</li>
            <li>Shelf stable ready to use espresso</li>
            <li>Single serve formats like instant and biodegradable B-pods</li>
          </ul>
        </div>

        <img src={images.latte} alt="" className="h-[482px] w-full object-cover" />
      </section>

      <section className="mx-auto grid max-w-[1250px] grid-cols-1 gap-14 px-6 py-12 lg:grid-cols-2">
        <img src={images.cupping} alt="" className="h-[452px] w-full object-cover" />

        <div className="flex flex-col justify-center">
          <h2 className="text-[42px] font-black leading-tight">
            Built for Every Coffee Model
          </h2>
          <ul className="mt-7 list-disc space-y-2 pl-5 text-[16px] font-black leading-7">
            <li>Fast Casual & Multi-Unit Operators</li>
            <li>Hotels & Hospitality</li>
            <li>Office, Business & Industry, Hospitals & Universities</li>
            <li>Transit Hubs & High-Volume Locations</li>
            <li>Grocery and Proudly Serving Joe Coffee programs</li>
          </ul>
        </div>
      </section>

      <WhyJoe />

      <section className="mx-auto grid max-w-[1250px] grid-cols-1 gap-[30px] px-6 pb-14 pt-10 lg:grid-cols-2">
        {serviceCards.map((card) => (
          <ServiceCard key={card.title} {...card} />
        ))}
      </section>
    </main>
  );
}

function WhyJoe() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mx-auto max-w-[1250px] px-6 py-16">
      <h2 className="mb-14 text-center text-[42px] font-black text-[#118acb]">
        Why Joe Coffee
      </h2>

      <div>
        {accordions.map((item, index) => (
          <div key={item.title} className="border-t border-gray-300 last:border-b">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left text-[16px] font-black"
            >
              <span>{item.title}</span>
              <span className="text-[26px] font-normal">
                {open === index ? "-" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="max-w-[980px] pb-6 text-[15px] font-bold leading-7">
                {item.body}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, image, path }) {
  return (
    <Link
      to={path}
      className="group relative block h-[506px] overflow-hidden bg-black"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute bottom-10 left-10">
        <h3 className="text-[34px] font-black leading-tight text-white">
          {title}
        </h3>
        <span className="mt-7 inline-flex h-[46px] min-w-[176px] items-center justify-center rounded-full bg-[#118acb] px-8 text-[15px] font-black uppercase text-white transition-all duration-300 group-hover:bg-[#0b6f9f]">
          Learn More
        </span>
      </div>
    </Link>
  );
}
