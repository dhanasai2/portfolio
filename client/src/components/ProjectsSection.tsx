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
    title: "Job Portal - Django Based Role-Based Hiring Platform",
    description: "A fully functional job portal built using Django that supports role-based access control for Applicants, Companies, and Admins. It streamlines the hiring process with email notifications, professional UI, and dark/light mode.",
    fullDescription: "This is a comprehensive job portal built using Django that supports role-based access control for Applicants, Companies, and Admins. It streamlines the hiring process by allowing companies to post jobs, users to apply, and admins to monitor activities. The portal features email notification system, professional UI with animations, dark/light mode toggle, and is designed to scale efficiently.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Django", "HTML5", "CSS3", "Bootstrap", "JavaScript", "SQLite"],
    features: [
      "Role-based access: User, Company, and Admin dashboards",
      "Job posting and application system",
      "Email alerts for application status (Accepted/Rejected)",
      "Password reset with email OTP",
      "Dark/Light mode toggle",
      "Resume upload for applicants",
      "Admin panel for job & user monitoring",
      "Clean, responsive UI with animation effects"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanasai2/job-portal-django"
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
            My featured Django project showcasing full-stack development skills
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto"
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
