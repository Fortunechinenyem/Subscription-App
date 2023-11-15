// pages/index.tsx

import React, { useState } from "react";
import PlanSelection from "../Component/PlanSelection";
import BillingDateSelection from "../Component/BillingDateSelection";

const plans: { [key: string]: number } = {
  Basic: 29,
  Standard: 39,
  Premium: 59,
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
    <div className="container">
      {!selectedPlan && (
        <PlanSelection plans={plans} onSelectPlan={handleSelectPlan} />
      )}
      {selectedPlan && !billingDate && (
        <BillingDateSelection onSelectDate={handleSelectDate} />
      )}
      {selectedPlan && billingDate && (
        <div className="summary - container">
          <h2>Summary:</h2>
          <p>Selected Plan: {selectedPlan}</p>
          <p>Billing Date: {billingDate}</p>
          <button
            className="button"
            onClick={() => alert("Payment logic here")}
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
