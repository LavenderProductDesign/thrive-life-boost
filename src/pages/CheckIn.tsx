
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, CheckCircle } from "lucide-react";

const CheckIn = () => {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState("");
  const [energy, setEnergy] = useState("");
  const [businessConcern, setBusinessConcern] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form
      toast({
        title: "Check-in complete!",
        description: "Your ThriveScore has been updated based on today's check-in.",
      });
      navigate("/dashboard");
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={handlePrevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Daily Thrive Check-In</h1>
          <div className="text-sm text-muted-foreground">Step {step} of 3</div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>How are you feeling today?</CardTitle>
              <CardDescription>Your mood affects your business decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={mood} onValueChange={setMood} className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="great" id="great" className="peer sr-only" />
                  <Label
                    htmlFor="great"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">😀</span>
                    <span className="text-sm font-medium">Great</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="good" id="good" className="peer sr-only" />
                  <Label
                    htmlFor="good"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">🙂</span>
                    <span className="text-sm font-medium">Good</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="okay" id="okay" className="peer sr-only" />
                  <Label
                    htmlFor="okay"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">😐</span>
                    <span className="text-sm font-medium">Okay</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="stressed" id="stressed" className="peer sr-only" />
                  <Label
                    htmlFor="stressed"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">😩</span>
                    <span className="text-sm font-medium">Stressed</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNextStep} disabled={!mood} className="w-full">
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>How is your energy level today?</CardTitle>
              <CardDescription>Your energy affects your productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={energy} onValueChange={setEnergy} className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="high" id="high" className="peer sr-only" />
                  <Label
                    htmlFor="high"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">⚡</span>
                    <span className="text-sm font-medium">High Energy</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="moderate" id="moderate" className="peer sr-only" />
                  <Label
                    htmlFor="moderate"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">🔋</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="low" id="low" className="peer sr-only" />
                  <Label
                    htmlFor="low"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">🔌</span>
                    <span className="text-sm font-medium">Low Energy</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="drained" id="drained" className="peer sr-only" />
                  <Label
                    htmlFor="drained"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-1">😴</span>
                    <span className="text-sm font-medium">Drained</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNextStep} disabled={!energy} className="w-full">
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>What's your main business concern today?</CardTitle>
              <CardDescription>This helps us tailor tips to your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={businessConcern}
                onValueChange={setBusinessConcern}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customers" id="customers" />
                  <Label htmlFor="customers">Finding new customers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cashflow" id="cashflow" />
                  <Label htmlFor="cashflow">Cash flow issues</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="time" id="time" />
                  <Label htmlFor="time">Time management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stress" id="stress" />
                  <Label htmlFor="stress">Stress and burnout</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>

              {businessConcern === "other" && (
                <div className="mt-4">
                  <Label htmlFor="otherConcern">Please specify:</Label>
                  <Textarea id="otherConcern" className="mt-1" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleNextStep} disabled={!businessConcern} className="w-full">
                Complete Check-In
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="mt-8">
          <Card className="bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Today's Wellness Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <strong>Mindful Moments:</strong> Take 2-minute breaks between customers to practice deep breathing. This helps reset your mind and maintain energy throughout the day.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
