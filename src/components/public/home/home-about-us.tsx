import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Globe, Heart } from "lucide-react";

const aboutUsContent = [
  {
    title: "Our Heritage",
    icon: Heart,
    description:
      "Rooted in the rich traditions of the Kpelle people and the diverse cultures of Bong County, we carry forward centuries of wisdom, storytelling, and community values.",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  {
    title: "Our Mission",
    icon: BookOpen,
    description:
      "To create a supportive ecosystem where Bong County students in Rwanda can thrive academically while maintaining strong cultural connections and supporting future generations.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    title: "Our Impact",
    icon: Globe,
    description:
      "Through mentorship, cultural preservation, and academic support, we've helped many students navigate their educational journey while building bridges between Liberia and Rwanda.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
];

export default function HomeAboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Alliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from the spirit of unity and academic excellence, we bridge the
            gap between our ancestral home in Bong County and our educational
            journey in Rwanda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {aboutUsContent.map((item, index) => (
            <Card
              key={index}
              className={`border ${item.bgColor} hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <item.icon className={`h-6 w-6 ${item.textColor}`} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
