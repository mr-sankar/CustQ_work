import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShoppingCart, Star, ChevronLeft, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container flex flex-col items-center justify-center py-20">
        <p className="text-lg font-semibold">Product not found</p>
        <Link to="/products"><Button variant="outline" className="mt-4">Back to Products</Button></Link>
      </div>
    );
  }

  const color = selectedColor || product.colors[0];
  const storage = selectedStorage || product.storage?.[0];

  const handleAdd = () => {
    addItem(product, color, storage);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container py-8">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-2xl bg-secondary p-8 lg:p-16">
          <img src={product.images[0]} alt={product.name} className="max-h-80 w-auto object-contain" />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{product.brand}</p>
            <h1 className="font-display text-3xl font-bold mt-1 md:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{product.rating}</span>
              {product.stock > 0 ? (
                <span className="ml-2 text-xs font-medium text-success">In Stock</span>
              ) : (
                <span className="ml-2 text-xs font-medium text-destructive">Out of Stock</span>
              )}
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Color picker */}
          <div>
            <p className="text-sm font-semibold mb-2">Color: {color}</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <Button key={c} variant={color === c ? "default" : "outline"} size="sm" onClick={() => setSelectedColor(c)}>
                  {c}
                </Button>
              ))}
            </div>
          </div>

          {/* Storage picker */}
          {product.storage && (
            <div>
              <p className="text-sm font-semibold mb-2">Storage: {storage}</p>
              <div className="flex flex-wrap gap-2">
                {product.storage.map((s) => (
                  <Button key={s} variant={storage === s ? "default" : "outline"} size="sm" onClick={() => setSelectedStorage(s)}>
                    {s}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Compatible with */}
          {product.compatibleWith && (
            <p className="text-sm text-muted-foreground">Compatible with: <span className="font-medium text-foreground">{product.compatibleWith}</span></p>
          )}

          <Button size="lg" className="w-full gap-2" onClick={handleAdd} disabled={product.stock === 0}>
            {added ? <><Check className="h-4 w-4" /> Added to Cart</> : <><ShoppingCart className="h-4 w-4" /> Add to Cart</>}
          </Button>

          {/* Specs */}
          <div className="rounded-xl border border-border p-4">
            <p className="font-semibold text-sm mb-3">Specifications</p>
            <dl className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
