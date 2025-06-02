import React from 'react';
import { Check } from 'lucide-react'; // Importing Check icon from Lucide

// --- Data Definition ---
// This data structure holds all the content for the pricing plans and features.
// In a larger application, this might be fetched from an API or a separate data file.
const pricingPlans = [
  {
    name: "Guerrilla",
    price: "$4,995/month",
    contract: "1 year contract",
    description: "Launches a high-impact SEO blitz that secures page-one footholds and rapid ROI within a single quarter.",
    buttonText: "Activate My Free Trial",
    cancelText: "Cancel anytime. Pay nothing for 14 days."
  },
  {
    name: "Blitz",
    price: "$9,995/month",
    contract: "1 year contract",
    description: "AI-amplified tactics that accelerate authority and systematically erode competitor rankings, seizing mid-market share with measurable revenue lift.",
    buttonText: "Activate My Free Trial",
    cancelText: "Cancel anytime. Pay nothing for 21 days."
  },
  {
    name: "Shock & Awe",
    price: "$19,995/month",
    contract: "1 year contract",
    description: "Our full arsenal—unlimited implementations, executive strategy summits, and proprietary AI—delivers permanent search monopolization and enterprise-level ROI.",
    buttonText: "Activate My Free Trial",
    cancelText: "Cancel anytime. Pay nothing for 30 days."
  },
];

