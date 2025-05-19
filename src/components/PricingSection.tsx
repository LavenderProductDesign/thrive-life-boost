
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Affordable Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose a plan that works for your business needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {/* Free Tier */}
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>Essential tools to start your journey</CardDescription>
              <div className="text-3xl font-bold">KES 0</div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Daily Thrive Check-In</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Basic ThriveScore</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Weekly Summary Insights</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Basic Tier */}
          <Card className="relative overflow-hidden border-primary">
            <div className="absolute top-0 right-0 left-0 h-1 bg-primary" />
            <CardHeader>
              <CardTitle>Basic Membership</CardTitle>
              <CardDescription>Perfect for growing businesses</CardDescription>
              <div className="text-3xl font-bold">KES 100/mo</div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>All Free Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Basic Thrive Circles (2x/month)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Enhanced ThriveScore</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Basic ThriveBoost Rewards</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link to="/signup?plan=basic">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Premium Tier */}
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>Premium Membership</CardTitle>
              <CardDescription>Full suite of business growth tools</CardDescription>
              <div className="text-3xl font-bold">KES 300/mo</div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Premium Thrive Circles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Advanced ThriveScore Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Full ThriveBoost Marketplace Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>Priority MFI Referrals</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/signup?plan=premium">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
