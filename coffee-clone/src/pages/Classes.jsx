const hero = "https://joecoffeecompany.com/cdn/shop/files/imgi_29_JoeCoffee_theWorkshop_WebBanner-2500x998_0bd7e497-8730-46af-8747-f9e92441c399.png?v=1756143491&width=1500";

const cards = [
  ["Latte Art", "https://joecoffeecompany.com/cdn/shop/files/Classes-Latte-Art_67fd8bbe-9651-4f0e-b969-4c7bc779d61e.jpg?v=1757324994&width=533"],
  ["Espresso Workshop", "https://joecoffeecompany.com/cdn/shop/files/Classes-Espresso-Workshop-1280x960.jpg?v=1757258383&width=533"],
  ["Coffee Brewing", "https://joecoffeecompany.com/cdn/shop/files/joe-coffee-classes-coffee-together-apart-brewing-block-1280x960.jpg?v=1757258383&width=533"],
];

export default function Classes() {
  return (
    <main className="bg-white text-[#202326] font-['Nunito']">
      <section className="relative h-[420px] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <p className="mb-7 text-[16px] font-black uppercase">THE WORKSHOP</p>
          <h1 className="text-[68px] font-black tracking-[-0.04em]">Public Classes</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-12 text-center text-[17px] font-black leading-8">
        Our program for coffee exploration and education is designed for home baristas, budding enthusiasts, and seasoned professionals looking for a refresher.
      </section>

      <section className="px-[50px] pb-24">
        <h2 className="mb-12 text-center text-[40px] font-black">Upcoming Classes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map(([title, img]) => (
            <div key={title} className="text-center">
              <img src={img} alt="" className="h-[260px] w-full object-cover" />
              <h3 className="mt-5 text-[24px] font-black">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
