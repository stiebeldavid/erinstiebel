import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
            Erin Stiebel
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 font-light">
            Empowering Jewish Education & Community Leadership
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
            className="group bg-secondary hover:bg-secondary/90"
          >
            Learn More
            <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
};