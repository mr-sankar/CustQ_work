import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { CheckCircle, XCircle, Loader } from "lucide-react";

const PaymentStatus = () => {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"SUCCESS" | "FAILED" | "PENDING" |null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/payment/verify-payment/${orderId}`
        );

        if (res.data.status === "SUCCESS") {
          setStatus("SUCCESS");
        } else {
          setStatus("FAILED");
        }
      } catch {
        setStatus("FAILED");
      } finally {
        setLoading(false);
      }
    };

    if (orderId) verifyPayment();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader className="h-10 w-10 animate-spin mb-4" />
        <p>Verifying payment...</p>
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center justify-center py-20 text-center">
      {status === "SUCCESS" ? (
        <>
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-2xl font-bold">Payment Successful</h1>
          <p className="mt-2">Order ID: {orderId}</p>
        </>
      ) : (
        <>
          <XCircle className="h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold">Payment Failed</h1>
        </>
      )}

      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-black text-white rounded">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default PaymentStatus;