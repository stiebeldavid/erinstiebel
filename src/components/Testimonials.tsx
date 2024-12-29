import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Please never leave us",
      author: "Multiple local moms, friends, and neighbors",
    },
    {
      quote: "Mommy is the best mommy ever",
      author: "Multiple kids",
    },
    {
      quote: "Ashreini",
      author: "- World's Luckiest Husband",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffc3a0] via-white to-[#ffafbd]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          What Others Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur hover:bg-white/95"
            >
              <Quote className="w-8 h-8 text-secondary mb-6 transform group-hover:scale-110 transition-transform" />
              <p className="text-xl mb-6 font-serif italic text-gray-700 relative">
                <span className="absolute -left-2 -top-2 text-6xl text-secondary/20">"</span>
                {testimonial.quote}
                <span className="absolute -right-2 bottom-0 text-6xl text-secondary/20">"</span>
              </p>
              <p className="text-sm text-gray-600 font-medium group-hover:text-primary transition-colors">
                {testimonial.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};