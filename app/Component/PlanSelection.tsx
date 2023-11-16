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
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choose a subscription plan:
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {Object.entries(plans).map(([plan, { price, description }]) => (
          <div
            key={plan}
            className="cursor-pointer bg-white border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto"
            onClick={() => onSelectPlan(plan)}
          >
            <input
              type="radio"
              id={plan}
              name="plan"
              className="hidden"
              onChange={() => onSelectPlan(plan)}
            />
            <label
              htmlFor={plan}
              className="block p-6 text-center rounded-t-lg"
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold">{plan}</h3>
                <p className="text-black">${price}/month</p>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;
