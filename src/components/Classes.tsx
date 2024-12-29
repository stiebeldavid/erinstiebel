import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

interface AudioClass {
  title: string;
  description: string;
  audioUrl?: string;
  externalUrl?: string;
  date: string;
  topic: string;
}

export const Classes = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  const classes: AudioClass[] = [
    {
      title: "Understanding the Power of Prayer",
      description: "An exploration of the deeper meaning behind Jewish prayer and its impact on our daily lives.",
      externalUrl: "https://example.com/prayer-class",
      date: "March 2024",
      topic: "Prayer"
    },
    {
      title: "The Joy of Shabbat",
      description: "Discover the beauty and significance of Shabbat observance in modern life.",
      externalUrl: "https://example.com/shabbat-class",
      date: "February 2024",
      topic: "Shabbat"
    }
  ];

  const togglePlay = (index: number) => {
    if (playingId === index) {
      audioRefs.current[index]?.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing audio
      if (playingId !== null && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      if (audioRefs.current[index]) {
        audioRefs.current[index].play();
        setPlayingId(index);
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Classes & Lectures
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {classItem.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {classItem.date} • {classItem.topic}
                    </p>
                  </div>
                  {classItem.audioUrl && (
                    <button
                      onClick={() => togglePlay(index)}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      aria-label={playingId === index ? "Pause" : "Play"}
                    >
                      {playingId === index ? (
                        <Pause className="w-5 h-5 text-primary" />
                      ) : (
                        <Play className="w-5 h-5 text-primary" />
                      )}
                    </button>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{classItem.description}</p>

                {classItem.audioUrl && (
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[index] = el;
                    }}
                    src={classItem.audioUrl}
                    onEnded={() => setPlayingId(null)}
                    className="hidden"
                  />
                )}

                {classItem.externalUrl && (
                  <a
                    href={classItem.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-secondary hover:text-secondary/80 gap-2"
                  >
                    Listen on External Platform
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};