
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [thriveScore, setThriveScore] = React.useState(72);
  
  const completeCheckIn = () => {
    setThriveScore(thriveScore + 2);
    toast({
      title: "Daily check-in complete!",
      description: "Your ThriveScore has increased by 2 points.",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background h-screen sticky top-0">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">T</span>
            </div>
            <span className="font-bold">ThriveLoop</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
            <div className="mt-4 space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
              >
                Overview
              </Link>
              <Link
                to="/check-in"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Daily Check-In
              </Link>
              <Link
                to="/circles"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Thrive Circles
              </Link>
              <Link
                to="/marketplace"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                ThriveBoost Marketplace
              </Link>
              <Link
                to="/profile"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Profile Settings
              </Link>
            </div>
          </div>
        </nav>
        <div className="mt-auto border-t p-4">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/logout">Sign out</Link>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden absolute top-4 left-4">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">T</span>
              </div>
              <span className="font-bold">ThriveLoop</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
              <div className="mt-4 space-y-1">
                <Link
                  to="/dashboard"
                  className="flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                >
                  Overview
                </Link>
                <Link
                  to="/check-in"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Daily Check-In
                </Link>
                <Link
                  to="/circles"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Thrive Circles
                </Link>
                <Link
                  to="/marketplace"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  ThriveBoost Marketplace
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Profile Settings
                </Link>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t p-4">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/logout">Sign out</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 py-12 px-6 lg:px-8">
        <div className="lg:pl-0 pt-10 lg:pt-0 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, Fatma</h1>
          <p className="text-muted-foreground">Here's an overview of your business wellness journey.</p>

          {/* ThriveScore Card */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Your ThriveScore</CardTitle>
                <CardDescription>How your business wellness is trending</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold">{thriveScore}</span>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">+4% from last week</span>
                </div>
                <Progress value={thriveScore} className="h-2" />
                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-medium">Stress Level</div>
                    <div className="text-muted-foreground">Moderate</div>
                  </div>
                  <div>
                    <div className="font-medium">Energy</div>
                    <div className="text-muted-foreground">High</div>
                  </div>
                  <div>
                    <div className="font-medium">Business Growth</div>
                    <div className="text-muted-foreground">Steady</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/thrive-score">View detailed insights <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Daily Check-In Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Daily Check-In</CardTitle>
                <CardDescription>Take 2 minutes for business self-care</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-primary/10 p-4">
                  <h3 className="font-medium">Today's Tip:</h3>
                  <p className="text-sm mt-1">Try the 5-5-5 breathing technique to reduce stress before customer meetings.</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full" onClick={completeCheckIn}>Complete today's check-in</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Next Thrive Circle Session */}
          <h2 className="text-xl font-semibold mt-8 mb-4">Your Next Thrive Circle Session</h2>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Salon Owners Circle</CardTitle>
              <CardDescription>Thursday, May 21 • 15:00 - 15:30</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Topic: Managing customer relationships when you're overbooked</p>
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">J</div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">M</div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">E</div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">+3</div>
                </div>
                <span className="text-sm text-muted-foreground">7 members attending</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="outline">Cancel</Button>
              <Button asChild>
                <Link to="/join-circle">Join session</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* ThriveBoost Marketplace */}
          <h2 className="text-xl font-semibold mt-8 mb-4">ThriveBoost Offers</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>50MB Free Airtime</CardTitle>
                <CardDescription>Courtesy of Safaricom</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Use this data bundle to connect with customers and promote your business online.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">Claim offer</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Business Poster Templates</CardTitle>
                <CardDescription>Free marketing materials</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Download customizable templates to advertise your salon services.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">View templates</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Wellness Consultation</CardTitle>
                <CardDescription>30-minute free session</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Speak with a wellness coach about managing work-life balance as an entrepreneur.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">Book session</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
