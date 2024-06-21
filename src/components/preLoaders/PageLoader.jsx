import React from "react";

function PageLoader() {
  return (
    <section>
      <div class="container  p-4  mx-auto animate-pulse ">
        <div class="w-full flex justify-between items-center gap-x-5">
          <div>
            <h1 className="w-full h-2 bg-gray-200 rounded-lg "></h1>
            <p class="w-16 lg:w-[9rem] h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div>
            <h1 className="w-full h-2 bg-gray-200 rounded-lg "></h1>
            <p class="w-16 lg:w-[9rem] h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div>
            <h1 className="w-full h-2 bg-gray-200 rounded-lg "></h1>
            <p class="w-16 lg:w-[9rem] h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div>
            <h1 className="w-full h-2 bg-gray-200 rounded-lg "></h1>
            <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
        </div>

        <div class="w-full h-20 lg:h-44 mt-10 bg-gray-300 rounded-lg "></div>
      </div>
    </section>
  );
}

export default PageLoader;
