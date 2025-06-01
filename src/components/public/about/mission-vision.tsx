import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Target } from "lucide-react";
import React from "react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="size-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To create a supportive ecosystem where Bong County students in
                Rwanda can thrive academically while maintaining strong cultural
                connections, fostering unity, and building bridges between
                Liberia and Rwanda for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="size-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be the premier diaspora student organization in East Africa,
                recognized for academic excellence, cultural preservation, and
                meaningful contribution to both Liberian and Rwandan societies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="size-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• Unity in diversity</li>
                <li>• Academic excellence</li>
                <li>• Cultural preservation</li>
                <li>• Community service</li>
                <li>• Leadership development</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
