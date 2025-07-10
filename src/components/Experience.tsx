import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Automation Technician',
      company: 'Termain',
      location: 'Mocejón, Toledo',
      period: '2023',
      description: [
        'Implementation of automated systems for industrial laundry process control using logic programming via Cx-programmer.',
        'Configuration of digital and analog inputs/outputs with an Omron SYSMAC CJ2M CPU33 PLC.',
        'Installation and commissioning of frequency inverters, sensors, actuators, valves, and AC motors.',
        'Supervision, control, and data acquisition using an HMI for process visualization and control.'
      ],
      link: '#'
    },
    {
      title: 'Photovoltaic Installer',
      company: 'Kaylon Energías Renovables',
      location: 'Nambroca, Toledo',
      period: '2022',
      description: [
        'Installation of photovoltaic solar panels.',
        'Inverter installation.',
        'Startup of the photovoltaic system'
      ],
      link: '#'
    },
    {
      title: 'Electrical Installer in Public Places',
      company: 'ZINO TECHNICAL SERVICES',
      location: 'Toledo',
      period: '2019',
      description: [
        'Installation of low/medium voltage electrical systems in the theme park (Puy du Fou).',
        'Installation of corrugated pipes, rejiband trays.',
        'Wiring of electrical panel for its purpose.',
        'Laying of electrical cables, RJ45 data cable for RACK.'
      ],
      link: '#'
    }
  ];

  return (
    <section id="experience" className="py-20">
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
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <motion.a
                      href={exp.link}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;