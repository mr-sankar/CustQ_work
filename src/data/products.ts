export type Product = {
  id: string;
  name: string;
  category: "phone" | "case";
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  specs: Record<string, string>;
  colors: string[];
  storage?: string[];
  caseType?: string;
  compatibleWith?: string;
  stock: number;
  featured: boolean;
  rating: number;
};

export const products: Product[] = [
  {
    id: "phone-1",
    name: "Galaxy S24 Ultra",
    category: "phone",
    brand: "Samsung",
    price: 107999,
    originalPrice: 117999,
    description: "The ultimate smartphone experience with an advanced AI-powered camera, S Pen, and titanium frame. Capture stunning photos day and night with the 200MP sensor.",
    images: ["/images/galaxy-s24-ultra.jpg"],
    specs: {
      Display: '6.8" Dynamic AMOLED 2X',
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Battery: "5000 mAh",
      Camera: "200MP + 50MP + 12MP + 10MP",
      OS: "Android 14",
    },
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    storage: ["256GB", "512GB", "1TB"],
    stock: 25,
    featured: true,
    rating: 4.8,
  },
  {
    id: "phone-2",
    name: "iPhone 15 Pro Max",
    category: "phone",
    brand: "Apple",
    price: 99999,
    description: "Forged in titanium with the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    images: ["/images/iphone-15-pro-max.jpg"],
    specs: {
      Display: '6.7" Super Retina XDR',
      Processor: "A17 Pro",
      RAM: "8GB",
      Battery: "4441 mAh",
      Camera: "48MP + 12MP + 12MP",
      OS: "iOS 17",
    },
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    stock: 30,
    featured: true,
    rating: 4.9,
  },
  {
    id: "phone-3",
    name: "Pixel 8 Pro",
    category: "phone",
    brand: "Google",
    price: 82999,
    originalPrice: 89999,
    description: "Google's most advanced phone yet with the Tensor G3 chip, AI-powered photography, and 7 years of OS and security updates.",
    images: ["/images/pixel-8-pro.jpg"],
    specs: {
      Display: '6.7" LTPO OLED',
      Processor: "Tensor G3",
      RAM: "12GB",
      Battery: "5050 mAh",
      Camera: "50MP + 48MP + 48MP",
      OS: "Android 14",
    },
    colors: ["Obsidian", "Porcelain", "Bay"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    stock: 20,
    featured: true,
    rating: 4.7,
  },
  {
    id: "phone-4",
    name: "OnePlus 12",
    category: "phone",
    brand: "OnePlus",
    price: 64999,
    description: "Flagship killer with Snapdragon 8 Gen 3, 100W fast charging, and Hasselblad camera system.",
    images: ["/images/oneplus-12.jpg"],
    specs: {
      Display: '6.82" LTPO AMOLED',
      Processor: "Snapdragon 8 Gen 3",
      RAM: "16GB",
      Battery: "5400 mAh",
      Camera: "50MP + 48MP + 64MP",
      OS: "Android 14",
    },
    colors: ["Silky Black", "Flowy Emerald"],
    storage: ["256GB", "512GB"],
    stock: 15,
    featured: false,
    rating: 4.6,
  },
  {
    id: "case-1",
    name: "Crystal Clear Case",
    category: "case",
    brand: "TechShield",
    price: 2499,
    description: "Ultra-thin transparent case with military-grade drop protection. Shows off your phone's original design while keeping it safe.",
    images: ["/images/crystal-clear-case.jpg"],
    specs: {
      Material: "TPU + Polycarbonate",
      Protection: "Military Grade (MIL-STD-810G)",
      Weight: "28g",
    },
    colors: ["Clear", "Clear Black", "Clear Blue"],
    caseType: "Clear",
    compatibleWith: "iPhone 15 Pro Max",
    stock: 100,
    featured: true,
    rating: 4.5,
  },
  {
    id: "case-2",
    name: "Leather Wallet Case",
    category: "case",
    brand: "LuxCase",
    price: 4999,
    originalPrice: 6499,
    description: "Premium genuine leather wallet case with card slots and magnetic closure. Elegant protection meets daily convenience.",
    images: ["/images/leather-wallet-case.jpg"],
    specs: {
      Material: "Genuine Leather",
      CardSlots: "3",
      MagSafe: "Compatible",
    },
    colors: ["Black", "Tan", "Navy"],
    caseType: "Wallet",
    compatibleWith: "iPhone 15 Pro Max",
    stock: 50,
    featured: true,
    rating: 4.7,
  },
  {
    id: "case-3",
    name: "Rugged Armor Case",
    category: "case",
    brand: "TechShield",
    price: 3299,
    description: "Heavy-duty protection with shock-absorbing corners and raised edges for screen and camera protection.",
    images: ["/images/rugged-armor-case.jpg"],
    specs: {
      Material: "Dual Layer TPU + PC",
      Protection: "20ft Drop Tested",
      Weight: "42g",
    },
    colors: ["Matte Black", "Dark Blue", "Forest Green"],
    caseType: "Rugged",
    compatibleWith: "Galaxy S24 Ultra",
    stock: 75,
    featured: true,
    rating: 4.6,
  },
  {
    id: "case-4",
    name: "Slim Silicone Case",
    category: "case",
    brand: "SoftTouch",
    price: 1599,
    description: "Minimalist silicone case with a soft-touch finish. Ultra-slim profile adds barely any bulk.",
    images: ["/images/slim-silicone-case.jpg"],
    specs: {
      Material: "Liquid Silicone",
      Protection: "Basic Drop Protection",
      Weight: "18g",
    },
    colors: ["Midnight", "Storm Blue", "Sage", "Pink Sand"],
    caseType: "Silicone",
    compatibleWith: "Pixel 8 Pro",
    stock: 120,
    featured: false,
    rating: 4.3,
  },
  {
    id: "case-5",
    name: "MagSafe Carbon Case",
    category: "case",
    brand: "CarbonX",
    price: 3999,
    description: "Aramid fiber case with built-in MagSafe magnets. Featherlight yet incredibly strong.",
    images: ["/images/magsafe-carbon-case.jpg"],
    specs: {
      Material: "Aramid Fiber",
      MagSafe: "Built-in",
      Weight: "15g",
    },
    colors: ["Carbon Black", "Carbon Grey"],
    caseType: "Carbon",
    compatibleWith: "iPhone 15 Pro Max",
    stock: 40,
    featured: false,
    rating: 4.8,
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getPhones = () => products.filter((p) => p.category === "phone");
export const getCases = () => products.filter((p) => p.category === "case");
export const getBrands = (category?: "phone" | "case") => {
  const filtered = category ? products.filter((p) => p.category === category) : products;
  return [...new Set(filtered.map((p) => p.brand))];
};
