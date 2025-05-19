
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Daily Thrive Check-In",
    description: "Business self-care in 2 minutes a day. Track your mood, energy, and get daily tips for managing stress and customers.",
    icon: "💭",
    tag: "FREE",
  },
  {
    title: "Thrive Circles",
    description: "Peer-powered growth pods with trained facilitators. Join industry-based groups to tackle real-life stressors together.",
    icon: "👥",
    tag: "KES 100-300/mo",
  },
  {
    title: "ThriveScore Dashboard",
    description: "A new way to measure business and personal resilience. Generate your ThriveScore to unlock better financial opportunities.",
    icon: "📊",
    tag: "Premium",
  },
  {
    title: "ThriveBoost Marketplace",
    description: "Access free airtime bundles, mental health referrals, and business resources to boost your growth.",
    icon: "🚀",
    tag: "Freemium",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Modules</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our comprehensive tools designed to support entrepreneurs at every stage of their journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs py-1 px-2 rounded-bl-md">
                {feature.tag}
              </span>
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
