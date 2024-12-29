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
    <section id="about" className="section-container bg-gray-50">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <ul className="space-y-3">
            {education.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-bold">Career</h3>
          </div>
          <ul className="space-y-4">
            {career.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <p className="font-semibold">{item.role}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {item.org}
                  </a>
                  {item.current && (
                    <span className="ml-2 text-sm text-green-600">(Current)</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};