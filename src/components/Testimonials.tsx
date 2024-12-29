import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Please never leave us",
      author: "JG (local mom, friend, and neighbor)",
    },
    {
      quote: "Mommy is the best mommy ever",
      author: "Multiple kids",
    },
    {
      quote: "Ashreini - luckiest husband in the world",
      author: "Husband",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          What Others Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white/80 backdrop-blur"
            >
              <Quote className="w-8 h-8 text-secondary mb-6" />
              <p className="text-xl mb-6 font-serif italic text-gray-700">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-gray-600 font-medium">
                — {testimonial.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};