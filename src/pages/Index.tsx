import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, ShieldCheck, Sparkles } from "lucide-react";
import { herbalProducts, bouquetProducts, collections } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index: React.FC = () => {
  const featuredHerbal = herbalProducts.slice(0, 4);
  const featuredBouquets = bouquetProducts.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-botanical-light blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              🌿 Nature • Beauty • Wellness
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Crown Garden Botanica
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Premium herbal and botanical products crafted with hand-picked flowers.
              100% natural, eco-friendly, and chemical-free — inspired by nature.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="gap-2 text-base">
                  Shop Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/bouquets">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-transparent bg-gold text-base text-accent-foreground hover:bg-gold/90"
                >
                  View Bouquets
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo banner */}
      <div className="bg-accent py-3 text-center text-sm font-semibold text-accent-foreground">
        🎉 20% OFF on Herbal Products &nbsp;|&nbsp; 🌹 Buy 2 Get 1 Free on Roses &nbsp;|&nbsp; 🚚 Free Delivery Above ₹999
      </div>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">Why Choose Us?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Leaf, title: "100% Natural", desc: "Pure ingredients from nature" },
            { icon: Sparkles, title: "Eco-Friendly", desc: "Sustainable packaging" },
            { icon: ShieldCheck, title: "Quality Assured", desc: "Lab-tested products" },
            { icon: Truck, title: "Fast Delivery", desc: "Free above ₹999" },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="rounded-lg border bg-card p-6 text-center shadow-sm"
            >
              <item.icon className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Collection */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">Our Flower Collection</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            Explore our diverse range of flowers, each with unique herbal and beauty benefits.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {collections.map((c) => (
              <motion.div
                key={c.name}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-full border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-colors hover:border-primary hover:bg-botanical-light"
              >
                {c.emoji} {c.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Herbal Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-foreground">Herbal Products</h2>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredHerbal.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Bouquets */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold text-foreground">Fresh Bouquets</h2>
            <Link to="/bouquets" className="text-sm font-medium text-primary hover:underline">
              View All →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBouquets.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">About Crown Garden Botanica</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Welcome to Crown Garden Botanica, your trusted destination for premium herbal
            and botanical products. We specialize in herbal extracts, dry leaves powders,
            essential oils, skincare products, seeds, and organic botanical collections.
            Every product is carefully prepared to maintain purity and freshness.
          </p>
          <p className="mt-4 text-muted-foreground">
            At Crown Garden Botanica, we believe nature is the true healer.
            Our vision is to promote a healthy lifestyle through sustainable
            and plant-based solutions.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
