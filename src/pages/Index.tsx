import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Career } from "@/components/Career";
import { Leadership } from "@/components/Leadership";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Career />
      <Leadership />
      <Publications />
      <Testimonials />
    </div>
  );
};

export default Index;