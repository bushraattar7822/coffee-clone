import { Link } from "react-router-dom";
import { Search, LocateFixed, Plus, Minus } from "lucide-react";

const cdn = (file) => `https://joecoffeecompany.com/cdn/shop/files/${file}`;

const images = {
  mapCafe: cdn("IMG_2127.jpg?v=1757294252&width=360"),
  twa: cdn("TWA_2_copy.jpg?v=1758213049&width=900"),

  w85: cdn("IMG_4068.jpg?v=1757294253&width=720"),
  w68: cdn("IMG_2773.jpg?v=1757294252&width=720"),
  pulitzer: cdn("IMG_8369.jpg?v=1757294252&width=720"),
  dodge: cdn("IMG_5734.jpg?v=1757294252&width=720"),
  northwest: cdn("IMG_1902.jpg?v=1757294252&width=720"),
  business: cdn("IMG_7791.jpg?v=1757294251&width=720"),

  bryant: cdn("Social_Posts_1_81482864-88e8-48d9-8260-aac02700ab8e.jpg?v=1758292127&width=720"),
  graybar: cdn("IMG_7716.jpg?v=1757294254&width=720"),
  kiosk: cdn("IMG_2127.jpg?v=1757294252&width=720"),

  proShop: cdn("AMPL5779.jpg?v=1757294728&width=720"),
  unionSquare: cdn("Social_Posts_2_ec3148a8-780c-4041-b86d-55c3fa4757e2.jpg?v=1758292245&width=720"),
  street13: cdn("IMG_2267.jpg?v=1757294730&width=720"),
  waverly: cdn("WaverlySpring_NewBranding_a9dc6499-6783-44f4-a7d0-59709c66346d.jpg?v=1758292336&width=720"),
  laguardia: cdn("IMG_7148.jpg?v=1757294729&width=720"),
  chelsea: cdn("Social_April_3_d45dae0d-2bf9-457a-9b62-49ab3a0a7e2f.jpg?v=1758292464&width=720"),
  governors: cdn("GI_1.jpg?v=1757294254&width=720"),
  battery: cdn("IMG_0993.jpg?v=1757294730&width=720"),

  bergen: cdn("IMG_0049_1.jpg?v=1757294252&width=720"),
  brooklyn: cdn("DSC00719.jpg?v=1757294847&width=720"),
  dumbo: cdn("Dumbo_2.jpg?v=1757294253&width=720"),
  lic: cdn("IMG_1674.jpg?v=1757294252&width=720"),
};

const uptown = [
  ["W 85th St", images.w85],
  ["W 68th St", images.w68],
  ["Columbia University Pulitzer", images.pulitzer],
  ["Columbia University Dodge Hall", images.dodge],
  ["Columbia University Northwest Corner", images.northwest],
  ["Columbia University Business School", images.business],
];

const midtown = [
  ["Bryant Park", images.bryant],
  ["Grand Central: Graybar Passage", images.graybar],
  ["Grand Central Kiosk", images.kiosk],
];

const downtown = [
  ["Pro Shop", images.proShop],
  ["Union Square", images.unionSquare],
  ["13th Street", images.street13],
  ["Waverly Place", images.waverly],
  ["LaGuardia Pl", images.laguardia],
  ["Chelsea", images.chelsea],
  ["Governors Island", images.governors],
  ["Battery Maritime Building", images.battery],
];

const brooklyn = [
  ["Bergen Street", images.bergen],
  ["Brooklyn Heights", images.brooklyn],
  ["Dumbo", images.dumbo],
];

const queens = [["Long Island City Roastery Cafe", images.lic]];

