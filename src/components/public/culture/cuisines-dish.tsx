import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChefHat } from "lucide-react";
import Image from "next/image";
import cuisines from "@/data/cuisine.json";
import Link from "next/link";

export default function Cuisines() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Traditional Cuisine
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kpelle cuisine is built around rice as the staple food, complemented
          by rich stews, fresh vegetables, and traditional cooking methods that
          have been perfected over generations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cuisines.map((cuisine, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={cuisine.image}
                  alt={cuisine.title}
                  fill
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardTitle>{cuisine.title}</CardTitle>
              <CardDescription>{cuisine.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{cuisine.content}</p>
              <div className="flex items-center justify-between">
                <Badge className="bg-yellow-100 text-yellow-800">
                  {cuisine.badge}
                </Badge>
                <Button size="sm" variant="outline" asChild>
                  <Link href={"#"}>
                    <ChefHat className="mr-2 h-4 w-4" />
                    Recipe
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
