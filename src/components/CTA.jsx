import React from "react";

function CTA() {
  const openCalendly = () => {
    window.open("https://calendly.com/enterprisebuzzai", "_blank");
  };
  return (
    <div
      className=" bg-[#fff] py-10 2xl:py-20 px-2 lg:px-16  flex flex-col  items-center  justify-center gap-x-1 bg-no-repeat  bg-cover"
      style={{
        "background-image": "url('./bg/CTAbg.svg')",
      }}
    >
      <div className=" lg:px-16 2xl:px-24 mx-auto 2xl:w-full">
        <div
          className="w-full bg-center bg-cover hidden md:block h-[18rem] lg:h-[21rem] 2xl:h-[33rem] rounded-2xl p-5 lg:p-20"
          style={{
            "background-image": "url('./bg/CTABanner.svg')",
          }}
        >
          <div className="md:flex items-center justify-between w-full h-full  ">
            <h1 className="text-5xl font-semibold 2xl:font-bold text-white md:py-3 md:w-[26rem] 2xl:w-[50rem] lg:text-5xl 2xl:text-7xl">
              Turbocharge your brand's potential right now!
            </h1>

            <div className="w-[20rem] lg:w-[22rem] 2xl:w-[38rem]  space-y-10">
              <p className="mt-3  font-semibold text-[#fff] 2xl:text-2xl">
                Ready to ignite your marketplace dominance? Let's conjure up
                some marketing wizardry together.
              </p>

              <div className=" flex gap-x-4  items-center">
                <button
                  onClick={openCalendly}
                  className="2xl:text-3xl px-6 lg:px-12 2xl:px-16 py-2.5 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md hover:shadow-lg transition-all"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View ++++++++++++++++++++++++++++++++++++++++ */}
        <div
          className="w-full bg-center bg-cover md:hidden h-auto min-[400px]:h-[46rem] max-[330px]:h-[36rem] max-[400px]:h-[40rem] rounded-2xl p-5 "
          style={{
            "background-image": "url('./bg/mCTA Banner.svg')",
          }}
        >
          <div className="w-full px-2  py-9 sm:py-12">
            <h1 className=" font-semibold text-white py-3 min-[350px]:text-[48px] max-[350px]:text-[40px]  leading-[3rem]">
              Turbocharge your brand's potential right now!
            </h1>

            <div className="sm:w-[22rem]  min-[350px]:space-y-10 max-[350px]:space-y-6">
              <p className="mt-3 text-2xl  font-semibold text-[#fff] max-[350px]:leading-[2rem] min-[350px]:leading-[3rem]">
                Ready to ignite your marketplace dominance? Let's conjure up
                some marketing wizardry together.
              </p>

              <div className=" flex gap-x-4  items-center">
                <button
                  onClick={openCalendly}
                  className="px-6 lg:px-12 py-2.5 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md hover:shadow-lg transition-all"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
