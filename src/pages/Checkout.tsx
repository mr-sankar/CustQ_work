import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";
import { ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice } = useCart();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      setLoading(true);

      // Load Cashfree
      const cashfree = await load({ mode: "sandbox" });

      // Call backend to create order
      const res = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: totalPrice,
          customerName: `${form.firstName} ${form.lastName}`,
          customerEmail: form.email,
          customerPhone: form.phone,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { paymentSessionId } = res.data;

      // Open Cashfree checkout
      await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/40 mb-4" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* FORM */}
        <form onSubmit={handlePayment} className="lg:col-span-3 space-y-6">
          <div className="border rounded-xl p-6 space-y-4">
            <h2 className="font-semibold">Customer Details</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input id="firstName" required onChange={handleChange} />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input id="lastName" required onChange={handleChange} />
              </div>
            </div>

            <div>
              <Label>Email</Label>
              <Input id="email" type="email" required onChange={handleChange} />
            </div>

            <div>
              <Label>Phone</Label>
              <Input id="phone" required onChange={handleChange} />
            </div>
          </div>

          <div className="border rounded-xl p-6 space-y-4">
            <h2 className="font-semibold">Shipping Address</h2>

            <Input id="address" placeholder="Address" required onChange={handleChange} />
            <div className="grid sm:grid-cols-3 gap-4">
              <Input id="city" placeholder="City" required onChange={handleChange} />
              <Input id="state" placeholder="State" required onChange={handleChange} />
              <Input id="zip" placeholder="ZIP" required onChange={handleChange} />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Redirecting to payment..." : `Pay ₹${totalPrice}`}
          </Button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="lg:col-span-2">
          <div className="border rounded-xl p-6 sticky top-24 space-y-4">
            <h2 className="font-semibold">Order Summary</h2>

            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>
                  ₹{item.product.price * item.quantity}
                </span>
              </div>
            ))}

            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;