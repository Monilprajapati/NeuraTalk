import React from "react";
const Home = () => {
  return (
    <header className="w-full font-lato flex pt-40 items-center flex-col bg-gradient-to-r from-blue-400 h-[92vh] via-cyan-600 to-blue-900">
      <h1 className="head_text flex flex-col gap-4">
        <span className="text-4xl md:text-6xl xl:text-8xl">Ask anything to your AI</span>
        <span className="orange_gradient text-4xl md:text-5xl xl:text-7xl xl:mt-3">Neura Talk</span>
      </h1>
      <h2 className="desc text-lg md:text-xl xl:text-2xl px-8 mb-4 mt-7 md:m-10 md:mb-6">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
        <button className="black_btn">
            Get started
        </button>
    </header>
  );
};

export default Home;
