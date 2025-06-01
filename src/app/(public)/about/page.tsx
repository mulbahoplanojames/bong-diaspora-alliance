import AboutCallToAction from "@/components/public/about/about-call-to-action";
import CountyHeritage from "@/components/public/about/county-heritage";
import Leadership from "@/components/public/about/leadership";
import MissionVision from "@/components/public/about/mission-vision";
import Statistics from "@/components/public/about/statistics";
import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
  description:
    "Learn about the Bong Diaspora Alliance, our mission, vision, and the rich heritage of Bong County, Liberia. Join us in empowering the next generation of leaders in Rwanda.",
};

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
