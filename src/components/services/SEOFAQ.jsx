import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SEOFAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is SEO marketing?",
      answer: "SEO marketing is the process of optimizing a website's content and structure to improve its visibility in search engine results pages (SERPs) and attract organic traffic."
    },
    {
      question: "Why is SEO marketing important?",
      answer: "SEO marketing is crucial because it helps businesses increase their online visibility, drive qualified traffic to their websites, build credibility and trust with potential customers, and achieve long-term sustainable growth. Unlike paid advertising, SEO provides lasting results and has a higher ROI over time."
    },
    {
      question: "What are the main components of SEO marketing?",
      answer: "The main components of SEO marketing include keyword research and optimization, on-page SEO (content optimization, meta tags, internal linking), technical SEO (site speed, mobile-friendliness, crawlability), off-page SEO (link building, social signals), and content marketing. Each component works together to improve search engine rankings."
    },
    {
      question: "What is keyword research?",
      answer: "Keyword research is the process of identifying and analyzing the search terms that people use when looking for products, services, or information related to your business. It involves finding relevant keywords with good search volume and manageable competition, understanding user intent, and strategically incorporating these keywords into your content."
    },
    {
      question: "What is on-page optimization?",
      answer: "On-page optimization refers to the practice of optimizing individual web pages to rank higher in search engines. This includes optimizing title tags, meta descriptions, header tags (H1, H2, etc.), URL structure, internal linking, image alt text, and ensuring content is high-quality, relevant, and user-focused."
    },
    {
      question: "What is technical SEO?",
      answer: "Technical SEO focuses on optimizing the technical aspects of a website to help search engines crawl, index, and understand your site more effectively. This includes improving site speed, ensuring mobile responsiveness, fixing crawl errors, implementing structured data, optimizing XML sitemaps, and securing your site with HTTPS."
    },
    {
      question: "What are some common SEO marketing tools?",
      answer: "Popular SEO tools include Google Analytics and Google Search Console for performance tracking, SEMrush and Ahrefs for keyword research and competitor analysis, Moz for SEO metrics and local SEO, Screaming Frog for technical audits, Yoast SEO for WordPress optimization, and Google PageSpeed Insights for site speed analysis."
    }
  ];

  return (
    <div className="lg:px-28 mx-auto p-5 lg:p-8 bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Title and Description */}
        <div className="lg:sticky lg:top-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Answers to Your<br />
            Common SEO Queries
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Navigate the SEO battlefield with rapid-fire answers to the questions our clients ask most—cutting through jargon to give you actionable, ROI-driven clarity fast.
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full py-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-700">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 transition-transform duration-200">
                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pb-6 pr-8">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}