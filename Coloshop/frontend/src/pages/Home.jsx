import React from "react";
import './Home.scss'

const Home = () => {
  return (
    <section className="flex items-center justify-start bg-gray-100 px-16 py-20 home">

      <div className="max-w-lg">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Spring / Summer Collection 2017
        </p>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight mt-4">
          Get up to 30% Off <br /> New Arrivals
        </h1>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold text-sm uppercase tracking-wide rounded hover:bg-red-600">
          Shop Now
        </button>
     
      </div>
    </section>
  );
};

export default Home;
