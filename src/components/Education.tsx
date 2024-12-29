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
        <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur opacity-0 translate-y-8 animate-[fadeUp_0.5s_0.2s_ease-out_forwards]">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold ml-4">Academic Background</h3>
          </div>
          <ul className="space-y-4">
            {education.map((item, index) => (
              <li
                key={index}
                className="flex items-start group hover:translate-x-2 transition-transform duration-200 opacity-0 animate-[fadeUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <span className="mr-3 text-primary">•</span>
                <span className="group-hover:text-primary transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};