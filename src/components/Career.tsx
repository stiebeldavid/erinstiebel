import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Career = () => {
  const career = [
    {
      role: "Senior Educator",
      org: "Partners Detroit",
      current: true,
      url: "https://partnersdetroit.org/",
      image: "/lovable-uploads/86af26fe-651a-4a1d-8230-9b07229eede8.png"
    },
    {
      role: "Director of GIVE",
      org: "NCSY Summer",
      current: true,
      url: "https://give.ncsy.org/",
      image: "/lovable-uploads/c0c4136c-e9fd-420e-861a-9f468995b6a4.png"
    },
    {
      role: "Director, 4G Detroit",
      org: "NCSY",
      current: true,
      image: "/lovable-uploads/a8cb8352-2bfd-473b-ae76-974e9c05ae59.png"
    },
    {
      role: "Dating Coach",
      org: "Independent Practice",
      current: true,
      image: "/lovable-uploads/6b8347f2-c313-4951-b4d9-50d66827b36b.png"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards]">
          Professional Roles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {career.map((item, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards] hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {item.image && (
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.role} at ${item.org}`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold ml-4 group-hover:text-primary transition-colors">{item.role}</h3>
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