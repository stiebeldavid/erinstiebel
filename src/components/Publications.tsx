import { Card } from "@/components/ui/card";
import { BookOpen, ArrowUpRight } from "lucide-react";

export const Publications = () => {
  const articles = [
    {
      title: "A Hotel in Savannah, Georgia: Yom Kippur 5777",
      url: "https://mishpacha.com/a-hotel-in-savannah-georgia-yom-kippur-5777/",
    },
    {
      title: "Choose Life",
      url: "https://mishpacha.com/choose-life-4/",
    },
    {
      title: "Mommy Made Dinner",
      url: "https://mishpacha.com/all-in-a-days-work/",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Publications
        </h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between"
              >
                <div className="flex items-center flex-1">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl ml-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};