
import { CourseProps } from "@/components/CourseCard";
import { TeamMemberProps } from "@/components/TeamMemberCard";
import { TestimonialProps } from "@/components/Testimonial";

// Sample course data
export const courses: CourseProps[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, and more with hands-on projects and real-world applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    creator: "Sarah Johnson",
    rating: 4.8,
    students: 15420,
    duration: "12 weeks",
    level: "Beginner",
    category: "Web Development",
    featured: true
  },
  {
    id: "2",
    title: "Data Science & Machine Learning: Python",
    description: "Master data science, machine learning, and Python programming with real-world projects and hands-on exercises.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    creator: "Michael Chen",
    rating: 4.9,
    students: 12840,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Data Science"
  },
  {
    id: "3",
    title: "UI/UX Design: From Beginner to Professional",
    description: "Learn the principles of UI/UX design, prototyping, and user research with Figma, Adobe XD, and Sketch.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    creator: "Emma Rodriguez",
    rating: 4.7,
    students: 9230,
    duration: "8 weeks",
    level: "Beginner",
    category: "Design"
  },
  {
    id: "4",
    title: "Advanced React & Redux: Enterprise Applications",
    description: "Build complex, scalable React applications with Redux state management, advanced patterns, and best practices.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    creator: "David Kim",
    rating: 4.9,
    students: 7840,
    duration: "8 weeks",
    level: "Advanced",
    category: "Web Development",
    featured: true
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    description: "Master SEO, social media marketing, content strategy, email marketing, and analytics to grow your business online.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    creator: "Jessica Williams",
    rating: 4.6,
    students: 11250,
    duration: "6 weeks",
    level: "Beginner",
    category: "Marketing"
  },
  {
    id: "6",
    title: "iOS Development with Swift",
    description: "Learn iOS app development from scratch using Swift and Xcode. Build real-world apps and publish to the App Store.",
    image: "https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    creator: "Robert Zhang",
    rating: 4.8,
    students: 6430,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Mobile Development"
  }
];

// Sample team member data
export const teamMembers: TeamMemberProps[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Lead Frontend Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    bio: "Full-stack developer with 10+ years of experience specializing in React. Previously worked at Google and contributed to several open-source projects.",
    projectsCount: 32,
    githubStars: 1240,
    contributionsCount: 2816,
    specialties: ["JavaScript", "React", "Node.js", "Full-Stack"]
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "ML & Data Science Lead",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    bio: "PhD in Computer Science from MIT with expertise in ML and AI. Creator of multiple open-source ML libraries and passionate about democratizing AI education.",
    projectsCount: 24,
    githubStars: 3450,
    contributionsCount: 1923,
    specialties: ["Python", "Machine Learning", "AI", "Data Analysis"]
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    title: "UI/UX Designer & Developer",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    bio: "UI/UX designer with a coding background. Believes in beautiful, accessible designs paired with clean code. Contributor to several design systems.",
    projectsCount: 45,
    githubStars: 890,
    contributionsCount: 1254,
    specialties: ["UI Design", "UX Research", "Figma", "Frontend"]
  },
  {
    id: "4",
    name: "David Park",
    title: "Backend & DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    bio: "Backend specialist with expertise in scalable architectures. Passionate about CI/CD, containerization, and cloud infrastructure. AWS certified.",
    projectsCount: 28,
    githubStars: 2310,
    contributionsCount: 3156,
    specialties: ["Node.js", "Docker", "AWS", "Kubernetes"]
  }
];

// Sample testimonial data
export const testimonials: TestimonialProps[] = [
  {
    id: "1",
    content: "This course completely transformed my career. I went from knowing nothing about web development to landing a full-time job as a frontend developer in just 4 months.",
    author: {
      name: "James Wilson",
      title: "Frontend Developer at TechCorp",
      image: "https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
    },
    rating: 5,
    course: "Complete Web Development Bootcamp"
  },
  {
    id: "2",
    content: "The machine learning course provided me with practical skills I could immediately apply at work. The projects were challenging but incredibly rewarding.",
    author: {
      name: "Sophia Lee",
      title: "Data Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    },
    rating: 5,
    course: "Data Science & Machine Learning: Python"
  },
  {
    id: "3",
    content: "As someone looking to transition into UX design, this course gave me exactly what I needed. The material is presented in a way that's easy to understand.",
    author: {
      name: "Thomas Garcia",
      title: "UX Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    rating: 4,
    course: "UI/UX Design: From Beginner to Professional"
  },
  {
    id: "4",
    content: "The digital marketing course helped me triple my company's online presence in just two months. The strategies are practical and yield immediate results.",
    author: {
      name: "Emily Patel",
      title: "Marketing Director",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"
    },
    rating: 5,
    course: "Digital Marketing Masterclass"
  }
];
