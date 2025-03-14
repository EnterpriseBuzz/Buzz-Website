export default function MarketingOverview() {
  return (
    <div className=" px-5 lg:px-24   mx-auto mb-5">
      <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4  rounded-3xl shadow-lg w-full  relative">
        <div className="bg-[#fff]/10 rounded-2xl p-3 md:p-8 border border-[#fff]/30">
        <h2 className="text-white text-3xl font-bold mb-6">
          Free Marketing Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Your Business Name"
            className="p-4 sm:p-6 xl:p-10 w-full bg-white bg-opacity-30 rounded-lg text-white placeholder-white outline-none"
          />
          <input
            type="text"
            placeholder="Enter Your Domain Name"
            className="p-4 sm:p-6 xl:p-10 w-full bg-white bg-opacity-30 rounded-lg text-white placeholder-white outline-none"
          />
          <input
            type="text"
            placeholder="Enter The Competitor's Domain Name."
            className="p-4 sm:p-6 xl:p-10 w-full bg-white bg-opacity-30 rounded-lg text-white placeholder-white outline-none"
          />
          <button className="w-full transition-all lg:-mb-4">
           <img src="../buttons/Button 05 lg.svg" alt="" className="hidden sm:block w-full" />
           <img src="../buttons/Button 05.svg" alt="" className="sm:hidden w-full" />
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}
