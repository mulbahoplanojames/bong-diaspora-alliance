import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, UserRound } from "lucide-react";

export default function CulturalBelief() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Traditional Beliefs & Practices
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kpelle spiritual beliefs center around ancestral wisdom, connection to
          nature, and community harmony. These traditions continue to influence
          modern life and cultural practices.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserRound className="mr-2 h-5 w-5 text-orange-600" />
              Poro Society
            </CardTitle>
            <CardDescription>
              Traditional male initiation and education system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The Poro society is a traditional institution that guides young
              men through initiation rites, teaching them cultural values,
              practical skills, and their roles in society.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Education and skill development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Cultural preservation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Community leadership training</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-pink-600" />
              Sande Society
            </CardTitle>
            <CardDescription>
              Traditional female initiation and education system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The Sande society provides education and initiation for young
              women, teaching them about womanhood, family responsibilities, and
              cultural traditions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-sm">
                  Women&apos;s health and wellness
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-sm">Traditional medicine knowledge</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-sm">Cultural arts and crafts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle>Ancestral Wisdom & Spiritual Practices</CardTitle>
          <CardDescription>
            Core beliefs that guide Kpelle spiritual and social life
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">
                Ancestral Reverence
              </h4>
              <p className="text-gray-600 text-sm">
                Ancestors are believed to continue guiding and protecting their
                descendants, influencing daily decisions and community affairs.
              </p>
              <h4 className="font-semibold text-gray-900">Nature Connection</h4>
              <p className="text-gray-600 text-sm">
                Deep respect for the natural world, with forests, rivers, and
                animals considered sacred and integral to spiritual life.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Community Harmony</h4>
              <p className="text-gray-600 text-sm">
                Emphasis on collective well-being, conflict resolution through
                traditional councils, and shared responsibility for community
                welfare.
              </p>
              <h4 className="font-semibold text-gray-900">Oral Traditions</h4>
              <p className="text-gray-600 text-sm">
                Stories, proverbs, and songs that preserve historical knowledge,
                moral teachings, and cultural values across generations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
