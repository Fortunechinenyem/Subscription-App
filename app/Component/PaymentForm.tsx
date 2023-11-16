import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-stripe-publishable-key");

const PaymentForm: React.FC<{ onPaymentSuccess: () => void }> = ({
  onPaymentSuccess,
}) => {
  const handlePayment = async () => {
    const stripe = await stripePromise;

    const result = await stripe?.redirectToCheckout({
      lineItems: [{ price: "price_1Jek7ZABC1234567", quantity: 1 }],
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/cancel",
    });

    if (result?.error) {
      console.error(result.error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Payment:</h2>
      <p className="text-lg">
        Total Amount: ${/* Add logic to calculate the total amount */}
      </p>
      <button className="button w-full mt-4" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentForm;
