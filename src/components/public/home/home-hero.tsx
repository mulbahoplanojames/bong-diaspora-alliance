import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HomeHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-blue-600/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                🌍 Connecting Cultures, Building Futures
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 ">
                A Digital Bridge for
                <span className="text-orange-600"> Bong County</span> Students
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unite, celebrate, and inspire. Join the vibrant community of
                Liberian students from Bong County studying in Rwanda. Preserve
                our heritage while building tomorrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">20+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Months Strong</div>
              </div>
            </div>
          </div>

          <div className="relative h-72 lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Bong County students in Rwanda"
                fill
                className="object-cover w-full h-full "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">
                  Cultural Unity in Academic Excellence
                </p>
                <p className="text-sm opacity-90">
                  Bong County students at University of Rwanda
                </p>
              </div>
            </div>

            {/* Floating announcement */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Update</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Official Lunch in 2025 registration now open!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
