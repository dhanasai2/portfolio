import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/saigundumogula", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhana-sai-gundumogula", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/saigundumogula", label: "Twitter" },
  ];

  return (
    <footer className="py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-gray-400 mb-4 md:mb-0 flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>© 2024 Dhana Sai Gundumogula. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of code.</span>
          </motion.div>
          
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--portfolio-accent)] transition-colors"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  color: "var(--portfolio-accent)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 10 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
