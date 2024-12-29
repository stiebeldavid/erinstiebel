import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

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
    <section className="section-container">
      <h2 className="section-title">Leadership & Volunteering</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((item, index) => (
          <Card key={index} className="p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-semibold">{item.role}</h3>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-auto"
            >
              {item.org}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};