import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, changeQty, removeFromCart, total, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* HEAD */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-joe-light">
              <h3 className="text-sm font-semibold tracking-widest uppercase">Your Cart ({count})</h3>
              <button onClick={() => setIsOpen(false)} className="hover:text-joe-blue transition-colors"><X size={20}/></button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto px-8 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-joe-mid">
                  <ShoppingBag size={48} strokeWidth={1}/>
                  <p className="text-sm">Your cart is empty</p>
                  <button onClick={() => setIsOpen(false)} className="bg-joe-dark text-white px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-joe-blue transition-colors">
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 py-5 border-b border-joe-light">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover bg-joe-cream flex-shrink-0"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-snug mb-1">{item.name}</p>
                      <p className="text-xs text-joe-mid mb-3">{item.sub}</p>
                      <div className="flex items-center gap-3">
                        <button onClick={() => changeQty(item.id, -1)} className="w-6 h-6 border border-joe-light flex items-center justify-center hover:border-joe-dark transition-colors"><Minus size={12}/></button>
                        <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} className="w-6 h-6 border border-joe-light flex items-center justify-center hover:border-joe-dark transition-colors"><Plus size={12}/></button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeFromCart(item.id)} className="text-joe-mid hover:text-red-500 transition-colors"><X size={14}/></button>
                      <p className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="px-8 py-6 border-t border-joe-light">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="text-lg font-semibold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-joe-dark text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-joe-blue transition-colors">
                  Proceed to Checkout
                </button>
                <button onClick={() => setIsOpen(false)} className="w-full mt-3 border border-joe-dark py-3 text-xs font-semibold tracking-widest uppercase hover:bg-joe-cream transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}