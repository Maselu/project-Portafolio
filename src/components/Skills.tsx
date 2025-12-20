import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t.skills.categories.programming,
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'Php', level: 85 },
        { name: 'Javascript', level: 88 },
        { name: 'Arduino C++', level: 75 }
      ]
    },
    {
      title: t.skills.categories.robotics,
      skills: [
        { name: 'Logo[Siemens]', level: 95 },
        { name: 'Cx-Programmer[Omron]', level: 90 },
        { name: 'TIA Portal+Factory I/O', level: 85 },
        { name: 'MATLAB', level: 92 },
        { name: 'RobotStudio + FlexPendantABB', level: 80 }
      ]
    },
    {
      title: t.skills.categories.aiml,
      skills: [
        { name: 'TensorFlow', level: 93 },
        { name: 'GenAI', level: 90 },
        { name: 'Keras', level: 88 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenAI Gym', level: 82 }
      ]
    },
    {
      title: t.skills.categories.hardware,
      skills: [
        { name: 'Arduino/ESP32', level: 90 },
        { name: 'Raspberry Pi', level: 88 },
        { name: 'NVIDIA Jetson', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
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
              {t.skills.title}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;