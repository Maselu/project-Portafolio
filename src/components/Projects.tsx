import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t.projects.items.socialApp.title,
      description: t.projects.items.socialApp.description,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Jsx', 'Php', 'Laravel', 'Supabase'],
      github: 'https://github.com/Maselu/opcion-1-snews-',
      demo: 'https://github.com/Maselu/opcion-1-snews-/blob/main/README.md',
      featured: true
    },
    {
      title: t.projects.items.neuralOptimizer.title,
      description: t.projects.items.neuralOptimizer.description,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'CUDA', 'NumPy'],
      github: 'https://github.com/Maselu',
      demo: '#',
      featured: false
    },
    {
      title: t.projects.items.roboticArm.title,
      description: t.projects.items.roboticArm.description,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C++', 'ROS2', 'MoveIt', 'OpenCV', 'Arduino'],
      github: 'https://github.com/Maselu',
      demo: '#',
      featured: true
    },
    {
      title: t.projects.items.swarmSim.title,
      description: t.projects.items.swarmSim.description,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Mesa AI automation platform', 'NetworkX', 'Matplotlib', 'Gazebo'],
      github: 'https://github.com/Maselu',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
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
              {t.projects.title}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden ${project.featured ? 'lg:col-span-2' : ''
                }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                </div>

                <div className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>{t.projects.buttons.code}</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Play className="h-5 w-5" />
                      <span>{t.projects.buttons.demo}</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>{t.projects.buttons.live}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;