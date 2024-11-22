import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '299',
    features: [
      'Basic video editing',
      'Color correction',
      'Up to 5 minutes',
      '2 revisions',
      '3-day delivery',
    ],
  },
  {
    name: 'Professional',
    price: '599',
    features: [
      'Advanced editing',
      'Color grading',
      'Up to 15 minutes',
      '5 revisions',
      'Sound design',
      '5-day delivery',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '999',
    features: [
      'Complex editing',
      'Advanced VFX',
      'Unlimited duration',
      'Unlimited revisions',
      'Custom music',
      'Priority support',
      '7-day delivery',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your video editing needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="ml-1 text-gray-400">/project</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}