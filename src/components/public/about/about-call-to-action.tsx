import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import React from "react";

export default function AboutCallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a movement that celebrates heritage, pursues excellence,
            and builds bridges between cultures. Your journey from Bong to
            Rwanda starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Member
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Heart className="mr-2 h-5 w-5" />
              Support Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
