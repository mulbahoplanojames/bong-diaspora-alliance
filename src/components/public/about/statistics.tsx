import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Building, GraduationCap } from "lucide-react";

const statisticsData = [
  {
    title: "Active Students",
    value: 23,
    progress: 78,
    color: "orange",
    description: "78% growth this year",
  },
  {
    title: "Alumni",
    value: 5,
    progress: 35,
    color: "blue",
    description: "65% employed in Rwanda",
  },
  {
    title: "Universities",
    value: 4,
    progress: 54,
    color: "green",
    description: "92% satisfaction rate",
  },
  {
    title: "Scholarships",
    value: "$50",
    progress: 25,
    color: "purple",
    description: "85% funding secured",
  },
];

const academicDistribution = [
  { title: "Engineering & Technology", value: 35 },
  { title: "Medicine & Health Sciences", value: 28 },
  { title: "Business & Economics", value: 22 },
  { title: "Arts & Social Sciences", value: 15 },
];
const universityEnrollment = [
  { title: "University of Rwanda", value: 12 },
  { title: "INES-Ruhengeri", value: 28 },
  { title: "AUCA", value: 24 },
  { title: "ULK", value: 45 },
  { title: "Others", value: 44 },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Community by Numbers
          </h2>
          <p className="text-xl text-gray-600">
            A growing community of scholars making their mark in Rwanda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statisticsData.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <div
                  className={`text-4xl font-bold text-${stat.color}-600 mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.title}</div>
                <Progress value={stat.progress} className="mt-3" />
                <div className="text-xs text-gray-500 mt-1">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-blue-600" />
                Academic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {academicDistribution.map((item, index) => (
                <div key={index} className="flex  flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                  <Progress value={item.value} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-green-600" />
                University Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {universityEnrollment.map((item, index) => (
                <div key={index} className="flex  flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
