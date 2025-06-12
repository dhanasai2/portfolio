import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, fadeInRight, floatAnimation } from "@/lib/animations";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "25+", label: "Happy Clients" },
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
                Hello! I'm John, a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey in web development 
                started in 2018, and I've been fascinated by the endless possibilities of code ever since.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and creating 
                seamless user experiences. When I'm not coding, you'll find me exploring new 
                technologies, contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
              
              <p>
                Currently, I'm focused on building accessible, performant web applications 
                and exploring the intersection of AI and web development.
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
