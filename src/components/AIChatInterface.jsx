import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

export default function AIChatInterface() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log("Submitting query:", inputValue);
      // Here you would typically send the query to your AI backend
      setInputValue("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log("Selected suggestion:", suggestion);
    // Here you would typically send the suggestion to your AI backend
  };

  const suggestions = [
    "What can I ask you to do?",
    "Which one of my projects is performing the best?",
    "What projects should I be concerned about right now?",
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-12 bg-white">
      <div className="rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100">
        <div className="flex flex-col items-center justify-center my-10 sm:my-36">
          <div className="mb-3">
            <Sparkles className="h-8 w-8 text-black" />
          </div>
          <h2 className="text-2xl font-medium text-center text-gray-800">
            Ask our AI anything
          </h2>
        </div>

        <div>
          <h3 className="text-sm text-gray-500 mb-3">
            Suggestions on what to ask Our AI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-4 bg-gray-100 hover:bg-gray-200 text-sm md:text-base text-gray-800 rounded-lg text-left transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask me anything about your projects"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              disabled={!inputValue.trim()}
            >
              <Send
                className={`h-5 w-5 ${
                  inputValue.trim() ? "text-gray-600" : "text-gray-300"
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
