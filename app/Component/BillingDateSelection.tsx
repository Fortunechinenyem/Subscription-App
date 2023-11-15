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
    <form onSubmit={handleSubmit}>
      <h2>Choose your billing date:</h2>
      <input
        type="number"
        placeholder="Enter billing date (1-28)"
        value={billingDate}
        onChange={handleDateChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BillingDateSelection;
