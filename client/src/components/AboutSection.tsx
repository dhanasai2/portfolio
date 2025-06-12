import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, fadeInRight, floatAnimation } from "@/lib/animations";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "6+", label: "Certifications" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h2 className="font-bold text-4xl mb-8 font-mono">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm Dhana Sai Gundumogula, a passionate B.Tech Information Technology student 
                at JNTU Gurajada Vizianagaram. With a strong foundation in both front-end and back-end 
                development, I specialize in building scalable web applications, full-stack solutions, 
                and AI-powered systems.
              </p>
              
              <p>
                I enjoy solving real-world problems using technology and have experience with 
                multiple programming languages including Java, C++, Python, and JavaScript. 
                My expertise spans from mobile app development with Flutter to web development 
                with Django and modern JavaScript frameworks.
              </p>
              
              <p>
                Currently pursuing my Bachelor's degree with a CGPA of 8.1, I'm focused on 
                expanding my knowledge in full-stack development and exploring emerging 
                technologies in AI and cloud computing.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInRight}
            className="relative"
          >
            <motion.div
              className="relative"
              variants={floatAnimation}
              animate="animate"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-accent)]/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
