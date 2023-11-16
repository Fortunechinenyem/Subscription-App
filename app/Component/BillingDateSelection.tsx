// components/BillingDateSelection.tsx

import React, { useState } from "react";

interface BillingDateSelectionProps {
  onSelectDate: (date: string) => void;
}

const BillingDateSelection: React.FC<BillingDateSelectionProps> = ({
  onSelectDate,
}) => {
  const [billingDate, setBillingDate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSelectDate(billingDate);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">
          Choose your billing date:
        </h2>
        <div className="mb-4">
          <label
            htmlFor="billingDate"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="number"
            id="billingDate"
            name="billingDate"
            placeholder="Enter billing date (1-28)"
            value={billingDate}
            onChange={handleDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min="1"
            max="28"
          />
        </div>
        <button type="submit" className="button w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingDateSelection;
