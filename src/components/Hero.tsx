import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Latest smartphones" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="container relative z-10 flex min-h-[480px] items-center py-16 md:min-h-[560px]">
        <div className="max-w-lg space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">New Arrivals 2024</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            The Future of Mobile
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Discover the latest flagship smartphones and premium accessories at unbeatable prices.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/products?category=phone">
              <Button size="lg" className="gap-2">
                Shop Phones <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/products?category=case">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20">
                Shop Cases
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
