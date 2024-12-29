import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Leadership } from "@/components/Leadership";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Leadership />
      <Publications />
      <Testimonials />
    </div>
  );
};

export default Index;