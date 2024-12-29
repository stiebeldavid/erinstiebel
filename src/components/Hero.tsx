import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-800 to-blue-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat rotate-12 scale-150 animate-[spin_240s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
              Erin Stiebel
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 font-light leading-relaxed">
              Empowering Jewish Education & Community Leadership
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById("education")?.scrollIntoView()}
              className="group bg-secondary hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};