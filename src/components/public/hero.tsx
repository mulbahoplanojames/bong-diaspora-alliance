import { Badge } from "@/components/ui/badge";

export default function Hero({
  badge,
  title,
  description,
}: {
  badge: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="md:py-20 py-12 bg-gradient-to-r from-orange-600/10 to-blue-600/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="bg-orange-100 text-orange-800 mb-6">{badge}</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
