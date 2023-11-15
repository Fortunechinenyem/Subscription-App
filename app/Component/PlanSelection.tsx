import React from "react";

interface PlanSelectionProps {
  plans: { [key: string]: { price: number; description: string } };
  onSelectPlan: (plan: string) => void;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({
  plans,
  onSelectPlan,
}) => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Choose a subscription plan:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(plans).map(([plan, { price, description }]) => (
          <div
            key={plan}
            className="cursor-pointer border border-gray-300 rounded overflow-hidden transition-transform transform hover:scale-105"
            onClick={() => onSelectPlan(plan)}
          >
            <input
              type="radio"
              id={plan}
              name="plan"
              className="hidden"
              onChange={() => onSelectPlan(plan)}
            />
            <label htmlFor={plan} className="block p-4 text-center">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold">{plan}</h3>
                <p className="text-gray-600">${price}/month</p>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;
