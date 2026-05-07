// AnnouncementBar.jsx
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[80] h-[44px] bg-[#00617f] text-white">
      <a
        href="/shop"
        className="flex h-full items-center justify-center text-[15px] font-extrabold leading-none tracking-[-0.02em] hover:opacity-80"
      >
        Free Shipping on All Orders Over $65
      </a>

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute right-[28px] top-1/2 -translate-y-1/2 text-white hover:opacity-75"
      >
        <X size={17} strokeWidth={2} />
      </button>
    </div>
  );
}
