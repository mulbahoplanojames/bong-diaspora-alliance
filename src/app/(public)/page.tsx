import CulturalHub from "@/components/public/home/cultural-hub";
import HomeAboutUs from "@/components/public/home/home-about-us";
import HomeHero from "@/components/public/home/home-hero";
import HomeUpcomingEvents from "@/components/public/home/home-upcoming-events";
import StudentHighlight from "@/components/public/home/student-highlight";
import StudyResourcesPreview from "@/components/public/home/study-resources-preivew";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutUs />
      <CulturalHub />
      <HomeUpcomingEvents />
      <StudyResourcesPreview />
      <StudentHighlight />
    </>
  );
}
