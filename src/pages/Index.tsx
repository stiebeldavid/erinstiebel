import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Career } from "@/components/Career";
import { Leadership } from "@/components/Leadership";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";
import { Classes } from "@/components/Classes";
import { ContactForm } from "@/components/ContactForm";

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
      <section className="section-container bg-accent/30">
        <h2 className="section-title">Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Index;