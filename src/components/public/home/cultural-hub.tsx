import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CulturalHub() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">
                Cultural Heritage
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Bong Cultural Hub
              </h2>
              <p className="text-lg text-gray-600">
                Immerse yourself in the rich tapestry of Bong County culture.
                From traditional Kpelle music to ancestral stories, discover the
                heritage that shapes our identity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">
                  Traditional Music
                </h4>
                <p className="text-sm text-gray-600">
                  Audio samples and instruments
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Kpelle Language</h4>
                <p className="text-sm text-gray-600">Learn basic phrases</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">
                  Traditional Attire
                </h4>
                <p className="text-sm text-gray-600">
                  Cultural fashion gallery
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Oral Traditions</h4>
                <p className="text-sm text-gray-600">Stories from elders</p>
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700">
              Explore Cultural Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative h-72 lg:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-2xl"></div>
            <Image
              src="/cultural-hub.jpg"
              alt="Traditional Bong County cultural elements"
              fill
              className="w-full h-full object-cover shadow-lg transition-transform duration-300 rounded-2xl hover:scale-105"
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
