import EventsClient from "@/components/public/events/events-client";
import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Activities",
  description:
    "Join us for cultural celebrations, academic workshops, and community gatherings that strengthen our bonds and celebrate our heritage while building our future in Rwanda.",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        badge="Events & Activities"
        title="Community Events"
        description="Join us for cultural celebrations, academic workshops, and community gatherings that strengthen our bonds and celebrate our heritage while building our future in Rwanda."
      />
      <EventsClient />
    </>
  );
}
