import React from "react";
import FetchAPI from "../components/FetchAPI";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div className="lg:p-10 px-5 py-10 flex flex-col justify-center items-center">
      <Heading title="Get Your Fetch API" />
      {/* <LocalAPI /> */}
      <FetchAPI/>
    </div>
  );
};

export default Home;
