import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  const education = [
    "MBA from Touro Graduate School of Business",
    "Master's Jewish Education from Azrieli (Yeshiva University)",
    "Bachelor's Jewish Studies, Yeshiva University / Stern",
    "Alumna of MMY",
  ];

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
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start group hover:translate-x-2 transition-transform duration-200"
                >
                  <span className="mr-3 text-primary">•</span>
                  <span className="group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Career</h3>
            </div>
            <ul className="space-y-6">
              {career.map((item, index) => (
                <li
                  key={index}
                  className="group hover:translate-x-2 transition-transform duration-200"
                >
                  <div className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {item.role}
                      </p>
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
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};