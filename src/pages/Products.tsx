import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { products, getBrands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as "phone" | "case" | null;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "phone" | "case">(categoryParam || "all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(() => getBrands(category === "all" ? undefined : category), [category]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (selectedBrand !== "all" && p.brand !== selectedBrand) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [category, selectedBrand, priceRange, search]);

  const setTab = (cat: "all" | "phone" | "case") => {
    setCategory(cat);
    setSelectedBrand("all");
    if (cat === "all") searchParams.delete("category");
    else searchParams.set("category", cat);
    setSearchParams(searchParams);
  };

  return (
    <div className="container py-8">
      <h1 className="font-display text-3xl font-bold mb-6">
        {category === "phone" ? "Smartphones" : category === "case" ? "Phone Cases" : "All Products"}
      </h1>

      {/* Search & filter toggle */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "phone", "case"] as const).map((cat) => (
          <Button key={cat} variant={category === cat ? "default" : "outline"} size="sm" onClick={() => setTab(cat)}>
            {cat === "all" ? "All" : cat === "phone" ? "Phones" : "Cases"}
          </Button>
        ))}
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="mb-6 rounded-xl border border-border bg-card p-4 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Filters</p>
            <Button variant="ghost" size="sm" onClick={() => { setSelectedBrand("all"); setPriceRange([0, 150000]); }}>
              Clear All
            </Button>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Brand</p>
            <div className="flex flex-wrap gap-2">
              <Button variant={selectedBrand === "all" ? "default" : "outline"} size="sm" onClick={() => setSelectedBrand("all")}>All</Button>
              {brands.map((b) => (
                <Button key={b} variant={selectedBrand === b ? "default" : "outline"} size="sm" onClick={() => setSelectedBrand(b)}>{b}</Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Max Price: ₹{priceRange[1].toLocaleString('en-IN')}</p>
            <input type="range" min={0} max={150000} value={priceRange[1]} onChange={(e) => setPriceRange([0, Number(e.target.value)])} className="w-full accent-primary" />
          </div>
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-semibold">No products found</p>
          <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
