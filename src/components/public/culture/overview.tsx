import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          The Kpelle Heritage
        </h2>
        <p className="text-lg text-gray-600">
          The Kpelle people, the largest ethnic group in Liberia, have a rich
          cultural heritage that spans centuries. Originating from the
          Mande-speaking peoples of West Africa, the Kpelle have developed
          unique traditions, languages, and social structures that continue to
          thrive today.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900">Population</h4>
            <p className="text-2xl font-bold text-orange-600">1.2M+</p>
            <p className="text-sm text-gray-600">
              Largest ethnic group in Liberia
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900">Language Family</h4>
            <p className="text-2xl font-bold text-blue-600">Mande</p>
            <p className="text-sm text-gray-600">Niger-Congo language family</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/kpelle-dance.png"
          alt="Kpelle cultural ceremony"
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-lg font-semibold">Traditional Kpelle Ceremony</p>
          <p className="text-sm opacity-90">
            Celebrating harvest season in Bong County
          </p>
        </div>
      </div>
    </div>
  );
}
