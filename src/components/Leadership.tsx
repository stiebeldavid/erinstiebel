import { Card } from "@/components/ui/card";
import { Users, ExternalLink, ChevronRight, Award } from "lucide-react";

export const Leadership = () => {
  const roles = [
    {
      org: "Detroit Jewish Federation",
      url: "https://jewishdetroit.org/",
      positions: [
        "Board Member",
        "Allocations Committee",
        "Next Gen Board"
      ]
    },
    {
      role: "Core MMC (Mashpia/Mentor/Counselor)",
      org: "CORE Torah",
      url: "https://coretorah.org/",
    },
    {
      role: "Mikvah Mentor",
      org: "Mikvah USA",
      url: "https://mygiftofmikvah.org/educators/",
    },
    {
      role: "Deja Vu Purim Donation Drive",
      org: "Yad Ezra",
      url: "https://www.yadezra.org/",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#accbee] via-white to-[#e7f0fd]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Leadership & Volunteering
        </h2>
        
        {/* Recognition Card */}
        <Card className="mb-8 p-8 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur border-t-4 border-t-secondary hover:border-t-secondary/80">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-full">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Detroit Jewish News' 36 Under 36</h3>
              <a
                href="https://www.thejewishnews.com/news/local/the-well-jn-s-36-under-36-erin-stiebel/article_cfad4aef-7a9e-5b93-9d79-b119f719e1f9.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 inline-flex items-center gap-2"
              >
                Read More
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {roles.map((item, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur border-t-4 border-t-primary/50 hover:border-t-primary"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  {item.positions ? (
                    <h3 className="text-xl font-semibold ml-4 group-hover:text-primary transition-colors">
                      {item.org}
                    </h3>
                  ) : (
                    <h3 className="text-xl font-semibold ml-4 group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                  )}
                </div>
                
                {item.positions ? (
                  <div className="mt-4 space-y-2">
                    {item.positions.map((position, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-primary/60" />
                        <span className="ml-2">{position}</span>
                      </div>
                    ))}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-primary hover:text-primary/80"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto group inline-flex items-center text-primary hover:text-primary/80"
                  >
                    {item.org}
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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