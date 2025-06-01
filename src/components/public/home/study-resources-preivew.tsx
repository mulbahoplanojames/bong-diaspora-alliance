import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Visa Process & Documentation",
    description:
      "Step-by-step guide on how to apply for a student visa, including required documents and tips for a successful application.",
  },
  {
    id: 2,
    title: "Scholarship Opportunities",
    description:
      "Information on available scholarships for international students in Rwanda, including eligibility criteria and application processes.",
  },
  {
    id: 3,
    title: "Cultural Integration Guide",
    description:
      "A comprehensive guide to understanding Rwandan culture, traditions, and social norms to help you adapt smoothly.",
  },
  {
    id: 4,
    title: "University Directory",
    description:
      "A list of partner universities in Rwanda, including their programs, admission requirements, and contact information.",
  },
];

const stats = [
  {
    title: "Universities",
    value: "5+",
    description: "Partner institutions",
    color: "text-blue-600",
  },
  {
    title: "Scholarships",
    value: "2+",
    description: "Awarded annually",
    color: "text-green-600",
  },
  {
    title: "Success Rate",
    value: "95%",
    description: "Visa approval",
    color: "text-orange-600",
  },
  {
    title: "Support",
    value: "24/7",
    description: "Student assistance",
    color: "text-purple-600",
  },
];

export default function StudyResourcesPreview() {
  return (
    <section id="resources" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">
                Study Resources
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Guide to Studying in Rwanda
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about pursuing higher education in
                Rwanda, from visa applications to cultural integration.
              </p>
            </div>

            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={resource.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {resource.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-700 font-semibold">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {resource.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Access Study Guide
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${stat.color} `}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
