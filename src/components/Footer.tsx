import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <span className="font-display text-lg font-bold">Crown Garden Botanica</span>
          </div>
          <p className="text-sm opacity-80">
            Your trusted destination for premium herbal and botanical products.
            100% natural, eco-friendly and chemical-free.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100">Home</Link>
            <Link to="/products" className="hover:opacity-100">Products</Link>
            <Link to="/bouquets" className="hover:opacity-100">Bouquets</Link>
            <Link to="/checkout" className="hover:opacity-100">Cart</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <p>📍 India, Punjab</p>
            <p>📧 floralculture@gmail.com</p>
            <p>🌿 Nature for Natural Beauty</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
        © 2026 Crown Garden Botanica | Floral Culture 🌸
      </div>
    </div>
  </footer>
);

export default Footer;
