import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Career = () => {
  const career = [
    {
      role: "Senior Educator",
      org: "Partners Detroit",
      current: true,
      url: "https://partnersdetroit.org/",
    },
    {
      role: "Director of GIVE",
      org: "NCSY Summer",
      current: true,
      url: "https://give.ncsy.org/",
    },
    {
      role: "Director, 4G Detroit",
      org: "NCSY",
      current: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards]">
          Professional Roles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {career.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold ml-4">{item.role}</h3>
              </div>
              <div className="space-y-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  {item.org}
                </a>
                {item.current && (
                  <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};