const featureCategories = [
  {
    category: "Core Technical SEO",
    items: [
      { name: "Comprehensive technical SEO audit & fixes", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Page speed & Core Web Vitals optimization", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Indexation & crawl optimization (XML, robots)", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "AI-powered technical monitoring & alerts", guerrilla: true, blitz: true, shockAndAwe: "24/7 AI monitoring" },
      // NEW FEATURE ADDED HERE:
      { name: "Structured data schema markup", guerrilla: true, blitz: true, shockAndAwe: true },
    ]
  },
  {
    category: "On-Page Optimization",
    items: [
      { name: "Keyword research & semantic mapping", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Pages optimized per month", guerrilla: "10 pages", blitz: "30 pages", shockAndAwe: "50 pages" },
      { name: "Competitor content gap analysis", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Internal linking strategy & optimization", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "On-page UX & conversion optimization", guerrilla: "-", blitz: "UX tweaks", shockAndAwe: "A/B Testing" },
    ]
  },
  {
    category: "Off-Page Authority",
    items: [
      { name: "Backlinks per month (quality & volume)", guerrilla: "50+ (DA 50+)", blitz: "100+ (DA 50+)", shockAndAwe: "150+ (DA 70+)" },
      { name: "Industry guest posts & niche backlinks", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Digital PR & media outreach", guerrilla: "-", blitz: true, shockAndAwe: true },
      { name: "Competitor backlink analysis & link gap", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Proprietary AI outreach & automation", guerrilla: "-", blitz: "-", shockAndAwe: true },
    ]
  },
  {
    category: "Local & Mobile SEO",
    items: [
      { name: "Google Business Profile optimization", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Local citation building (directories)", guerrilla: "20+ listings", blitz: "50+ listings", shockAndAwe: "100+ listings" },
      { name: "Localized landing pages & geo-content", guerrilla: "-", blitz: true, shockAndAwe: true },
      { name: "Online reviews monitoring & strategy", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Voice search optimization (local queries)", guerrilla: "-", blitz: "-", shockAndAwe: true },
    ]
  },
  {
    category: "Content & AI Assets",
    items: [
      { name: "SEO content pieces per month", guerrilla: "4 pieces", blitz: "8 pieces", shockAndAwe: "16 pieces" },
      { name: "Major content assets (whitepapers, infographics)", guerrilla: "-", blitz: "Quarterly", shockAndAwe: "Monthly" },
      { name: "Content strategy & editorial calendar", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "AI-driven content optimization (NLP)", guerrilla: "-", blitz: true, shockAndAwe: true },
      { name: "Proprietary AI content generation", guerrilla: "-", blitz: "-", shockAndAwe: true },
    ]
  },
  {
    category: "Analytics & Reporting",
    items: [
      { name: "Monthly SEO performance report", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Dedicated account strategist & support", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "Strategy consultation meetings", guerrilla: "Monthly", blitz: "Monthly", shockAndAwe: "Weekly" },
      { name: "Interactive SEO dashboard", guerrilla: true, blitz: true, shockAndAwe: true },
      { name: "AI predictive analytics & algorithm monitoring", guerrilla: "-", blitz: "-", shockAndAwe: true },
    ]
  },
];

// --- Header Component ---
// Displays the main title and introductory paragraph.
const Header = () => {
  return (
    <div className="md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4 rounded-md">
        Ready to Dominate? <br className="hidden sm:inline" /> Engage full-scale optimization.
      </h1>
      <p className="text-gray-600 text-lg rounded-md">
        Choose the SEO blueprint that matches your growth trajectory—whether you're laying the foundation for organic visibility or unleashing a full-scale search-dominance offensive.
      </p>
    </div>
  );
};

// --- Pricing Card Component ---
// Renders an individual pricing plan card.
const PricingCard = ({ plan }) => {
  // Add conditional styling for the "Shock & Awe" plan to make it stand out
  const isShockAndAwe = plan.name === "Shock & Awe";
  const cardClasses = `
    flex flex-col border rounded-xl shadow-lg overflow-hidden h-full
    transform transition-all duration-300 hover:scale-105 hover:shadow-xl
    ${isShockAndAwe ? 'border-indigo-600 ring ring-indigo-200 shadow-2xl' : 'border-gray-200'}
  `;

  return (
    <div className={cardClasses}>
      <div className="p-6 bg-white flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.name}</h3>
        <p className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</p>
        <p className="text-sm text-gray-500 mb-4">{plan.contract}</p>
        <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          {plan.buttonText}
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          {plan.cancelText}
        </p>
      </div>
    </div>
  );
};

// --- Feature Row Component ---
// Renders a single feature row with support indicators for each plan.
const FeatureRow = ({ feature, planNames }) => {
  const renderSupport = (value) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-500" />;
    } else if (value === false || value === "-") {
      return <span className="text-gray-400 text-sm">-</span>;
    } else {
      return <span className="text-gray-700 text-sm">{value}</span>;
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-150 rounded-md">
      <span className="text-gray-700 font-medium">{feature.name}</span>
      <div className="flex justify-around flex-1 ml-4">
        {/* Render support for Guerrilla plan */}
        <div className="flex-1 text-center">
          {renderSupport(feature.guerrilla)}
        </div>
        {/* Render support for Blitz plan */}
        <div className="flex-1 text-center">
          {renderSupport(feature.blitz)}
        </div>
        {/* Render support for Shock & Awe plan */}
        <div className="flex-1 text-center">
          {renderSupport(feature.shockAndAwe)}
        </div>
      </div>
    </li>
  );
};

// --- Feature Section Component ---
// Groups features under a category title.
const FeatureSection = ({ category, planNames }) => {
  return (
    <div className="mt-8 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <h4 className="p-4 bg-gray-100 text-lg font-bold text-gray-800 border-b border-gray-200 rounded-t-xl">
        {category.category}
      </h4>
      <ul className="divide-y divide-gray-200">
        {category.items.map((feature, index) => (
          <FeatureRow key={index} feature={feature} planNames={planNames} />
        ))}
      </ul>
    </div>
  );
};

// --- Main App Component ---
// Orchestrates all the components and data.
function SeoPricing() {
  // Extract plan names for consistent column headers in features
  const planNames = pricingPlans.map(plan => plan.name);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top section with title and description */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12">
          <Header />
          {/* Pricing cards section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* Feature comparison section headers */}
        <div className="hidden md:flex justify-end pr-4 mb-4">
          <div className="flex flex-1 ml-auto">
            {planNames.map((name, index) => (
              <div key={index} className="flex-1 text-center text-sm font-semibold text-gray-600">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Feature comparison sections */}
        <div className="md:w-2/3 ml-auto"> {/* Align features under pricing cards */}
          {featureCategories.map((category, index) => (
            <FeatureSection key={index} category={category} planNames={planNames} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeoPricing;
