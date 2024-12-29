import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-blue-900 text-white min-h-[80vh] flex items-center">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Erin Stiebel
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100">
            Jewish Educator, Community Leader, and Mentor
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
            className="bg-secondary hover:bg-secondary/90"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};