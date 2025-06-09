import React, { useState } from "react";
import {
  Check,
  Zap,
  Rocket,
  Crown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// --- Data Definition ---
const pricingPlans = [
  {
    id: "guerrilla",
    name: "Guerrilla",
    icon: <Zap className="w-5 h-5" />,
    price: "$4,995",
    period: "/month",
    contract: "1 year contract",
    description:
      "Launches a high-impact SEO blitz that secures page-one footholds and rapid ROI within a single quarter.",
    buttonText: "Start Free Trial",
    cancelText: "14-day free trial • Cancel anytime",
    accentColor: "from-purple-500 to-blue-500",
  },
  {
    id: "blitz",
    name: "Blitz",
    icon: <Rocket className="w-5 h-5" />,
    price: "$9,995",
    period: "/month",
    contract: "1 year contract",
    description:
      "AI-amplified tactics that accelerate authority and systematically erode competitor rankings.",
    buttonText: "Start Free Trial",
    cancelText: "21-day free trial • Cancel anytime",
    accentColor: "from-orange-500 to-pink-500",
    featured: true,
  },
  {
    id: "shockAndAwe",
    name: "Shock & Awe",
    icon: <Crown className="w-5 h-5" />,
    price: "$19,995",
    period: "/month",
    contract: "1 year contract",
    description:
      "Our full arsenal delivers permanent search monopolization and enterprise-level ROI.",
    buttonText: "Start Free Trial",
    cancelText: "30-day free trial • Cancel anytime",
    accentColor: "from-amber-400 to-red-500",
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
const Header = () => {
  return (
    <div className="md:w-[80rem] pr-0 md:pr-12 mb-12 md:mb-0">
      <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
        SEO WARFARE PLANS
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
        Dominate Search Results with{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Military-Grade SEO
        </span>
      </h1>
      <p className="text-lg text-gray-600">
        Choose your assault strategy—whether you're establishing a beachhead or
        launching a full-scale offensive to conquer your market.
      </p>
    </div>
  );
};



// --- Feature Row Component ---
const FeatureRow = ({ feature, planIds }) => {
  const renderSupport = (value) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-500 mx-auto" />;
    } else if (value === false || value === "-") {
      return <span className="text-gray-300 mx-auto">—</span>;
    } else {
      return (
        <span className="text-sm font-medium text-gray-700 mx-auto">
          {value}
        </span>
      );
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-gray-700 font-medium">{feature.name}</td>
      {planIds.map((planId) => (
        <td key={planId} className="py-4 px-4 text-center">
          {renderSupport(feature[planId])}
        </td>
      ))}
    </tr>
  );
};

// --- Feature Row Component (Mobile) ---
const MobileFeatureRow = ({ feature, planIds }) => {
    const renderSupport = (value) => {
      if (value === true) {
        return <Check className="h-5 w-5 text-green-500" />;
      } else if (value === false || value === "-") {
        return <span className="text-gray-300">—</span>;
      } else {
        return <span className="text-sm font-medium text-gray-700">{value}</span>;
      }
    };
  
    return (
      <div className="border-b border-gray-200 py-4">
        <div className="font-medium text-gray-700 mb-3">{feature.name}</div>
        <div className="grid grid-cols-3 gap-4">
          {planIds.map((planId) => (
            <div key={planId} className="text-center">
              <div className="text-xs text-gray-500 mb-1">
                {pricingPlans.find(p => p.id === planId).name}
              </div>
              <div className="flex justify-center">
                {renderSupport(feature[planId])}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

// --- Feature Section Component ---
const FeatureSection = ({ category, planIds, isExpanded, toggleExpand }) => {
    return (
      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <button
          onClick={toggleExpand}
          className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
        >
          <h4 className="text-lg font-bold text-gray-900">{category.category}</h4>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
  
        {isExpanded && (
          <div className="bg-white">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full">
                <tbody>
                  {category.items.map((feature, index) => (
                    <FeatureRow key={index} feature={feature} planIds={planIds} />
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile View */}
            <div className="md:hidden p-4">
              {category.items.map((feature, index) => (
                <MobileFeatureRow key={index} feature={feature} planIds={planIds} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // --- Plan Header Component ---
  const PlanHeader = ({ planIds }) => {
    return (
      <>
        {/* Desktop Header */}
        <div className="hidden md:block sticky top-0 z-10 bg-white pt-8 px-4 pb-4 border-b border-gray-200">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-3 font-semibold text-gray-500">Features</div>
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="text-center">
                <div
                  className={`inline-flex items-center justify-center rounded-lg p-2 mb-2 bg-gradient-to-r ${plan.accentColor} text-white`}
                >
                  {plan.icon}
                </div>
                <h4 className="font-bold text-gray-900">{plan.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden sticky top-3 z-10 bg-white pt-6 px-4 pb-2 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Feature Comparison</h3>
          <div className="flex justify-between items-center">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="text-center flex-1">
                <div
                  className={`inline-flex items-center justify-center rounded-lg p-1 mb-1 bg-gradient-to-r ${plan.accentColor} text-white`}
                >
                  {plan.icon}
                </div>
                <h4 className="text-xs font-bold text-gray-900">{plan.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  

// --- Main SeoPricing Component ---
function SeoPricing() {
  const [expandedCategories, setExpandedCategories] = useState(
    featureCategories.reduce((acc, category) => {
      acc[category.category] = true;
      return acc;
    }, {})
  );

  const planIds = pricingPlans.map((plan) => plan.id);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Feature comparison sections */}
        <div className="">
          <PlanHeader planIds={planIds} />

          <div className="space-y-4">
            {featureCategories.map((category) => (
              <FeatureSection
                key={category.category}
                category={category}
                planIds={planIds}
                isExpanded={expandedCategories[category.category]}
                toggleExpand={() => toggleCategory(category.category)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoPricing;
