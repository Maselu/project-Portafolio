import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Web Application Programmer',
      description: 'Deep learning architectures for complex problem solving'
    },
    {
      icon: Cpu,
      title: 'Higher Technician in Industrial Automation and Robotics',
      description: 'Advanced autonomous systems and control algorithms'
    },
    {
      icon: Zap,
      title: 'Intermediate Vocational Training Cycle in Electrical and Automatic Installations',
      description: 'Solar Panel Systems'
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'High-precision motion control and sensor fusion'
    } 
      
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I have experience in the field of automation, performing PLC logic programming functions, HMI user interface configuration, and equipment commissioning.
            I am characterized by my attention to detail, problem-solving skills, and strong project management skills.
            Thanks to my ongoing training, I can adapt to different technologies and production processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;