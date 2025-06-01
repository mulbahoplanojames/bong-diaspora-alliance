import AboutCallToAction from "@/components/public/about/about-call-to-action";
import CountyHeritage from "@/components/public/about/county-heritage";
import Leadership from "@/components/public/about/leadership";
import MissionVision from "@/components/public/about/mission-vision";
import Statistics from "@/components/public/about/statistics";
import Hero from "@/components/public/hero";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="Our Story"
        title=" About the Bong Diaspora Alliance"
        description="  Born from the spirit of unity and academic excellence, we are the
            bridge between our ancestral home in Bong County, Liberia, and our
            educational journey in the Land of a Thousand Hills, Rwanda."
      />
      <MissionVision />
      <CountyHeritage />
      <Leadership />
      <Statistics />
      <AboutCallToAction />
    </>
  );
}
