import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

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
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Publications</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors"
                >
                  {article.title}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};