import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface VideoClass {
  title: string;
  youtubeUrl: string;
  embedId: string;
}

export const Classes = () => {
  const classes: VideoClass[] = [
    {
      title: "Parshat Vayigash - The Power of Unity",
      youtubeUrl: "https://youtu.be/zKnMRBFCxng?t=1704",
      embedId: "zKnMRBFCxng"
    },
    {
      title: "The Meaning Behind the Shofar",
      youtubeUrl: "https://www.youtube.com/watch?v=50IBKFTRvy4",
      embedId: "50IBKFTRvy4"
    },
    {
      title: "Exploring Jewish Mysticism",
      youtubeUrl: "https://www.youtube.com/watch?v=E1uz1SfrBMc",
      embedId: "E1uz1SfrBMc"
    },
    {
      title: "Understanding Jewish Prayer",
      youtubeUrl: "https://www.youtube.com/watch?v=jaXL0cIl98A",
      embedId: "jaXL0cIl98A"
    },
    {
      title: "The Jewish Perspective on Relationships",
      youtubeUrl: "https://www.youtube.com/watch?v=Y05qVL67RI8",
      embedId: "Y05qVL67RI8"
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
                <div className="mb-4">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${classItem.embedId}`}
                      title={classItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>

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