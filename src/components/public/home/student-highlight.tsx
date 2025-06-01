import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Award, Star, Users } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    name: "Sarah Konneh",
    field: "Engineering, Kigali Independent University",
    quote:
      "The alliance helped me navigate my first year in Rwanda. Now I'm mentoring new students and working on sustainable energy projects.",
    award: "Dean's List 2024",
    icon: Award,
  },
  {
    name: "James Pewee",
    field: "Medicine, INES-Ruhengeri",
    quote:
      "From Gbarnga to Ruhengeri, this journey has been incredible. The cultural exchange has enriched both my studies and personal growth.",
    award: "Research Excellence Award",
    icon: Star,
  },
  {
    name: "Grace Mulbah",
    field: "Business, AUCA",
    quote:
      "Leading the cultural committee has allowed me to share our Bong heritage while learning about Rwandan traditions. It's been transformative.",
    award: "Student Leader 2024",
    icon: Users,
  },
];

export default function StudentHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Spotlights
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating the achievements and stories of our remarkable community
            members
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">{highlight.name}</CardTitle>
                    <CardDescription>{highlight.field}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">"{highlight.quote}"</p>
                <div className="flex items-center space-x-2">
                  <highlight.icon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">
                    {highlight.award}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
