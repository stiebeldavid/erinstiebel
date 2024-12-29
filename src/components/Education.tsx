import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    "MBA from Touro Graduate School of Business",
    "Master's Jewish Education from Azrieli (Yeshiva University)",
    "Bachelor's Jewish Studies, Yeshiva University / Stern",
    "Alumna of MMY",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards]">
          Education
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`flex items-center opacity-0 animate-[fadeUp_0.5s_ease-out_forwards] ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <Card className="inline-block p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur hover:-translate-y-1 group">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">{item}</span>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};