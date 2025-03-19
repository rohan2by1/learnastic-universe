
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { BookOpen, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
      ]
    },
    {
      title: "Courses",
      links: [
        { name: "All Courses", href: "/courses" },
        { name: "Web Development", href: "#" },
        { name: "Data Science", href: "#" },
        { name: "Design", href: "#" },
        { name: "Business", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];
  
  const contactInfo = [
    { icon: Mail, text: "support@lumied.com" },
    { icon: Phone, text: "+91 9382900937" },
    { icon: MapPin, text: "KTTPS Township , Kolaghat, West Bengal" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Information */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">LumiED</span>
            </Link>
            
            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering learners worldwide with high-quality education and skill development opportunities.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center 
                           bg-white border border-border shadow-sm
                           text-muted-foreground hover:text-primary 
                           transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((group, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-semibold text-sm tracking-wide uppercase">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary text-sm 
                               transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="font-semibold text-sm tracking-wide uppercase">
              Subscribe
            </h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and offers directly to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="max-w-xs" 
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
            
            <div className="pt-4 space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <item.icon className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} LumiED. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
