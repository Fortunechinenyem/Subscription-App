import React, { useState } from "react";
import HeroSection from "../Component/Hero";
import PlanSelection from "../Component/PlanSelection";
import BillingDateSelection from "../Component/BillingDateSelection";

const plans: { [key: string]: { price: number; description: string } } = {
  Basic: {
    price: 29,
    description: "Access to basic features and standard quality streaming.",
  },
  Standard: {
    price: 39,
    description: "Access to HD streaming and additional features.",
  },
  Premium: {
    price: 59,
    description: "Access to 4K streaming and premium features.",
  },
};

const HomePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [billingDate, setBillingDate] = useState<string>("");

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleSelectDate = (date: string) => {
    setBillingDate(date);
  };

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto my-8">
        {!selectedPlan && (
          <PlanSelection plans={plans} onSelectPlan={handleSelectPlan} />
        )}
        {selectedPlan && !billingDate && (
          <BillingDateSelection onSelectDate={handleSelectDate} />
        )}
        {selectedPlan && billingDate && (
          <div className="summary-container mt-8 p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Summary:</h2>
            <p className="text-lg">
              You've selected the <strong>{selectedPlan}</strong> plan.
            </p>
            <p className="text-lg">
              Your billing date is set for the <strong>{billingDate}</strong>.
            </p>
            <p className="text-lg">
              <strong>${plans[selectedPlan].price}</strong> will be charged per
              month.
            </p>
            <button
              className="button mt-4"
              onClick={() => alert("Payment logic here")}
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
      <footer className=" mt-12 bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">
            Challenge Accepted by Fortune, Iya In Tech
          </p>
          <p className="text-white">Fortunechinenyem@gmail.com</p>
          <p className="text-white">08067585444</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
