import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer, projectCardHover } from "@/lib/animations";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: "project1",
    title: "Flutter Mobile Apps Collection",
    description: "A repository containing different types of Flutter applications showcasing mobile development skills with Dart programming language.",
    fullDescription: "A comprehensive collection of Flutter applications demonstrating various mobile development concepts. This repository showcases different types of mobile apps built with Flutter framework, highlighting skills in Dart programming, UI/UX design, and mobile app architecture.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
    features: [
      "Cross-platform mobile development",
      "Multiple app examples and demos",
      "Modern UI/UX implementations",
      "State management solutions",
      "Platform-specific integrations",
      "Responsive mobile designs",
      "Clean code architecture"
    ],
    liveUrl: "https://github.com/saigundumogula/flutter-projects",
    githubUrl: "https://github.com/saigundumogula/flutter-projects"
  },
  {
    id: "project2", 
    title: "Color Tap Game",
    description: "An interactive mobile game application built with Flutter featuring engaging gameplay mechanics and responsive design.",
    fullDescription: "An interactive color-based tap game developed using Flutter. The game features engaging gameplay mechanics, smooth animations, and responsive design optimized for mobile devices. Players interact with colored elements in a fun and challenging gaming experience.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Dart", "Game Development", "Animations"],
    features: [
      "Interactive gameplay mechanics",
      "Smooth animations and transitions",
      "Responsive touch controls",
      "Score tracking system",
      "Engaging visual design",
      "Cross-platform compatibility",
      "Performance optimized"
    ],
    liveUrl: "https://github.com/saigundumogula/color-tap-game",
    githubUrl: "https://github.com/saigundumogula/color-tap-game"
  },
  {
    id: "project3",
    title: "Netflix Clone",
    description: "A web application clone of Netflix built using HTML and CSS, demonstrating frontend development skills and responsive design principles.",
    fullDescription: "A static web application that replicates the Netflix user interface using HTML and CSS. This project demonstrates frontend development skills, responsive design principles, and attention to detail in recreating a popular streaming platform's layout and styling.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Frontend"],
    features: [
      "Pixel-perfect Netflix UI recreation",
      "Responsive design for all devices",
      "Clean and semantic HTML structure",
      "Modern CSS styling techniques",
      "Interactive hover effects",
      "Cross-browser compatibility",
      "Optimized loading performance"
    ],
    liveUrl: "https://github.com/saigundumogula/netflix-clone",
    githubUrl: "https://github.com/saigundumogula/netflix-clone"
  },
  {
    id: "project4",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with advanced animations and interactive elements.",
    fullDescription: "A comprehensive portfolio website built with modern web technologies. Features include responsive design, smooth animations, interactive project showcases, contact forms, and optimized performance. The site demonstrates full-stack development capabilities and modern web design principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    features: [
      "Responsive and modern design",
      "Advanced animations and transitions",
      "Interactive project showcase",
      "Contact form with backend integration",
      "Skills visualization with progress indicators",
      "Smooth scrolling navigation",
      "Performance optimized"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  onOpenModal: (project: typeof projects[0]) => void;
}

function ProjectCard({ project, index, isInView, onOpenModal }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card glass-effect rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      variants={projectCardHover}
      whileHover="hover"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button
            size="sm"
            className="bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent-hover)]"
          >
            View Details
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-xl font-mono">{project.title}</h3>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-[var(--portfolio-accent)] h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-[var(--portfolio-accent)] h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)] px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="font-bold text-4xl mb-4 font-mono">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onOpenModal={openModal}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] font-semibold px-8 py-4"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
