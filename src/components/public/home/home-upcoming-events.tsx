import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "Bong Cultural Night 2024",
    date: "Dec 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Kigali Convention Center, Kigali",
    description:
      "Annual celebration of Bong County heritage with traditional music, dance, and cuisine",
    type: "Cultural",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    title: "Study Abroad Workshop",
    date: "Dec 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Online & In-Person",
    description:
      "Comprehensive guide for new students planning to study in Rwanda",
    type: "Academic",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "New Year Mentorship Meet",
    date: "Jan 5, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center, Kigali",
    description:
      "Connect with senior students and alumni for academic and career guidance",
    type: "Community",
    badgeColor: "bg-green-100 text-green-800",
  },
];

export default function HomeUpcomingEvents() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for cultural celebrations, academic workshops, and community
            gatherings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={event.badgeColor}>{event.type}</Badge>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            asChild
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
