import { Card } from "@/components/ui/card";
import { BookOpen, ArrowUpRight } from "lucide-react";

export const Publications = () => {
  const articles = [
    {
      title: "Boisterous Kids? – Just Love Them!",
      url: "https://www.thejewishnews.com/opinion/boisterous-kids-just-love-them/article_66923306-71f1-5e26-9107-f2f3a55cb3c7.html",
    },
    {
      title: "Bringing Chanukah into Our Homes",
      url: "https://www.thejewishnews.com/opinion/purely-commentary-bringing-chanukah-into-our-homes/article_8b9b1cee-74a7-5c6a-97dc-a074bcfed572.html",
    },
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d299c2] via-white to-[#fef9d7]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Publications
        </h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur hover:bg-white/95 border-l-4 border-l-primary/50 hover:border-l-primary"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between"
              >
                <div className="flex items-center flex-1">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
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
