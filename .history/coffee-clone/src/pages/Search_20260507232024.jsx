import { X, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  ["Café Feminista: Blanca Suazo", "$17.50", "https://joecoffeecompany.com/cdn/shop/files/12ozcopy_7c854987-812b-46f2-b726-bea9bef1af5e.jpg?v=1773075521&width=150"],
  ["Café Feminista: Montze Olvera", "$17.50", "https://joecoffeecompany.com/cdn/shop/files/image0copy.jpg?v=1773928249&width=150"],
  ["Build Your Own Coffee Bundle", "$33.00", "https://joecoffeecompany.com/cdn/shop/files/Build-Your-Own-Coffee-Box.gif?v=1764009102&width=150"],
  ["The Daily", "$12.00", "https://joecoffeecompany.com/cdn/shop/files/Daily_cf816b92-967a-4a18-9967-669e300f1fd3.jpg?v=1778087208&width=150"],
  ["The Waverly Espresso", "$12.00", "https://joecoffeecompany.com/cdn/shop/files/Waverly.jpg?v=1778087228&width=150"],
];

export default function Search() {
  return (
    <main className="min-h-screen bg-white font-['Nunito'] text-[#24282a]">
      <section className="ml-auto min-h-screen w-full max-w-[460px] border-l bg-white px-5 py-6">
        <div className="flex items-center gap-4 border-b border-[#24282a] pb-4">
          <SearchIcon size={24} />
          <input className="flex-1 text-[16px] font-black outline-none" placeholder="Search" />
          <Link to="/"><X size={26} /></Link>
        </div>

        <h2 className="mt-7 text-[18px] font-black uppercase">Most Searched Products:</h2>

        <div className="mt-8 space-y-7">
          {products.map(([name, price, image]) => (
            <Link key={name} to="/product/1" className="flex gap-4">
              <img src={image} alt="" className="h-[72px] w-[80px] object-cover" />
              <div>
                <h3 className="text-[16px] font-black">{name}</h3>
                <p className="mt-2 text-[15px] font-black">{price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
