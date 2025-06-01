import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Support",
  description:
    "Join our vibrant community of Bong County students in Rwanda. Share experiences, seek advice, find mentors, and build lasting friendships that will support you throughout your academic journey.",
};

export default function CommunityPage() {
  return (
    <>
      <Hero
        badge="Community & Support"
        title="Connect & Collaborate"
        description="Join our vibrant community of Bong County students in Rwanda. Share experiences, seek advice, find mentors, and build lasting friendships that will support you throughout your academic journey."
      />
    </>
  );
}
