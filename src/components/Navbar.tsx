
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
  ];

  const NavLink = ({ name, path }: { name: string; path: string }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link 
        to={path}
        className={cn(
          "relative px-3 py-2 font-medium text-sm transition-colors duration-200",
          "hover:text-primary focus-ring rounded-md",
          isActive ? "text-primary" : "text-foreground/80"
        )}
      >
        {name}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur border-b shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 focus-ring rounded-md">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">EduLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} name={link.name} path={link.path} />
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-medium">
              Log in
            </Button>
            <Button size="sm" className="font-medium">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus-ring rounded-md p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur border-b transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "top-16 opacity-100 pointer-events-auto" 
            : "top-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-3 p-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "py-2 px-3 rounded-md transition-colors duration-200 font-medium",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Sign up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
