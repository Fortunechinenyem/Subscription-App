import React, { useState } from "react";
import HeroSection from "../Component/Hero";
import PlanSelection from "../Component/PlanSelection";
import BillingDateSelection from "../Component/BillingDateSelection";
import { plans } from "../constants";
import PaymentForm from "../Component/PaymentForm";

const Summary: React.FC<{
  selectedPlan: string;
  billingDate: string;
  onPayNow: () => void;
}> = ({ selectedPlan, billingDate, onPayNow }) => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Summary:</h2>
      <p className="text-lg">
        You've selected the <strong>{selectedPlan}</strong> plan.
      </p>
      <p className="text-lg">
        Your billing date is set for the <strong>{billingDate}</strong>.
      </p>
      <p className="text-lg">
        <strong>${plans[selectedPlan].price}</strong> will be charged per month.
      </p>
      <PaymentForm onPaymentSuccess={onPayNow} />
    </div>
  );
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

  const handlePayNow = () => {
    alert("Payment logic here");
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
          <Summary
            selectedPlan={selectedPlan}
            billingDate={billingDate}
            onPayNow={handlePayNow}
          />
        )}
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">Challenge accepted by Fortune, IyaInTech</p>
          <p className="text-white">fortunechinenyem@gmail.com</p>
          <p className="text-white">+2348067585444</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
