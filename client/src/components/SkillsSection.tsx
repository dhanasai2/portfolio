import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer, skillProgressAnimation } from "@/lib/animations";

const skills = [
  { name: "Java", icon: "☕", percentage: 90, description: "Programming language" },
  { name: "Python", icon: "🐍", percentage: 85, description: "Programming & AI" },
  { name: "JavaScript", icon: "🟨", percentage: 80, description: "Web development" },
  { name: "C++", icon: "⚡", percentage: 85, description: "System programming" },
  { name: "Flutter", icon: "💙", percentage: 80, description: "Mobile development" },
  { name: "Django", icon: "🎯", percentage: 75, description: "Web framework" },
  { name: "MongoDB", icon: "🍃", percentage: 70, description: "NoSQL database" },
  { name: "Git", icon: "🌿", percentage: 75, description: "Version control" },
];

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}

function SkillCard({ skill, index, isInView }: SkillCardProps) {
  const circumference = 2 * Math.PI * 30;
  const strokeDashoffset = circumference - (circumference * skill.percentage / 100);

  return (
    <motion.div
      className="glass-effect rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl mb-4">{skill.icon}</div>
      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
      
      {/* Skill Progress Ring */}
      <div className="relative w-20 h-20 mx-auto">
        <svg className="skill-progress-ring w-20 h-20">
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="rgba(160, 160, 160, 0.3)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="30"
            stroke="var(--portfolio-accent)"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeOut", delay: index * 0.1 + 0.5 }}
            className="skill-progress-circle"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{skill.percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-[var(--portfolio-secondary)]/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="font-bold text-4xl mb-4 font-mono">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
