"use client";

import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlayAudioButton({ audioUrl }: { audioUrl: string }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false); // Add a state variable to track playback state

  useEffect(() => {
    const newAudio = new Audio(audioUrl);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  if (!audioUrl) {
    return null; // Return null if no audio URL is provided
  }

  return (
    <Button size="sm" variant="outline" onClick={handlePlayPause}>
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
}

// export default function PlayAudioButton({ audioUrl }: { audioUrl: string }) {
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     const newAudio = new Audio(audioUrl);
//     setAudio(newAudio);

//     return () => {
//       newAudio.pause();
//       newAudio.currentTime = 0;
//     };
//   }, [audioUrl]);

//   const handlePlayPause = () => {
//     if (audio) {
//       if (audio.paused) {
//         audio.play();
//       } else {
//         audio.pause();
//       }
//     }
//   };

//   if (!audioUrl) {
//     return null; // Return null if no audio URL is provided
//   }

//   return (
//     <Button size="sm" variant="outline" onClick={handlePlayPause}>
//       {audio && !audio.paused ? <Pause /> : <Play />}
//     </Button>
//   );
// }
