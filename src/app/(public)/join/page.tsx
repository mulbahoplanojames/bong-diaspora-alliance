import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Bong Diaspora Alliance",
  description:
    "Become part of the Bong Diaspora Alliance and help us empower the next generation of leaders from Bong County, Liberia, studying in Rwanda. Your involvement can make a difference.",
};

export default function JoinPage() {
  return (
    <>
      <Hero
        badge="Join Our Mission"
        title="Become Part of Our Story"
        description="Whether you're a student, alumni, or supporter, there's a place for you in the Bong Diaspora Alliance. Join us in building bridges between cultures and empowering the next generation of leaders."
      />
    </>
  );
}
