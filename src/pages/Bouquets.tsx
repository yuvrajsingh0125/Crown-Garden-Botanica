import React, { useState } from "react";
import { bouquetProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Bouquets: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = bouquetProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">🌸 Flower Bouquets</h1>
        <p className="mt-2 text-muted-foreground">
          Handcrafted bouquets for every occasion — weddings, birthdays, anniversaries & more.
        </p>
      </div>

      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search bouquets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="mb-6 rounded-lg bg-accent/30 p-4 text-center text-sm font-medium text-accent-foreground">
        🎉 10% OFF on first purchase! &nbsp;|&nbsp; 🌹 Buy 2 Get 1 Free on Roses! &nbsp;|&nbsp; 💐 Free Delivery above ₹999
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No bouquets found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Bouquets;
