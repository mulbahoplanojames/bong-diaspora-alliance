import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Tools",
  description:
    "Access comprehensive guides, forms, contacts, and support materials for your academic journey in Rwanda. Everything you need to succeed, all in one place.",
};
export default function ResourcesPage() {
  return (
    <>
      <Hero
        badge="Resources & Tools"
        title="Essential Resources"
        description="Access comprehensive guides, forms, contacts, and support materials for your academic journey in Rwanda. Everything you need to succeed, all in one place."
      />
    </>
  );
}
