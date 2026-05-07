const cafes = [
  ["TWA Hotel", "https://joecoffeecompany.com/cdn/shop/files/TWA_2_copy.jpg?v=1758213049&width=533"],
  ["Bryant Park", "https://joecoffeecompany.com/cdn/shop/files/Social_Posts_1_81482864-88e8-48d9-8260-aac02700ab8e.jpg?v=1758292127&width=533"],
  ["Bergen Street", "https://joecoffeecompany.com/cdn/shop/files/IMG_0049_1.jpg?v=1757294252&width=533"],
  ["Brooklyn Heights", "https://joecoffeecompany.com/cdn/shop/files/DSC00719.jpg?v=1757294847&width=533"],
  ["Dumbo", "https://joecoffeecompany.com/cdn/shop/files/Dumbo_2.jpg?v=1757294253&width=533"],
  ["Long Island City Roastery Cafe", "https://joecoffeecompany.com/cdn/shop/files/IMG_1674.jpg?v=1757294252&width=533"],
];

export default function Locations() {
  return (
    <main className="bg-white text-[#202326] font-['Nunito']">
      <section className="px-[50px] py-10">
        <h1 className="mb-10 text-center text-[36px] font-black">Locations</h1>

        <div className="overflow-hidden rounded border">
          <div className="flex h-[62px] items-center gap-6 border-b px-5 text-[16px] font-black">
            <span className="text-gray-500">Search your location</span>
            <span>25 km⌄</span>
          </div>

          <div className="grid min-h-[385px] grid-cols-[40%_60%]">
            <div className="p-5 text-[15px] font-black">
              <h3 className="text-[22px]">13th Street</h3>
              <p className="mt-2 max-w-[330px]">
                Tucked between Union Square and the Village, this cafe welcomes students, locals, and professionals.
              </p>
            </div>

            <div className="relative bg-[#dff4ff]">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(25deg,#8ed6f8 1px,transparent 1px),linear-gradient(115deg,#8ed6f8 1px,transparent 1px)", backgroundSize: "42px 42px" }} />
              {["4", "2", "10", "4"].map((n, i) => (
                <span key={i} className="absolute grid h-14 w-14 place-items-center rounded-full bg-[#118acb] text-xl font-black text-white shadow" style={{ left: `${34 + i * 6}%`, top: `${16 + i * 15}%` }}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[50px] my-12 bg-[#118acb] px-16 py-20 text-center text-white">
        <p className="text-[16px] font-black">ORDER AHEAD</p>
        <h2 className="mx-auto mt-4 max-w-[520px] text-[42px] font-black leading-tight">Download the Joe Coffee App</h2>
        <p className="mt-5 font-black">Schedule for Pickup & Delivery</p>
        <button className="mt-8 rounded-full bg-[#24282a] px-12 py-4 font-black">ORDER ONLINE</button>
      </section>

      <section className="px-[50px] py-16">
        <h2 className="mb-12 text-center text-[38px] font-black">Explore our Cafes</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {cafes.map(([name, image]) => (
            <div key={name} className="text-center">
              <img src={image} alt="" className="h-[232px] w-full object-cover" />
              <h3 className="mt-5 text-[24px] font-black leading-tight">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
