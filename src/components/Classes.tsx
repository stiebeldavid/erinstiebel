import { Card } from "@/components/ui/card";
import { ExternalLink, Play, Pause } from "lucide-react";
import { useState } from "react";

interface VideoClass {
  title: string;
  description: string;
  youtubeUrl: string;
  date: string;
  topic: string;
}

export const Classes = () => {
  const classes: VideoClass[] = [
    {
      title: "Parshat Vayigash - The Power of Unity",
      description: "An exploration of the profound lessons about unity and reconciliation from the story of Joseph and his brothers.",
      youtubeUrl: "https://youtu.be/zKnMRBFCxng?t=1704",
      date: "December 2023",
      topic: "Torah Portion"
    },
    {
      title: "The Meaning Behind the Shofar",
      description: "Understanding the deeper significance of the shofar and its role in Jewish tradition.",
      youtubeUrl: "https://www.youtube.com/watch?v=50IBKFTRvy4",
      date: "September 2023",
      topic: "High Holidays"
    },
    {
      title: "Exploring Jewish Mysticism",
      description: "A journey into the mystical dimensions of Judaism and their relevance to modern life.",
      youtubeUrl: "https://www.youtube.com/watch?v=E1uz1SfrBMc",
      date: "August 2023",
      topic: "Jewish Mysticism"
    },
    {
      title: "Understanding Jewish Prayer",
      description: "Delving into the structure and meaning of Jewish prayer and its impact on spiritual growth.",
      youtubeUrl: "https://www.youtube.com/watch?v=jaXL0cIl98A",
      date: "July 2023",
      topic: "Prayer"
    },
    {
      title: "The Jewish Perspective on Relationships",
      description: "Exploring the Jewish approach to building and maintaining meaningful relationships.",
      youtubeUrl: "https://www.youtube.com/watch?v=Y05qVL67RI8",
      date: "June 2023",
      topic: "Relationships"
    }
  ];

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
                </div>

                <p className="text-gray-600 mb-4">{classItem.description}</p>

                <a
                  href={classItem.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-secondary hover:text-secondary/80 gap-2"
                >
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};