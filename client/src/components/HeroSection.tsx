import { motion } from "framer-motion";
import { ChevronDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a simple resume download or open in new tab
    const resumeUrl = "#"; // Replace with actual resume URL
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.p
          className="text-[var(--portfolio-accent)] font-mono text-sm mb-4"
          variants={fadeInUp}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          className="font-bold text-5xl md:text-7xl mb-6 font-mono"
          variants={fadeInUp}
        >
          John Developer
        </motion.h1>
        
        <motion.h2
          className="font-semibold text-3xl md:text-5xl text-gray-400 mb-8 font-mono"
          variants={fadeInUp}
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={fadeInUp}
        >
          I craft exceptional digital experiences with modern technologies, 
          turning ideas into beautiful, functional applications.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={fadeInUp}
        >
          <Button
            size="lg"
            className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-hover)] text-[var(--portfolio-primary)] font-semibold px-8 py-4 text-base"
            onClick={scrollToProjects}
          >
            <Eye className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] font-semibold px-8 py-4 text-base"
            onClick={downloadResume}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-[var(--portfolio-accent)] text-2xl" />
      </motion.div>
    </section>
  );
}
