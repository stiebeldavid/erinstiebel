import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Career } from "@/components/Career";
import { Leadership } from "@/components/Leadership";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";
import { Classes } from "@/components/Classes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Career />
      <Education />
      <Leadership />
      <Classes />
      <Publications />
      <Testimonials />
    </div>
  );
};

export default Index;