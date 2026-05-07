function Button({ children }) {
  return <button className="rounded-full bg-[#118acb] px-10 py-4 text-[15px] font-black text-white">{children}</button>;
}

function Split({ image, title, bullets, flip }) {
  return (
    <section className={`grid items-center gap-14 px-[50px] py-16 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <img src={image} alt="" className="h-[470px] w-full object-cover" />
      <div className="max-w-[560px]">
        <h2 className="mb-7 text-[42px] font-black leading-tight tracking-[-0.03em]">{title}</h2>
        <ul className="list-disc space-y-2 pl-6 text-[17px] font-black leading-7">
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="mt-8"><Button>LEARN MORE</Button></div>
      </div>
    </section>
  );
}

export default function Wholesale() {
  return (
    <main className="bg-white text-[#202326] font-['Nunito']">
      <section className="relative h-[420px] overflow-hidden">
        <img src="https://joecoffeecompany.com/cdn/shop/files/DSC00948_1.jpg?v=1757266812&width=1500" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-[68px] font-black tracking-[-0.04em]">Wholesale</h1>
          <div className="mt-8"><Button>MAKE A WHOLESALE INQUIRY</Button></div>
        </div>
      </section>

      <section className="mx-auto max-w-[820px] px-6 py-12 text-center">
        <h2 className="mb-6 text-[38px] font-black">Your Coffee & Tech, Elevated</h2>
        <p className="text-[17px] font-black leading-8">Wholesale coffee, training, equipment support, and service programs for cafes, hotels, offices, and hospitality teams.</p>
      </section>

      <Split image="https://joecoffeecompany.com/cdn/shop/files/DSC00948-1-2048x1365.png?v=1755793387&width=720" title="Our Wholesale Coffee Program Provides:" bullets={["Specialty coffee roasted in NYC", "Cold brew and ready-to-drink offerings", "Training, tech support, and equipment solutions", "Branded paper goods and marketing support"]} />

      <Split flip image="https://joecoffeecompany.com/cdn/shop/files/Classes-Latte-Art_1_7eda2473-22a1-419d-b09b-7c182b93eb3a.png?v=1755880165&width=720" title="A Full Ecosystem, More Than Coffee" bullets={["Bulk whole bean and ground coffee", "Cold brew in bulk and canned format", "Single serve and instant formats", "Support from coffee, catering, and training teams"]} />

      <Split image="https://joecoffeecompany.com/cdn/shop/files/joe-coffee-quality-cupping-960x720_1f8067e8-abce-4783-80fe-afcc003e58da.png?v=1755880214&width=720" title="Built for Every Coffee Model" bullets={["Hotels and hospitality", "Office and business programs", "Transit hubs and high-volume locations", "Grocery and retail partners"]} />
    </main>
  );
}
