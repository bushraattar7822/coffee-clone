import { Link } from "react-router-dom";

const products = [
  ["The Daily", "From $12.00", "https://joecoffeecompany.com/cdn/shop/files/Daily_cf816b92-967a-4a18-9967-669e300f1fd3.jpg?v=1778087208&width=533"],
  ["The Waverly", "From $12.00", "https://joecoffeecompany.com/cdn/shop/files/Waverly.jpg?v=1778087228&width=533"],
  ["Amsterdam", "From $11.00", "https://joecoffeecompany.com/cdn/shop/files/Amsterdamcopy2.jpg?v=1776738256&width=533"],
  ["Colombia La Familia Guarnizo", "From $13.00", "https://joecoffeecompany.com/cdn/shop/files/Daily_cf816b92-967a-4a18-9967-669e300f1fd3.jpg?v=1778087208&width=533"],
  ["The Village", "From $13.25", "https://joecoffeecompany.com/cdn/shop/files/The-Villagecopy_74fafa71-7147-4595-b82e-ef194227efae.jpg?v=1778087218&width=533"],
  ["Benchmark", "From $12.00", "https://joecoffeecompany.com/cdn/shop/files/227A9827.jpg?v=1757256129&width=533"],
];

export default function ShopAll() {
  return (
    <main className="bg-white px-[50px] pb-24 pt-8 text-[#202326] font-['Nunito']">
      <div className="mb-16 flex justify-center gap-4 text-[16px] font-black">
        <Link to="/">Home</Link><span>›</span><span>Collection</span><span>›</span><span>Shop All</span>
      </div>

      <h1 className="mb-20 text-center text-[68px] font-black leading-none tracking-[-0.04em]">Shop All</h1>

      <div className="mb-12 flex items-center justify-between text-[16px] font-black">
        <span>Filter & sort</span>
        <div className="flex items-center gap-6">
          <span>56 products</span>
          <button className="rounded-full border border-gray-300 px-8 py-3">Featured⌄</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-16 md:grid-cols-3">
        {products.map(([name, price, image]) => (
          <Link key={name} to="/product/1" className="group">
            <div className="relative h-[390px] overflow-hidden bg-[#e8f7fb]">
              <span className="absolute left-3 top-3 z-10 bg-[#24282a] px-3 py-1 text-[14px] font-black text-white">Sold out</span>
              <span className="absolute left-3 top-10 z-10 bg-[#118acb] px-3 py-1 text-[14px] font-black text-white">Subscribe & Save</span>
              <img src={image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <h3 className="mt-5 text-[17px] font-black group-hover:underline">{name}</h3>
            <p className="mt-2 text-[16px] font-black">{price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
