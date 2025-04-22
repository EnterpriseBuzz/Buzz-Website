import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PaymentOptions from "../components/PaymentOptions";
import LatestUpdates from "../components/Lastest";
import { Plus, Minus } from "lucide-react";
import AIChatInterface from "../components/AIChatInterface";

function Faqs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [openItem, setOpenItem] = useState(0);

  const faqItems = [
    {
      id: 1,
      number: "Q.1",
      question: "What exactly is EnterpriseBuzz AI?",
      answer:
        "EnterpriseBuzz AI is the premier AI‑Driven Enterprise Amplification platform, weaponizing advanced algorithms and our trademark Aggressive, Bold, and Controversial (A/B/C) tactics to detonate brand visibility and revenue growth.",
    },
    {
      id: 2,
      number: "Q.2",
      question: "How does your A/B/C approach outperform traditional agencies?",
      answer:
        "EnterpriseBuzz AI is the premier AI‑Driven Enterprise Amplification platform, weaponizing advanced algorithms and our trademark Aggressive, Bold, and Controversial (A/B/C) tactics to detonate brand visibility and revenue growth.",
    },
    {
      id: 3,
      number: "Q.3",
      question: "What onboarding timeline should we expect?",
      answer:
        "48‑hour kickoff call, brand intake, and tech integration; first campaigns live in 7 days; optimization sprint begins day 8.",
    },
    {
      id: 4,
      number: "Q.4",
      question: "How do you integrate with existing systems?",
      answer:
        "Native connectors and open APIs plug into HubSpot, Salesforce, Shopify, GA4, and any custom stack—delivering full data continuity.",
    },
    {
      id: 5,
      number: "Q.5",
      question:
        "Can we approve, edit, or reject drafts directly within the dashboard?",
      answer:
        "Yes—you can approve, edit, or reject drafts directly inside the EnterpriseBuzz AI dashboard. It’s a friction‑free, role‑aware system designed to obliterate bottlenecks, slash turnaround by days, and keep a tamper‑proof record of every decision—so your aggressive, bold, and controversial content hits the market before competitors even finish their first round of edits.",
    },
    {
      id: 6,
      number: "Q.6",
      question: "What testing methodologies drive ongoing optimization?",
      answer:
        "Multivariate and A/B tests continuously pit headlines, CTAs, and visuals against each other for conversion supremacy—using top‑ranked optimization platforms.",
    },
    {
      id: 7,
      number: "Q.7",
      question: "How is content created and managed?",
      answer:
        "We research your audience, craft a data‑driven content blueprint, generate high‑impact assets, and run continuous multivariate tests—iterating until every piece converts.",
    },
    {
      id: 8,
      number: "Q.8",
      question: "Who owns our creative assets and data?",
      answer:
        "You do. Upon contract completion, all ads, copy, designs, and analytics datasets transfer to your custody—because victors keep the spoils.",
    },
    {
      id: 9,
      number: "Q.9",
      question: "Can EnterpriseBuzz AI scale as we grow?",
      answer:
        "Yes—our infrastructure auto‑scales across traffic, campaigns, and geographies, ensuring performance under any load.",
    },
    {
      id: 10,
      number: "Q.10",
      question:
        "Can you tailor strategies for our niche industry and unique buyer personas?",
      answer:
        "Absolutely. EnterpriseBuzz AI combines deep‑dive human research with algorithmic pattern‑matching to build hyper‑specific strategies for any niche market and micro‑segmented buyer persona. Our process fuses AI‑generated personas, industry‑specific benchmarks, and multichannel playbooks that are continually re‑optimized by real‑time data—so every campaign speaks the exact language of your most profitable audience.",
    },
    {
      id: 11,
      number: "Q.11",
      question: "Which AI and mar‑tech stack powers EnterpriseBuzz AI?",
      answer:
        "We layer GPT‑grade LLMs, computer‑vision creative tests, reinforcement‑learning bid automations, and a proprietary analytics core for algorithmic edge competitors can’t replicate.",
    },
    {
      id: 12,
      number: "Q.12",
      question: "How do you ensure GDPR, CCPA, and global privacy compliance?",
      answer:
        "Privacy by design” is baked into every funnel: consent capture, data‑minimization, regional data tenancy, and audit trails that satisfy regulators and buyers alike.",
    },
    {
      id: 13,
      number: "Q.13",
      question: "How do you detect and mitigate AI bias?",
      answer:
        "We audit training data, run bias‑detection checkpoints, and enable client‑side exclusion rules—best‑practice safeguards highlighted by recent industry research.",
    },
  ];

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <div>
      <SEO
        title="FAQs"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />
      <div className="bg-[#F9F7F4] px-1 sm:px-4 py-12 md:py-16 lg:py-20">
        <div className="px-2 lg:px-24 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 lg:mb-12">
            <span className="text-[#1F1F1F]">FREQUENTLY</span>
            <br />
            <span className="text-[#1F1F1F]">ASK </span>
            <span className="text-[#C1372E]">QUESTIONS</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-5 lg:gap-12">
            <img
              src="../bg/heroPics.svg"
              alt="AI Robot answering FAQ questions"
              className="lg:hidden w-full h-full object-cover rounded-lg"
            />
            {/* Left column FAQ items */}
            <div className="md:w-3/5">
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.id} className="rounded-lg overflow-hidden">
                    <div
                      className={`flex items-center justify-between p-4 cursor-pointer ${
                        openItem === item.id
                          ? "bg-[#C1372E] text-white"
                          : item.id === 1
                          ? "bg-[#F5C050]"
                          : "bg-[#C1372E] text-white"
                      }`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div className="flex items-center">
                        {item.number && (
                          <span className="mr-4 text-lg font-medium">
                            {item.number}
                          </span>
                        )}
                        <h3 className="font-medium text-lg">{item.question}</h3>
                      </div>
                      <div className="ml-2">
                        {openItem === item.id ? (
                          <Minus className="w-6 h-6" />
                        ) : (
                          <Plus className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {openItem === item.id && (
                      <div className={`p-4 bg-[#F5C050] text-[#1F1F1F]`}>
                        <p className="whitespace-pre-line">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right column with image */}
            <div className="md:w-2/5 hidden lg:block">
              <img
                src="../bg/heroPics.svg"
                alt="AI Robot answering FAQ questions"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ask Our AI ++++++++++++++++++++++++++ */}
      <AIChatInterface />

      {/* Graphics ++++++++++++++++++++++++++ */}
      <section className="py-3 lg:my-4 max-w-3xl mx-auto md:px-2  rounded-2xl">
        <button>
          <img src="../graphics.svg" alt="" />
        </button>
      </section>
      {/* Latest Updates */}
      <LatestUpdates />

      {/* Payment Options */}
      <PaymentOptions />
    </div>
  );
}

export default Faqs;
