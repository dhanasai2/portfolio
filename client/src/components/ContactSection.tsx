import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { apiRequest } from "@/lib/queryClient";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isInView } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saigundumogula5@gmail.com",
      href: "mailto:saigundumogula5@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9573614202",
      href: "tel:+919573614202"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amalapuram, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--portfolio-secondary)]/30">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="font-bold text-4xl mb-4 font-mono">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInLeft}
          >
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-6 font-mono">Let's Connect</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="w-12 h-12 bg-[var(--portfolio-accent)]/20 rounded-full flex items-center justify-center group-hover:bg-[var(--portfolio-accent)]/30 transition-colors">
                      <item.icon className="w-5 h-5 text-[var(--portfolio-accent)]" />
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-gray-400">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[var(--portfolio-accent)]/20 rounded-full flex items-center justify-center hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 transform hover:scale-110"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      whileHover={{ rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="glass-effect rounded-2xl p-6"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInRight}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input bg-[var(--portfolio-secondary)]/50 border-gray-600 focus:border-[var(--portfolio-accent)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input bg-[var(--portfolio-secondary)]/50 border-gray-600 focus:border-[var(--portfolio-accent)]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  required
                  className="form-input bg-[var(--portfolio-secondary)]/50 border-gray-600 focus:border-[var(--portfolio-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="form-input bg-[var(--portfolio-secondary)]/50 border-gray-600 focus:border-[var(--portfolio-accent)] resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-hover)] text-[var(--portfolio-primary)] font-semibold py-4 disabled:opacity-50"
              >
                <motion.span
                  className="flex items-center justify-center space-x-2"
                  animate={isSubmitting ? { opacity: 0.6 } : { opacity: 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
