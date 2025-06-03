import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  Crown,
  Target,
  TrendingUp,
  MapPin,
  Zap,
} from "lucide-react";

export default function TrackRecord() {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Globe, text: "Global SEO Intelligence" },
    { icon: Crown, text: "Algorithm Supremacy" },
    { icon: Target, text: "Precision Targeting" },
    { icon: Zap, text: "Real-time Optimization" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="relative z-10  mx-auto px-2 lg:px-32 py-12">
        {/* Header Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-5">
              <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-red-500/30">
                <span className="text-sm font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  🚀 AI-Powered SEO Revolution
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  EnterpriseBuzz AI
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  SEO:
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Total-Spectrum SEO Supremacy
              </p>

              <button className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center text-white gap-2">
                  Activate My Free Trial
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                <p className="text-lg leading-relaxed text-gray-700">
                  We weaponize machine-learning telemetry to unleash legal-limit
                  white-hat velocity, precision-timed gray-hat surges, and
                  real-time negative-SEO counterstrikes—all from one command
                  console. Competitors gamble on guesswork; we run live
                  algorithm intelligence to strike first, rank faster, and
                  hard-lock your position.
                </p>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Section */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Proof beats promises—our track record
            </span>
            <br className="hidden md:block" />{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              does the talking.
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 3D Isometric Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-200 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 animate-pulse"></div>

                {/* Central laptop/dashboard */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl animate-pulse">
                    <Globe className="w-10 h-10 text-white" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-xl border border-purple-200 transition-all duration-500 ${
                            counter === index
                              ? "scale-110 shadow-lg shadow-purple-200"
                              : ""
                          }`}
                        >
                          <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <p className="text-xs text-center text-gray-600">
                            {feature.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 mt-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-600">
                    Stop Playing Defense. Start Dominating Ethically.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-700">
                    Stop Reacting. Start Predicting.
                  </span>
                </div>
              </div>
            </div>

            {/* Stats and CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900">
                  Choose EnterpriseBuzz AI for SEO that's not just effective,
                  but{" "}
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    unassailable.
                  </span>
                </h3>

                <blockquote className="text-lg italic text-gray-600 border-l-4 border-purple-500 pl-4">
                  "It's not enough to just build a website; you have to build a
                  website that search engines love." - Unknown
                </blockquote>

                <p className="text-gray-600 leading-relaxed">
                  We understand the nuances of every SEO tactic, ensuring you
                  build a resilient presence and achieve sustainable dominance.
                  Protect and c...
                </p>

                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span>Toronto</span>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-red-600 font-bold text-sm mb-1">
                      30-50 % YoY traffic growth
                    </div>
                    <div className="text-gray-500 text-sm">
                      is our floor; 200-300 % surges in the first 12 months are
                      common.
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      Averaging 700%+
                    </div>
                    <div className="text-xs text-gray-500">
                      Maximize your marketing ROI with intelligent SEO. Data
                      reveals SEO delivers a significantly higher ROI than other
                      channels.
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center gap-2">
                  Activate My Free Trial
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end px-3 md:px-20 lg:px-28 mb-10">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-[#2d3e30] mb-4">
            Home Automation Website
          </h1>
          <img src="../seo/before.png" alt="" />
        </div>
        <img src="../seo/after.png" alt="" />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
