import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import leadership from "@/data/leadership.json";
import { Badge } from "@/components/ui/badge";

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the dedicated leaders guiding our community toward academic
            excellence and cultural preservation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member) => (
            <Card
              key={member.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
                <Badge className="bg-blue-100 text-blue-800 mt-2">
                  {member.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
