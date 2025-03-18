import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal, X } from "lucide-react";

import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';

import { courses } from '@/data/sampleData';

const Courses = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyRange, setDifficultyRange] = useState([0, 10]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // All available categories and levels
  const allCategories = [...new Set(courses.map(course => course.category))];
  const allLevels = ["Beginner", "Intermediate", "Advanced"];
  
  // Filter courses based on current filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = true; // We're using difficulty instead of price now
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    
    return matchesSearch && matchesDifficulty && matchesCategory && matchesLevel;
  });
  
  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  // Toggle level selection
  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setDifficultyRange([0, 10]);
    setSelectedCategories([]);
    setSelectedLevels([]);
  };
  
  // Check if any filters are active
  const hasActiveFilters = searchTerm !== '' || 
                          difficultyRange[0] > 0 || 
                          difficultyRange[1] < 10 || 
                          selectedCategories.length > 0 || 
                          selectedLevels.length > 0;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Courses Header */}
        <section className="bg-muted/30 py-12 md:py-16 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-2 mb-4">Explore Our Courses</h1>
              <p className="text-muted-foreground mb-8">
                Discover a wide range of courses designed to help you master new skills and advance your career.
              </p>
              
              {/* Search Box */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  className="pl-10 pr-4 h-12 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Desktop */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24 space-y-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    {hasActiveFilters && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearFilters}
                        className="h-8 text-sm text-muted-foreground hover:text-foreground"
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                  
                  {/* Difficulty Range Filter (replacing Price Range) */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Difficulty Level</h3>
                    <Slider
                      defaultValue={[0, 10]}
                      min={0}
                      max={10}
                      step={1}
                      value={difficultyRange}
                      onValueChange={setDifficultyRange}
                      className="mt-6"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Beginner</span>
                      <span className="text-sm">Advanced</span>
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="space-y-3">
                      {allCategories.map((category, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${idx}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-${idx}`} className="text-sm font-normal cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Level Filter */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Level</h3>
                    <div className="space-y-3">
                      {allLevels.map((level, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`level-${idx}`} 
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={() => toggleLevel(level)}
                          />
                          <Label htmlFor={`level-${idx}`} className="text-sm font-normal cursor-pointer">
                            {level}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Filter Button */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
                </h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowFilters(true)}
                  className="flex items-center"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {selectedCategories.length + selectedLevels.length + (difficultyRange[0] > 0 || difficultyRange[1] < 10 ? 1 : 0)}
                    </span>
                  )}
                </Button>
              </div>
              
              {/* Mobile Filters Drawer */}
              <div className={`lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowFilters(false)}>
                <div 
                  className={`absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background border-l p-6 overflow-y-auto transition-transform ${showFilters ? 'translate-x-0' : 'translate-x-full'}`}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Mobile Difficulty Range Filter (replacing Price Range) */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-medium">Difficulty Level</h3>
                    <Slider
                      defaultValue={[0, 10]}
                      min={0}
                      max={10}
                      step={1}
                      value={difficultyRange}
                      onValueChange={setDifficultyRange}
                      className="mt-6"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Beginner</span>
                      <span className="text-sm">Advanced</span>
                    </div>
                  </div>
                  
                  {/* Mobile Category Filter */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="space-y-3">
                      {allCategories.map((category, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-category-${idx}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`mobile-category-${idx}`} className="text-sm font-normal cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Level Filter */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-medium">Level</h3>
                    <div className="space-y-3">
                      {allLevels.map((level, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-level-${idx}`} 
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={() => toggleLevel(level)}
                          />
                          <Label htmlFor={`mobile-level-${idx}`} className="text-sm font-normal cursor-pointer">
                            {level}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      onClick={clearFilters}
                    >
                      Clear All
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => setShowFilters(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Courses Grid */}
              <div className="flex-1">
                {/* Courses Count and Sort - Desktop */}
                <div className="hidden lg:flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">
                    {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select className="text-sm border rounded-md p-1.5 bg-background">
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Highest Rated</option>
                    </select>
                  </div>
                </div>
                
                {/* Tab Categories - Consider hiding on mobile to save space */}
                <Tabs defaultValue="all" className="mb-8">
                  <TabsList className="bg-background border-b w-full rounded-none justify-start px-0 h-auto">
                    <TabsTrigger value="all" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      All Courses
                    </TabsTrigger>
                    <TabsTrigger value="featured" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      Featured
                    </TabsTrigger>
                    <TabsTrigger value="trending" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      Trending
                    </TabsTrigger>
                    <TabsTrigger value="new" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      New
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-6">
                    {filteredCourses.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map(course => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <h3 className="text-lg font-medium mb-2">No courses found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your filters or search term to find what you're looking for.
                        </p>
                        <Button className="mt-4" onClick={clearFilters}>Clear all filters</Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="featured" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.filter(course => course.featured).map(course => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="trending" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.filter(course => course.students > 10000).map(course => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="new" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.slice(0, 3).map(course => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                {/* Pagination */}
                {filteredCourses.length > 0 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 p-0 bg-primary text-primary-foreground">
                        1
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        2
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        3
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
