import React from "react";

interface PlanSelectionProps {
  plans: { [key: string]: number };
  onSelectPlan: (plan: string) => void;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({
  plans,
  onSelectPlan,
}) => {
  return (
    <div>
      <h2>Choose a subscription plan:</h2>
      {Object.entries(plans).map(([plan, price]) => (
        <div key={plan}>
          <input
            type="radio"
            id={plan}
            name="plan"
            onChange={() => onSelectPlan(plan)}
          />
          <label htmlFor={plan}>{`${plan}: $${price}/month`}</label>
        </div>
      ))}
    </div>
  );
};

export default PlanSelection;
