import { Smartphone, Shell } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50 mt-16">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-gradient">MobiStore</p>
          <p className="mt-2 text-sm text-muted-foreground">Your trusted destination for the latest smartphones and premium accessories.</p>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5" /> Phones</li>
            <li className="flex items-center gap-1.5"><Shell className="h-3.5 w-3.5" /> Phone Cases</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Support</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Shipping & Returns</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Legal</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2024 MobiStore. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
