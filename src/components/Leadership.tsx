import { Card } from "@/components/ui/card";
import { Users, ExternalLink } from "lucide-react";

export const Leadership = () => {
  const roles = [
    {
      role: "Board Member",
      org: "Detroit Jewish Federation",
      url: "https://jewishdetroit.org/",
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
      role: "Next Gen Board Member",
      org: "Detroit Jewish Federation",
      url: "https://jewishdetroit.org/",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Leadership & Volunteering
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {roles.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{item.role}</h3>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group inline-flex items-center text-primary hover:text-primary/80"
                >
                  {item.org}
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};