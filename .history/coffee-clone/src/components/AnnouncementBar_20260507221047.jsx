// AnnouncementBar.jsx
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="text-white text-center py-3 px-4 text-[15px] font-extrabold tracking-wide relative"
      style={{ background: "#00617f" }}
    >
      <a href="/shop" className="hover:text-white/80 transition-colors">
        Free Shipping on All Orders Over $65
      </a>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white/80 transition-colors"
      >
        <X size={15} />
      </button>
    </div>
  );
}
