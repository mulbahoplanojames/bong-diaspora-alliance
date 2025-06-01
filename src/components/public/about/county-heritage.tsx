import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const heritageData = [
  {
    title: "The Kpelle People",
    description:
      "Rich in natural resources and cultural heritage, Bong County has been the birthplace of leaders, scholars, and visionaries who have shaped Liberia's history.",
  },
  {
    title: "Cultural Significance",
    description:
      "Home to traditional institutions like the Poro and Sande societies, which have preserved ancient wisdom and cultural practices for centuries.",
  },
  {
    title: "Educational Legacy",
    description:
      "Birthplace of Cuttington University and numerous educational institutions that have produced generations of African leaders.",
  },
];

export default function CountyHeritage() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">
                Our Heritage
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Heart of Bong County
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bong County, located in central Liberia, is home to the largest
                ethnic group in the country - the Kpelle people. Rich in natural
                resources and cultural heritage, Bong County has been the
                birthplace of leaders, scholars, and visionaries who have shaped
                Liberia&apos;s history.
              </p>
            </div>

            <div className="space-y-4">
              {heritageData.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-72 lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Bong County landscape and culture"
              fill
              className="w-full h-full object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Gbarnga, Bong County</p>
              <p className="text-sm opacity-90">
                The educational and cultural heart of central Liberia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
