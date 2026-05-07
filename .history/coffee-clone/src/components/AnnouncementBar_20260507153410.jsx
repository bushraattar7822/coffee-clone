import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-joe-dark text-white text-center py-2.5 px-4 text-xs tracking-widest font-medium relative">
      <a href="/shop" className="underline hover:text-joe-blue transition-colors">
        Free Shipping on All Orders Over $65
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-joe-blue transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}