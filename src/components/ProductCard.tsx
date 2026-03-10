import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Star } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <div className="relative aspect-square bg-secondary p-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">
              -{discount}%
            </span>
          )}
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
          <h3 className="font-display font-semibold text-card-foreground leading-tight line-clamp-1">{product.name}</h3>
          {product.category === "case" && product.compatibleWith && (
            <p className="text-xs text-muted-foreground">For {product.compatibleWith}</p>
          )}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            <span className="text-xs font-medium text-muted-foreground">{product.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
