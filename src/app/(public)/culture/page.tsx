import Cuisines from "@/components/public/culture/cuisines-dish";
import CulturalAttire from "@/components/public/culture/cultural-attire";
import CulturalBelief from "@/components/public/culture/cultural-belief";
import Language from "@/components/public/culture/language";
import Overview from "@/components/public/culture/overview";
import Hero from "@/components/public/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Heritage",
  description:
    "Explore the rich cultural heritage of Bong County, Liberia. From traditional attire and cuisine to language and beliefs, discover the vibrant tapestry that connects us across generations and continents.",
};

export default function CulturePage() {
  return (
    <>
      <Hero
        badge="Cultural Heritage"
        title="Bong Cultural Hub"
        description="Immerse yourself in the rich tapestry of Bong County culture. From ancient Kpelle traditions to vibrant contemporary expressions, discover the heritage that shapes our identity and connects us across continents."
      />

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:grid-cols-5 grid-cols-3 gap-4 max-w-4xl mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
              <TabsTrigger value="attire">Attire</TabsTrigger>
              <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
              <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-12">
              <Overview />
            </TabsContent>
            <TabsContent value="language" className="mt-12">
              <Language />
            </TabsContent>
            <TabsContent value="attire" className="mt-12">
              <CulturalAttire />
            </TabsContent>
            <TabsContent value="cuisine" className="mt-12">
              <Cuisines />
            </TabsContent>
            <TabsContent value="beliefs" className="mt-12">
              <CulturalBelief />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
