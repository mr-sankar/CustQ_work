import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getPhones, getCases } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, CreditCard } from "lucide-react";

const Index = () => {
  const featuredPhones = getPhones().filter((p) => p.featured);
  const featuredCases = getCases().filter((p) => p.featured);

  return (
    <div>
      <Hero />

      {/* Trust badges */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
          {[
            { icon: Truck, label: "Free Shipping", desc: "On orders over ₹4,999" },
            { icon: Shield, label: "2-Year Warranty", desc: "On all phones" },
            { icon: CreditCard, label: "Secure Payment", desc: "100% protected" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3 justify-center">
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Phones */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Top Smartphones</h2>
          </div>
          <Link to="/products?category=phone">
            <Button variant="ghost" className="gap-1 text-sm">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPhones.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <section className="bg-primary">
        <div className="container flex flex-col items-center gap-4 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">Spring Sale — Up to 30% Off</h2>
          <p className="max-w-md text-primary-foreground/80">Get incredible deals on the latest phones and accessories. Limited time offer.</p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Accessories</p>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Premium Phone Cases</h2>
          </div>
          <Link to="/products?category=case">
            <Button variant="ghost" className="gap-1 text-sm">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
