import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <main className="min-h-screen bg-white font-['Nunito'] text-[#24282a]">
      <section className="ml-auto min-h-screen w-full max-w-[460px] border-l bg-white px-5 py-5">
        <div className="flex items-center justify-between border-b pb-5">
          <h1 className="text-[26px] font-black">Your cart (0)</h1>
          <Link to="/"><X size={25} /></Link>
        </div>

        <p className="mt-14 text-center text-[16px] font-black">Your cart is empty</p>
      </section>
    </main>
  );
}
