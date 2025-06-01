import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Headphones } from "lucide-react";
import PlayAudioButton from "./play-audio-button";

const bacislanguagePhrases = [
  {
    phrase: "Kaa kɛ?",
    translation: "How are you?",
    description: "A common greeting among the Kpelle people.",
  },
  {
    phrase: "Ŋa tɔŋ",
    translation: "Thank you",
    description: "An expression of gratitude.",
  },
  {
    phrase: "Kɛlɛ kɛ",
    translation: "Welcome",
    description: "A warm greeting for visitors.",
  },
  {
    phrase: "Ŋa kɛ lɔŋ",
    translation: "I am fine",
    description: "A response to greetings.",
  },
];

const basicAudioLessons = [
  {
    title: "Greetings",
    description: "Learn how to greet someone in Kpelle.",
    audioUrl: "/audio/Tekno_-_JINJA_(Official_Video)(360p).mp3",
  },
  {
    title: "Family Terms",
    description: "Common terms for family members.",
    audioUrl:
      "/audio/Reekado_Banks_Blessings_On_Me_Official_Music_Video_via_torchbrowser.mp3",
  },
  {
    title: "Numbers",
    description: "Counting from 1 to 10 in Kpelle.",
    audioUrl: "/audio/Tekno_Enjoy_9jaflaver.com_.mp3",
  },
];

export default function Language() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Kpelle Language
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The Kpelle language is a tonal language with rich oral traditions.
          Learn basic phrases and listen to native speakers share stories and
          wisdom.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Headphones className="mr-2 h-5 w-5 text-blue-600" />
              Audio Lessons
            </CardTitle>
            <CardDescription>
              Learn basic Kpelle phrases with native pronunciation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {basicAudioLessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold">{lesson.title}</p>
                    <p className="text-sm text-gray-600">
                      {lesson.description}
                    </p>
                  </div>
                  <PlayAudioButton audioUrl={lesson.audioUrl} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-green-600" />
              Common Phrases
            </CardTitle>
            <CardDescription>
              Essential Kpelle expressions for daily communication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bacislanguagePhrases.map((phrase, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">{phrase.phrase}</p>
                  <p className="text-sm text-gray-600">{phrase.translation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
