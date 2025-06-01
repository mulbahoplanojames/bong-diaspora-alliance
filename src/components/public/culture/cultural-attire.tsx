import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { attires, traditionalPatterns } from "@/data/culture-attire";
import { Palette } from "lucide-react";
import Image from "next/image";

export default function CulturalAttire() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Traditional Attire
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kpelle traditional clothing reflects social status, age, and occasion.
          From everyday wear to ceremonial garments, each piece tells a story of
          cultural identity and artistic expression.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attires.map((attire, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt={attire.title}
                width={250}
                height={300}
                className="rounded-lg mb-4"
              />
              <CardTitle>{attire.title}</CardTitle>
              <CardDescription>{attire.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{attire.content}</p>
              <div className="flex items-center space-x-2">
                {attire.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} className={`${badge.color} text-sm`}>
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="mr-2 h-5 w-5 text-blue-600" />
            Traditional Patterns & Meanings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {traditionalPatterns.map((pattern, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg "
              >
                <div className={`size-10 ${pattern.color} rounded-full`}></div>
                <div>
                  <p className="font-semibold">{pattern.name}</p>
                  <p className="text-sm text-gray-600">{pattern.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
