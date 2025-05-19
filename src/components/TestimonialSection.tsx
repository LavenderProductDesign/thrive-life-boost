
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Since using ThriveLoop, I've been able to manage my salon better. The daily check-ins remind me to take care of myself, which helps me provide better service to my customers.",
    name: "Fatma K.",
    role: "Salon Owner",
    avatar: "F",
  },
  {
    quote: "The Thrive Circle for shopkeepers has been invaluable. I've learned strategies from peers facing the same challenges, and my ThriveScore has helped me access better loan terms.",
    name: "Joyce M.",
    role: "Shopkeeper",
    avatar: "J",
  },
  {
    quote: "As a tailor, I used to struggle with irregular customer flow. ThriveLoop's tools have helped me manage stress and build a more consistent customer base.",
    name: "Esther W.",
    role: "Tailor",
    avatar: "E",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from entrepreneurs who've transformed their businesses with ThriveLoop.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <blockquote className="text-lg italic text-gray-600 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
              </CardHeader>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
