import React, { useState } from 'react';
import { Check, Zap, Target, Crown } from 'lucide-react';

export default function SeoPlans() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Guerrilla',
      icon: <Target className="w-8 h-8 text-orange-500" />,
      price: billingPeriod === 'monthly' ? 4995 : 3996,
      description: 'Lean but lethal – a high-impact SEO foundation blitz with minimal overhead, engineered for quick wins.',
      features: [
        'Comprehensive site audit',
        'Keyword mapping & competitor recon',
        'Clients Monitoring Dashboard',
        'On-page optimization (titles, H1s, schema, Core Web Vitals)'
      ],
      color: 'orange',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      name: 'Blitz',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      price: billingPeriod === 'monthly' ? 9995 : 7996,
      description: 'Double the firepower – an aggressive, AI-enhanced campaign that amplifies every tactic to seize market share and crush the competition.',
      features: [
        'All in Guerrilla, plus:',
        'AI-driven A/B experimentation & copy tuning',
        'Priority add-on queue & early access to beta AI modules',
        'Local SEO strongholds (GBP, citations, hyper-local pages)'
      ],
      color: 'blue',
      gradient: 'from-blue-400 to-purple-500',
      popular: true
    },
    {
      name: 'Shock & Awe',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      price: billingPeriod === 'monthly' ? 19995 : 15996,
      description: 'Unrestricted supremacy – an all-inclusive, unlimited SEO offensive fueled by proprietary AI for total search domination.',
      features: [
        'All in Blitz, plus:',
        '24/7 strategist hotline & bespoke AEO engineering',
        'International / multi-language SEO',
        'Custom AI model training',
        'White-label reporting & client portals'
      ],
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.05),transparent_50%)]"></div>
      
      <div className="relative px-4 py-16 mx-auto lg:px-36">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-red-800 via-orange-400 to-red-800 bg-clip-text text-transparent">
            SEO Plans & Pricing
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Find the Perfect SEO Strategy & Budget: Explore Our Plans & Pricing Today
          </p>
          <p className="text-lg text-gray-600">
            Comprehensive SEO Plans & Transparent Pricing (Toronto & GTA, ON)
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100/80 backdrop-blur-sm rounded-full p-2 border border-gray-300">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annually')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  billingPeriod === 'annually'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Pay annually
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2 py-1 rounded-full">
                  2 months free
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative bg-white backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 shadow-lg ${
                plan.popular
                  ? 'border-blue-400/50 shadow-2xl shadow-blue-500/10 scale-105'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
              } ${
                hoveredPlan === index ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">Starts at</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-gray-600 text-lg ml-1">
                    /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 mb-8 bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-${plan.color}-500/25 hover:scale-105 transform`}>
                Activate My Free Trial
              </button>

              {/* Features */}
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">
                  {plan.name === 'Guerrilla' ? 'Included in Guerrilla:' : 
                   plan.name === 'Blitz' ? 'All in Guerrilla, plus:' : 
                   'All in Blitz, plus:'}
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 text-${plan.color}-400`} />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                        {feature.includes('NEW') && (
                          <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 rounded-2xl transition-opacity duration-300 ${
                hoveredPlan === index ? 'opacity-5' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Additional taxes may apply depending on your country.
          </p>
        </div>

        {/* Special Discount Programs */}
        <div className="mt-20  mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Discount Programs</h2>
            <p className="text-lg text-gray-600">We support diverse businesses with exclusive pricing opportunities</p>
          </div>

          <div className="space-y-6">
            {/* Non-Profit Organizations */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Registered Non-Profit & Charitable Organizations</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Mission-Driven Status Aligns With Our Social-Impact Mandate.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Women-Owned Start-Ups */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Women-Owned / Women-Led Start-Ups</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: We Champion Gender Equity By Amplifying Female Founders' Market Share.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* BIPOC-Owned Businesses */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Black, Indigenous & People Of Colour (BIPOC)-Owned Businesses</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Correcting Historic Under-Representation Through Aggressive Reach Expansion.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Indigenous-Owned Enterprises */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Indigenous-Owned Enterprises (First Nations, Inuit, Métis)</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Prioritized To Honour TRC Economic-Reconciliation Calls To Action.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* LGBTQ2S+-Owned Ventures */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LGBTQ2S+-Owned Or Led Ventures</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Supporting Inclusive Commerce And Authentic Community Engagement.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* PWD-Owned Companies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Persons With Disabilities (PWD)-Owned Companies</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Elevating Adaptive Innovation And Universal-Design Champions.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Senior Entrepreneurs */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Entrepreneurs (55 +)</h3>
                  <p className="text-gray-700 mb-3">Why We Grant The Concession: Leveraging Seasoned Expertise For Late-Career Market Disruption.</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">Get Started With A 25% Discount On My Plan</p>
                    <p>Contact sales to receive an estimate</p>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}