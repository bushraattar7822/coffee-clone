import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { count } = useCart();

  return (
    <main className="fixed inset-0 z-[100] bg-black/55 font-['Nunito'] text-[#24282a]">
      <section className="ml-auto h-screen w-full max-w-[460px] bg-white px-5 py-5">
        <div className="flex items-center justify-between border-b border-gray-200 pb-5">
          <h1 className="text-[26px] font-black">Your cart ({count || 0})</h1>
          <Link to="/">
            <X size={24} />
          </Link>
        </div>

        <p className="mt-8 text-center text-[16px] font-black">
          Your cart is empty
        </p>
      </section>
    </main>
  );
}
