import { assets } from "@/assets/assets";
import Banner from "@/components/home/Banner";
import Cities from "@/components/home/Cities";
import Developers from "@/components/home/Developers";
import Grid from "@/components/home/Grid";
import HomeHero from "@/components/home/HomeHero";
import HomeJournal from "@/components/home/HomeJournal";
import Properties from "@/components/home/Properties";
import Testimonials from "@/components/home/Testimonials";
import React, { useState } from "react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div className="px-4 md:px-6 lg:px-24">
        <HomeHero />
        <Grid />
        <Properties />
        <HomeJournal />
        <Testimonials />
      </div>
      <Banner />
      <div className="relative">
        <Developers />
        <div className="absolute top-0 right-0">
          <img
            src={assets.properties_2}
            alt=""
            className={`w-24 md:w-48 lg:w-72 h-auto transition-all duration-700 ease-in-out ${
              loaded ? "blur-0" : "blur-md"
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
