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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary opacity-0 translate-y-8 animate-[fadeUp_0.5s_ease-out_forwards]">
          Education
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
          
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
                  <Card className="inline-block p-6 hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur">
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 bg-primary/10 rounded-full ${index % 2 === 0 ? "order-last" : "order-first"}`}>
                        <GraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-primary">{item}</span>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};