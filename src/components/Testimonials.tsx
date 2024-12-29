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
    <section className="section-container">
      <h2 className="section-title">What Others Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <Quote className="w-8 h-8 text-secondary mb-4" />
            <p className="text-lg mb-4 italic">{testimonial.quote}</p>
            <p className="text-sm text-gray-600">- {testimonial.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};