import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LatestUpdates = () => {
  const [posts] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. pharetra",
      image: "./bg/blog.png",
    }))
  );

  return (
    <section className="py-10 px-2 lg:p-24  flex flex-col  items-center  justify-center ">
      <h2 className="text-lg text-[#000] font-bold  text-center md:text-3xl lg:w-[35rem] capitalize ">
        latest updates
      </h2>
      <h2 className="text-[12px] text-[#000] text-center md:text-sm md:w-[44rem] lg:w-[50rem] py-2">
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
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default LatestUpdates;
