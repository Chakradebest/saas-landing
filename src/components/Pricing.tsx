"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for side projects and MVPs",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 1,000 monthly active users",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
      "Community integrations",
      "7-day data retention",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams and businesses",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 50,000 monthly active users",
      "Advanced analytics & funnels",
      "Priority email & chat support",
      "10 team members",
      "All integrations + API access",
      "Unlimited data retention",
      "Custom events & segmentation",
      "SSO (SAML/OIDC)",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      "Unlimited monthly active users",
      "Custom analytics & reporting",
      "24/7 dedicated support + SLA",
      "Unlimited team members",
      "Custom integrations & on-premise",
      "Advanced security & compliance",
      "Dedicated success manager",
      "Custom contracts & billing",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Choose the plan that's right for you. All plans include a 14-day free trial. No credit card required.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !yearly
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                yearly
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Yearly
              <span className="absolute -top-2 right-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-indigo-500 bg-white dark:bg-slate-900 shadow-xl shadow-indigo-500/10 scale-105 z-10"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">/month</span>
                </div>
                {yearly && plan.yearlyPrice > 0 && (
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                    Billed yearly (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-through">
                    ${plan.monthlyPrice}/month billed monthly
                  </p>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}