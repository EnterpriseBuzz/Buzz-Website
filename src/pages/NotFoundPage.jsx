import React, { useState, useEffect } from "react";
import { Home, ArrowLeft, Zap, AlertCircle } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the browser history
  };

  useEffect(() => {
    setIsVisible(true);

    // Create floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute rounded-full bg-gradient-to-r from-orange-200/30 to-red-200/30 animate-bounce"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.left}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${element.animationDelay}s`,
                animationDuration: `${element.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto relative z-10">
          <div
            className={`flex flex-col items-center max-w-2xl mx-auto text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* 404 Large Number */}
            <div className="relative mb-8">
              <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-none animate-pulse">
                404
              </h1>
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Error Icon with Animation */}
            <div className="relative mb-6">
              <div className="p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-full shadow-xl animate-bounce">
                <AlertCircle className="w-12 h-12 text-red-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Oops! Page Not Found
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                The page you're looking for seems to have vanished into the
                digital void. Don't worry, even the best explorers sometimes
                take a wrong turn!
              </p>

              {/* Fun animated message */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-700">
                    Did you know?
                  </span>
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-orange-600">
                  The first 404 error was discovered at CERN in 1992. You're now
                  part of internet history! 🚀
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <button
                onClick={handleGoBack}
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-gray-700 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Go Back</span>
              </button>

              <button
                onClick={() => navigate("/")}
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <Home className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>Take Me Home</span>
              </button>
            </div>
          </div>
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
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}

export default NotFoundPage;
