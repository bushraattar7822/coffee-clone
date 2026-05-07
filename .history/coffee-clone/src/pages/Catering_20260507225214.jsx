const hero = "https://joecoffeecompany.com/cdn/shop/files/imgi_34_Catering-Block.jpg?v=1750951068&width=1500";

function Button({ children }) {
  return <button className="rounded-full bg-[#118acb] px-10 py-4 text-[15px] font-black text-white">{children}</button>;
}

function Split({ image, title, text, flip }) {
  return (
    <section className={`grid items-center gap-14 px-[50px] py-16 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <img src={image} alt="" className="h-[470px] w-full object-cover" />
      <div className="max-w-[520px]">
        <h2 className="mb-7 text-[42px] font-black leading-tight tracking-[-0.03em]">{title}</h2>
        <p className="text-[17px] font-black leading-8">{text}</p>
        <div className="mt-8"><Button>LEARN MORE</Button></div>
      </div>
    </section>
  );
}

export default function Catering() {
  return (
    <main className="bg-white text-[#202326] font-['Nunito']">
      <section className="relative h-[420px] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <h1 className="relative z-10 flex h-full items-center justify-center text-[68px] font-black tracking-[-0.04em] text-white">
          Events & Catering
        </h1>
      </section>

      <section className="mx-auto max-w-[780px] px-6 py-14 text-center text-[17px] font-black leading-8">
        Elevate your next meeting or event with a custom Joe Coffee bar featuring locally roasted coffee.
        <div className="mt-8"><Button>START YOUR INQUIRY</Button></div>
      </section>

      <Split image="https://joecoffeecompany.com/cdn/shop/files/Mulberry_18.jpg?v=1756169219&width=720" title="Our Services" text="Treat your guests to coffee that’s as memorable as the event itself. We serve high-quality espresso, brewed coffee, cold brew, tea, and more." />
      <Split flip image="https://joecoffeecompany.com/cdn/shop/files/Publicis_8_1.jpg?v=1756169117&width=720" title="Residencies & Long Term Pop Ups" text="Bring Joe Coffee into your space with weekly, monthly, or seasonal residencies for offices, campuses, and shared spaces." />
      <Split image="https://joecoffeecompany.com/cdn/shop/files/Box_Coffee.jpg?v=1756169010&width=720" title="Joe 2 Go" text="Bring Joe Coffee to your next meeting or event with portable coffee boxes that serve groups quickly and beautifully." />
    </main>
  );
}
