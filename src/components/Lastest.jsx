import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LatestUpdates = () => {
  const posts = [
    {
      id: 1,
      title: "why content marketing is important for business",
      description:
        "Fueling Enterprise Growth: The Power of Aggressive Content Marketing Strategies.",
      image: "./blog/why content marketing is important for business.png",
    },
    {
      id: 2,
      title: "AI-Driven Marketing Insights",
      description:
        "Leveraging Advanced AI Algorithms to Illuminate Market Trends, Drive Strategic Engagement, and Propel Business Growth.",
      image: "./blog/AI-Driven Marketing Insights.png",
    },
    {
      id: 3,
      title: "how seo helps your business",
      description:
        "SEO: The Catalyst for Expanding Reach, Gaining Customers, and Driving Growth in the digital arena.",
      image: "./blog/how seo helps your business.png",
    },
    {
      id: 4,
      title: "digital marketing versus traditional marketing",
      description:
        "Changing Times: A Comparative Journey Through Digital and Traditional Marketing.",
      image: "./blog/digital marketing versus traditional marketing.png",
    },
    {
      id: 5,
      title: "how to drive business growth in 2025",
      description:
        "Future-Proof Your Enterprise: Leveraging AI to Supercharge Business Growth in 2025.",
      image: "./blog/how to drive business growth in 2025.png",
    },
    {
      id: 6,
      title: "can advertising costs be capitalized",
      description:
        "The Capitalization Conundrum: Can Advertising Spend Become a Strategic Asset?",
      image: "./blog/can advertising costs be capitalized.png",
    },

    {
      id: 7,
      title: "how advertising influences consumer behavior",
      description:
        "The Persuasion Playbook: Advertising’s Role in Shaping Consumer Behavior.",
      image: "./blog/how advertising influences consumer behavior.png",
    },
  ];

  return (
    <section className="py-10 px-2 lg:p-24  flex flex-col  items-center  justify-center ">
      <h2 className="text-2xl text-[#000] font-bold  text-center md:text-3xl xl:text-4xl lg:w-[35rem] capitalize ">
        latest updates
      </h2>
      <h2 className="text-[12px] text-[#000] text-center md:text-sm xl:text-base md:w-[44rem] lg:w-[50rem] py-2">
        In the fast-changing, technology-disrupting marketing industry, you need
        an ally like EnterpriseBuzz AI's blog to stay on top of your market.
      </h2>

      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full  grid md:grid-cols-3 gap-6 my-5"
        >
          {posts.slice(0, 6).map((post, index) => (
            <div
              key={post.id}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition transform hover:scale-105 ${
                index === 0 ? "md:col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={post.image}
                alt="Blog Thumbnail"
                className={`w-full object-cover ${
                  index === 0 ? "md:h-[31.5rem]" : "h-60"
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg 2xl:text-xl capitalize">
                  {post.title}
                </h3>
                <p className="text-sm 2xl:text-lg capitalize">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default LatestUpdates;
