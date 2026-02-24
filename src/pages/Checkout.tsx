import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Checkout: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart, itemCount } = useCart();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", payment: "UPI",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    toast.success("Order placed successfully! 🎉 Thank you for shopping with Crown Garden Botanica.");
    clearCart();
    setFormData({ name: "", email: "", phone: "", address: "", payment: "UPI" });
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="mb-8 font-display text-3xl font-bold text-foreground">
        <ShoppingBag className="mr-2 inline h-8 w-8" />
        Your Cart ({itemCount} items)
      </h1>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Cart items */}
        <div className="lg:col-span-3">
          {items.length === 0 ? (
            <div className="rounded-lg border bg-card p-12 text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/30" />
              <p className="mt-4 text-lg text-muted-foreground">Your cart is empty</p>
              <Link to="/products">
                <Button className="mt-4" variant="default">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-4 rounded-lg border bg-card p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-display font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="w-20 text-right font-bold text-primary">
                      ₹{item.price * item.quantity}
                    </p>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div className="flex justify-between rounded-lg bg-muted px-6 py-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold text-primary">₹{total}</span>
              </div>
            </div>
          )}
        </div>

        {/* Customer form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-6">
            <h2 className="mb-6 font-display text-xl font-bold">Customer Details</h2>
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                placeholder="Delivery Address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />

              <div>
                <label className="mb-2 block text-sm font-medium">Payment Method</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.payment}
                  onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                >
                  <option value="UPI">UPI</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="COD">Cash on Delivery</option>
                </select>
              </div>

              <Button type="submit" className="w-full gap-2" size="lg" disabled={items.length === 0}>
                Place Order — ₹{total}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