export default function Locations() {
  return (
    <main className="bg-white font-['Nunito'] text-[#24282a]">
      <section className="px-[50px] pb-16 pt-6">
        <h1 className="mb-10 text-center text-[34px] font-black">Locations</h1>

        <div className="overflow-hidden rounded-[4px] border border-gray-200 bg-white">
          <div className="flex h-[78px] items-center px-5">
            <div className="flex h-[46px] w-[380px] items-center gap-3 rounded bg-[#f7f7f7] px-4">
              <Search size={20} className="text-gray-500" />
              <span className="text-[16px] font-black text-gray-600">
                Search your location
              </span>
              <LocateFixed size={18} className="ml-auto text-gray-300" />
              <span className="border-l pl-4 text-[15px] font-black text-black">
                25 km
              </span>
            </div>
          </div>

          <div className="grid min-h-[385px] grid-cols-[492px_1fr] border-t">
            <div className="flex gap-5 border-r p-5">
              <img
                src={images.mapCafe}
                alt=""
                className="h-[100px] w-[135px] rounded object-cover"
              />

              <div>
                <h2 className="text-[18px] font-black">13th Street</h2>
                <p className="mt-2 max-w-[280px] text-[14px] font-black leading-[1.25]">
                  Tucked between Union Square and the Village, this cafe welcomes
                  a steady stream of students, locals, and professionals.
                </p>

                <p className="mt-5 text-[14px] font-black">
                  9 E 13th St<br />
                  New York, NY 10003, United States
                </p>

                <div className="mt-3 grid grid-cols-[80px_1fr] text-[14px] font-black">
                  <span>Mon - Fri</span>
                  <span>7AM-7PM</span>
                  <span>Sat - Sun</span>
                  <span>8AM-6PM</span>
                </div>
              </div>
            </div>

            <FakeMap />
          </div>
        </div>
      </section>

      <section className="mx-[50px] mb-10 grid min-h-[330px] grid-cols-2 bg-[#118acb] text-white">
        <div className="flex flex-col items-center justify-center border-r border-white/20 text-center">
          <p className="text-[15px] font-black uppercase tracking-wide">
            Order Ahead
          </p>
          <h2 className="mt-4 max-w-[520px] text-[42px] font-black leading-tight">
            Download the Joe Coffee App
          </h2>
          <p className="mt-5 text-[15px] font-black">Earn Loyalty Points</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[15px] font-black">Schedule for Pickup & Delivery</p>
          <Link className="mt-8 rounded-full bg-[#24282a] px-12 py-4 text-[15px] font-black uppercase text-white">
            Order Online
          </Link>
        </div>
      </section>

      <section className="px-6 py-10 text-center">
        <h2 className="text-[34px] font-black">Translated Menus</h2>
        <p className="mt-6 text-[15px] font-black">
          Available in French, Spanish, Japanese & Chinese
        </p>
        <Link className="mt-8 inline-flex rounded-full bg-[#118acb] px-12 py-4 text-[15px] font-black uppercase text-white">
          Learn More
        </Link>
      </section>

      <section className="mx-auto grid max-w-[1250px] grid-cols-2 gap-[30px] px-[50px] py-12">
        <img src={images.twa} alt="" className="h-[410px] w-full object-cover" />
        <div className="flex flex-col justify-center">
          <p className="text-[16px] font-black uppercase">Now Open</p>
          <h2 className="mt-5 text-[38px] font-black">TWA Hotel</h2>
          <p className="mt-7 max-w-[560px] text-[16px] font-black leading-7">
            Flying out of JFK soon? You’ll want to catch what we’re brewing with
            the TWA Hotel.
          </p>
          <Link className="mt-8 inline-flex w-fit rounded-full bg-[#118acb] px-12 py-4 text-[15px] font-black uppercase text-white">
            Learn More
          </Link>
        </div>
      </section>

      <CafeGrid title="Explore our Manhattan Uptown Cafes" items={uptown} />
      <CafeGrid title="Explore our Manhattan Midtown Cafes" items={midtown} />
      <CafeGrid title="Explore our Manhattan Downtown Cafes" items={downtown} />
      <CafeGrid title="Explore our Brooklyn Cafes" items={brooklyn} />
      <CafeGrid title="Explore our Queens Roastery & Cafe" items={queens} />
    </main>
  );
}

function FakeMap() {
  const tiles = [
    [602, 769], [603, 769], [604, 769], [605, 769],
    [602, 770], [603, 770], [604, 770], [605, 770],
    [602, 771], [603, 771], [604, 771], [605, 771],
  ];

  const clusters = [
    ["4", "35%", "17%"],
    ["2", "32%", "36%"],
    ["10", "29%", "57%"],
    ["4", "27%", "78%"],
  ];

  return (
    <div className="relative overflow-hidden bg-[#e8f8ff]">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 scale-[1.18] opacity-95">
        {tiles.map(([x, y]) => (
          <img
            key={`${x}-${y}`}
            src={`https://a.basemaps.cartocdn.com/light_all/11/${x}/${y}.png`}
            alt=""
            className="h-full w-full object-cover"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[#bdefff]/25" />

      {clusters.map(([num, left, top]) => (
        <div
          key={`${num}-${left}-${top}`}
          className="absolute flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#007aa3] bg-[#118acb] text-[18px] font-black text-white shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
          style={{ left, top }}
        >
          {num}
        </div>
      ))}

      <div className="absolute right-4 top-4 overflow-hidden rounded bg-white shadow">
        <button className="flex h-9 w-9 items-center justify-center border-b text-[#24282a]">
          <Plus size={20} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center text-[#24282a]">
          <Minus size={20} />
        </button>
      </div>
    </div>
  );
}

function CafeGrid({ title, items }) {
  return (
    <section className="mx-auto max-w-[1300px] px-[50px] py-14">
      <h2 className="mb-12 text-center text-[34px] font-black leading-tight">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([name, image]) => (
          <Link key={name} to="/pages/locations" className="group text-center">
            <img
              src={image}
              alt=""
              className="h-[232px] w-full object-cover"
            />
            <h3 className="mx-auto mt-5 max-w-[285px] text-[24px] font-black leading-tight group-hover:underline">
              {name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
