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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
    fullDescription: "A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard for inventory management. The platform is fully responsive and optimized for performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory control",
      "Responsive design for all devices"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "project2",
    title: "AI Chat Application",
    description: "An intelligent chatbot powered by OpenAI's GPT API with real-time messaging, conversation history, and customizable AI personalities.",
    fullDescription: "An intelligent chatbot application powered by OpenAI's GPT API. Features real-time messaging, conversation history, customizable AI personalities, and integration with various data sources for enhanced responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    features: [
      "Real-time messaging with WebSocket",
      "Integration with OpenAI GPT models",
      "Conversation history and context management",
      "Customizable AI personalities",
      "File upload and processing",
      "Multi-language support",
      "Dark/light theme toggle"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "project3",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reporting features.",
    fullDescription: "A powerful analytics dashboard built with modern web technologies. Features real-time data visualization, interactive charts, customizable reporting, and advanced filtering capabilities for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Customizable dashboards",
      "Advanced filtering and search",
      "Export data in multiple formats",
      "Role-based access control",
      "Mobile-responsive design"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "project4",
    title: "Fitness Tracker App",
    description: "A cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features for motivation.",
    fullDescription: "A comprehensive fitness tracking application built with React Native. Features workout planning, progress tracking, social sharing, and integration with wearable devices for accurate health monitoring.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Node.js", "MongoDB"],
    features: [
      "Workout planning and tracking",
      "Progress monitoring and analytics",
      "Social features and challenges",
      "Wearable device integration",
      "Nutrition tracking",
      "Goal setting and achievements",
      "Offline mode support"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "project5",
    title: "DeFi Trading Platform",
    description: "A decentralized finance platform for cryptocurrency trading with smart contracts, yield farming, and liquidity pool management.",
    fullDescription: "A cutting-edge DeFi platform built on Ethereum blockchain. Features decentralized trading, yield farming, liquidity pool management, and advanced security measures for safe cryptocurrency transactions.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Solidity", "Web3.js", "Ethereum", "MetaMask", "React", "Hardhat"],
    features: [
      "Decentralized cryptocurrency trading",
      "Smart contract integration",
      "Yield farming and staking",
      "Liquidity pool management",
      "Multi-wallet support",
      "Real-time price feeds",
      "Security audited contracts"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "project6",
    title: "Project Management Tool",
    description: "A collaborative project management tool with Kanban boards, time tracking, team collaboration features, and integration with popular tools.",
    fullDescription: "A comprehensive project management solution designed for modern teams. Features Kanban boards, time tracking, team collaboration, file sharing, and integrations with popular development and productivity tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Angular", "NestJS", "GraphQL", "Prisma", "PostgreSQL", "Socket.io"],
    features: [
      "Kanban board management",
      "Time tracking and reporting",
      "Team collaboration tools",
      "File sharing and storage",
      "Integration with third-party tools",
      "Custom workflows and automation",
      "Advanced project analytics"
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
