
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 md:py-16 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-2 lg:w-1/3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold text-xl">ThriveLoop</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your business thrives when you do. ThriveLoop helps small business owners reduce stress, increase customers, and unlock credit.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-muted-foreground hover:underline">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-muted-foreground hover:underline">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 border-t py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ThriveLoop. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="#" className="text-sm text-muted-foreground hover:underline">
            Instagram
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:underline">
            X
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:underline">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
