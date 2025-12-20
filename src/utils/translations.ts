export type Language = 'EN' | 'ES' | 'FR';

export interface Translations {
    nav: {
        about: string;
        experience: string;
        skills: string;
        projects: string;
        contact: string;
    };
    hero: {
        greeting: string;
        role: string;
        description: string;
        btnContact: string;
        btnCV: string;
    };
    about: {
        title: string;
        description: string;
        features: {
            webDev: { title: string; description: string };
            automation: { title: string; description: string };
            electrical: { title: string; description: string };
            server: { title: string; description: string };
        };
    };
    experience: {
        title: string;
        jobs: {
            developmentIntern: { title: string; descriptions: string[] };
            automationTech: { title: string; descriptions: string[] };
            photovoltaicInstaller: { title: string; descriptions: string[] };
            electricalInstaller: { title: string; descriptions: string[] };
        };
    };
    skills: {
        title: string;
        categories: {
            programming: string;
            robotics: string;
            aiml: string;
            hardware: string;
        };
    };
    projects: {
        title: string;
        buttons: {
            code: string;
            demo: string;
            live: string;
        };
        items: {
            socialApp: { title: string; description: string };
            neuralOptimizer: { title: string; description: string };
            roboticArm: { title: string; description: string };
            swarmSim: { title: string; description: string };
        };
    };
    contact: {
        title: string;
        subtitle: string;
        info: {
            title: string;
            email: string;
            location: string;
        };
        form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            send: string;
        };
    };
    footer: {
        brand: string;
        description: string;
        quickLinks: string;
        connect: string;
        rights: string;
    };
}

export const translations: Record<Language, Translations> = {
    EN: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Mamadou Cellou Dembele Diallo',
            role: 'Web Application Developer',
            description: "I turn ideas into functional realities. I learned by doing, making mistakes and correcting them along the way. It's not just software; it's a source of income.",
            btnContact: 'Get In Touch',
            btnCV: 'Download CV'
        },
        about: {
            title: 'About Me',
            description: 'I have experience in the field of automation, performing PLC logic programming functions, HMI user interface configuration, and equipment commissioning. I am characterized by my attention to detail, problem-solving skills, and strong project management skills. Thanks to my ongoing training, I can adapt to different technologies and production processes.',
            features: {
                webDev: {
                    title: 'Web Application Programmer',
                    description: 'Full-stack development of interface design, preparation of client and server environments, implementations, and deployment.'
                },
                automation: {
                    title: 'Higher Technician in Industrial Automation and Robotics',
                    description: 'Advanced autonomous systems and control algorithms'
                },
                electrical: {
                    title: 'Intermediate Vocational Training Cycle in Electrical and Automatic Installations',
                    description: 'Solar Panel Systems'
                },
                server: {
                    title: 'Certified in Server Environment',
                    description: 'Knowledge of C#'
                }
            }
        },
        experience: {
            title: 'Experience',
            jobs: {
                developmentIntern: {
                    title: 'Development Intern',
                    descriptions: [
                        'Customer relationship management.',
                        'ERP project planning.',
                        'Process automation using PowerApps.'
                    ]
                },
                automationTech: {
                    title: 'Automation Technician',
                    descriptions: [
                        'Implementation of automated systems for industrial laundry process control using logic programming via Cx-programmer.',
                        'Configuration of digital and analog inputs/outputs with an Omron SYSMAC CJ2M CPU33 PLC.',
                        'Installation and commissioning of frequency inverters, sensors, actuators, valves, and AC motors.',
                        'Supervision, control, and data acquisition using an HMI for process visualization and control.'
                    ]
                },
                photovoltaicInstaller: {
                    title: 'Photovoltaic Installer',
                    descriptions: [
                        'Installation of photovoltaic solar panels.',
                        'Inverter installation.',
                        'Startup of the photovoltaic system'
                    ]
                },
                electricalInstaller: {
                    title: 'Electrical Installer in Public Places',
                    descriptions: [
                        'Installation of low/medium voltage electrical systems in the theme park (Puy du Fou).',
                        'Installation of corrugated pipes, rejiband trays.',
                        'Wiring of electrical panel for its purpose.',
                        'Laying of electrical cables, RJ45 data cable for RACK.'
                    ]
                }
            }
        },
        skills: {
            title: 'Skills & Expertise',
            categories: {
                programming: 'Programming Languages',
                robotics: 'Robotics Frameworks',
                aiml: 'AI/ML Frameworks',
                hardware: 'Hardware & Tools'
            }
        },
        projects: {
            title: 'Featured Projects',
            buttons: {
                code: 'Code',
                demo: 'Demo',
                live: 'Live'
            },
            items: {
                socialApp: {
                    title: 'Social Interaction Web Application',
                    description: 'Web application for social interaction with users who consume centralized information. Articles are extracted from various reliable sources and segmented into categories such as general news, sports, science, entertainment, and a section for weather reports.'
                },
                neuralOptimizer: {
                    title: 'Neural Network Optimizer',
                    description: 'Custom neural network architecture optimization tool using genetic algorithms and automated hyperparameter tuning.'
                },
                roboticArm: {
                    title: 'Robotic Arm Controller',
                    description: 'Precision control system for 6-DOF robotic arm with computer vision integration for pick-and-place operations.'
                },
                swarmSim: {
                    title: 'Swarm Intelligence Simulator',
                    description: 'Multi-agent simulation platform for studying emergent behaviors in robotic swarms using distributed algorithms.'
                }
            }
        },
        contact: {
            title: 'Get In Touch',
            subtitle: "Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.",
            info: {
                title: 'Contact Information',
                email: 'Email',
                location: 'Location'
            },
            form: {
                name: 'Name',
                namePlaceholder: 'Your Name',
                email: 'Email',
                emailPlaceholder: 'your.email@example.com',
                message: 'Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message'
            }
        },
        footer: {
            brand: 'Systems Administrator',
            description: 'Pioneering the future through advanced robotics, neural networks, and AI systems. Transforming ideas into intelligent machines.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
            rights: '© 2025 Maselu Portfolio. All rights reserved.'
        }
    },
    ES: {
        nav: {
            about: 'Acerca de',
            experience: 'Experiencia',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Mamadou Cellou Dembele Diallo',
            role: 'Desarrollador de Aplicaciones Web',
            description: 'Convierto ideas en realidades funcionales. Aprendí haciendo, cometiendo errores y corrigiéndolos en el camino. No es solo software; es una fuente de ingresos.',
            btnContact: 'Contáctame',
            btnCV: 'Descargar CV'
        },
        about: {
            title: 'Acerca de Mí',
            description: 'Tengo experiencia en el campo de la automatización, realizando funciones de programación lógica de PLC, configuración de interfaz de usuario HMI y puesta en marcha de equipos. Me caracterizo por mi atención al detalle, habilidades para resolver problemas y sólidas habilidades de gestión de proyectos. Gracias a mi formación continua, puedo adaptarme a diferentes tecnologías y procesos de producción.',
            features: {
                webDev: {
                    title: 'Programador de Aplicaciones Web',
                    description: 'Desarrollo full-stack de diseño de interfaces, preparación de entornos cliente y servidor, implementaciones y despliegue.'
                },
                automation: {
                    title: 'Técnico Superior en Automatización Industrial y Robótica',
                    description: 'Sistemas autónomos avanzados y algoritmos de control'
                },
                electrical: {
                    title: 'Ciclo Formativo de Grado Medio en Instalaciones Eléctricas y Automáticas',
                    description: 'Sistemas de Paneles Solares'
                },
                server: {
                    title: 'Certificado en Entorno de Servidor',
                    description: 'Conocimientos de C#'
                }
            }
        },
        experience: {
            title: 'Experiencia',
            jobs: {
                developmentIntern: {
                    title: 'Becario de Desarrollo',
                    descriptions: [
                        'Gestión de relaciones con clientes.',
                        'Planificación de proyectos ERP.',
                        'Automatización de procesos mediante PowerApps.'
                    ]
                },
                automationTech: {
                    title: 'Técnico de Automatización',
                    descriptions: [
                        'Implementación de sistemas automatizados para control de procesos de lavandería industrial mediante programación lógica vía Cx-programmer.',
                        'Configuración de entradas/salidas digitales y analógicas con un PLC Omron SYSMAC CJ2M CPU33.',
                        'Instalación y puesta en marcha de variadores de frecuencia, sensores, actuadores, válvulas y motores AC.',
                        'Supervisión, control y adquisición de datos mediante HMI para visualización y control de procesos.'
                    ]
                },
                photovoltaicInstaller: {
                    title: 'Instalador Fotovoltaico',
                    descriptions: [
                        'Instalación de paneles solares fotovoltaicos.',
                        'Instalación de inversores.',
                        'Puesta en marcha del sistema fotovoltaico'
                    ]
                },
                electricalInstaller: {
                    title: 'Instalador Eléctrico en Lugares Públicos',
                    descriptions: [
                        'Instalación de sistemas eléctricos de baja/media tensión en el parque temático (Puy du Fou).',
                        'Instalación de tubos corrugados, bandejas rejiband.',
                        'Cableado de panel eléctrico para su propósito.',
                        'Tendido de cables eléctricos, cable de datos RJ45 para RACK.'
                    ]
                }
            }
        },
        skills: {
            title: 'Habilidades y Experiencia',
            categories: {
                programming: 'Lenguajes de Programación',
                robotics: 'Frameworks de Robótica',
                aiml: 'Frameworks de IA/ML',
                hardware: 'Hardware y Herramientas'
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            buttons: {
                code: 'Código',
                demo: 'Demo',
                live: 'En Vivo'
            },
            items: {
                socialApp: {
                    title: 'Aplicación Web de Interacción Social',
                    description: 'Aplicación web para interacción social con usuarios que consumen información centralizada. Los artículos se extraen de varias fuentes confiables y se segmentan en categorías como noticias generales, deportes, ciencia, entretenimiento y una sección para informes meteorológicos.'
                },
                neuralOptimizer: {
                    title: 'Optimizador de Redes Neuronales',
                    description: 'Herramienta de optimización de arquitectura de redes neuronales personalizadas utilizando algoritmos genéticos y ajuste automatizado de hiperparámetros.'
                },
                roboticArm: {
                    title: 'Controlador de Brazo Robótico',
                    description: 'Sistema de control de precisión para brazo robótico de 6 grados de libertad con integración de visión por computadora para operaciones de pick-and-place.'
                },
                swarmSim: {
                    title: 'Simulador de Inteligencia de Enjambre',
                    description: 'Plataforma de simulación multi-agente para estudiar comportamientos emergentes en enjambres robóticos utilizando algoritmos distribuidos.'
                }
            }
        },
        contact: {
            title: 'Ponte en Contacto',
            subtitle: '¿Listo para colaborar en tu próximo proyecto? Hablemos sobre cómo podemos dar vida a tus ideas con tecnología de vanguardia.',
            info: {
                title: 'Información de Contacto',
                email: 'Correo Electrónico',
                location: 'Ubicación'
            },
            form: {
                name: 'Nombre',
                namePlaceholder: 'Tu Nombre',
                email: 'Correo Electrónico',
                emailPlaceholder: 'tu.correo@ejemplo.com',
                message: 'Mensaje',
                messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                send: 'Enviar Mensaje'
            }
        },
        footer: {
            brand: 'Administrador de Sistemas',
            description: 'Pioneros del futuro a través de robótica avanzada, redes neuronales y sistemas de IA. Transformando ideas en máquinas inteligentes.',
            quickLinks: 'Enlaces Rápidos',
            connect: 'Conectar',
            rights: '© 2025 Portafolio Maselu. Todos los derechos reservados.'
        }
    },
    FR: {
        nav: {
            about: 'À propos',
            experience: 'Expérience',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Mamadou Cellou Dembele Diallo',
            role: 'Développeur d\'Applications Web',
            description: 'Je transforme les idées en réalités fonctionnelles. J\'ai appris en faisant, en commettant des erreurs et en les corrigeant en chemin. Ce n\'est pas seulement du logiciel ; c\'est une source de revenus.',
            btnContact: 'Me Contacter',
            btnCV: 'Télécharger CV'
        },
        about: {
            title: 'À Propos de Moi',
            description: 'J\'ai de l\'expérience dans le domaine de l\'automatisation, effectuant des fonctions de programmation logique PLC, de configuration d\'interface utilisateur IHM et de mise en service d\'équipements. Je me caractérise par mon souci du détail, mes compétences en résolution de problèmes et mes solides compétences en gestion de projet. Grâce à ma formation continue, je peux m\'adapter à différentes technologies et processus de production.',
            features: {
                webDev: {
                    title: 'Programmeur d\'Applications Web',
                    description: 'Développement full-stack de conception d\'interface, préparation d\'environnements client et serveur, implémentations et déploiement.'
                },
                automation: {
                    title: 'Technicien Supérieur en Automatisation Industrielle et Robotique',
                    description: 'Systèmes autonomes avancés et algorithmes de contrôle'
                },
                electrical: {
                    title: 'Cycle de Formation Professionnelle Intermédiaire en Installations Électriques et Automatiques',
                    description: 'Systèmes de Panneaux Solaires'
                },
                server: {
                    title: 'Certifié en Environnement Serveur',
                    description: 'Connaissance de C#'
                }
            }
        },
        experience: {
            title: 'Expérience',
            jobs: {
                developmentIntern: {
                    title: 'Stagiaire en Développement',
                    descriptions: [
                        'Gestion de la relation client.',
                        'Planification de projets ERP.',
                        'Automatisation des processus avec PowerApps.'
                    ]
                },
                automationTech: {
                    title: 'Technicien en Automatisation',
                    descriptions: [
                        'Mise en œuvre de systèmes automatisés pour le contrôle des processus de blanchisserie industrielle utilisant la programmation logique via Cx-programmer.',
                        'Configuration des entrées/sorties numériques et analogiques avec un PLC Omron SYSMAC CJ2M CPU33.',
                        'Installation et mise en service de variateurs de fréquence, capteurs, actionneurs, vannes et moteurs AC.',
                        'Supervision, contrôle et acquisition de données à l\'aide d\'un IHM pour la visualisation et le contrôle des processus.'
                    ]
                },
                photovoltaicInstaller: {
                    title: 'Installateur Photovoltaïque',
                    descriptions: [
                        'Installation de panneaux solaires photovoltaïques.',
                        'Installation d\'onduleurs.',
                        'Démarrage du système photovoltaïque'
                    ]
                },
                electricalInstaller: {
                    title: 'Installateur Électrique dans les Lieux Publics',
                    descriptions: [
                        'Installation de systèmes électriques basse/moyenne tension dans le parc à thème (Puy du Fou).',
                        'Installation de tubes ondulés, chemins de câbles rejiband.',
                        'Câblage du panneau électrique pour son usage.',
                        'Pose de câbles électriques, câble de données RJ45 pour RACK.'
                    ]
                }
            }
        },
        skills: {
            title: 'Compétences et Expertise',
            categories: {
                programming: 'Langages de Programmation',
                robotics: 'Frameworks de Robotique',
                aiml: 'Frameworks IA/ML',
                hardware: 'Matériel et Outils'
            }
        },
        projects: {
            title: 'Projets en Vedette',
            buttons: {
                code: 'Code',
                demo: 'Démo',
                live: 'En Direct'
            },
            items: {
                socialApp: {
                    title: 'Application Web d\'Interaction Sociale',
                    description: 'Application web pour l\'interaction sociale avec des utilisateurs qui consomment des informations centralisées. Les articles sont extraits de diverses sources fiables et segmentés en catégories telles que actualités générales, sports, science, divertissement et une section pour les rapports météorologiques.'
                },
                neuralOptimizer: {
                    title: 'Optimiseur de Réseaux Neuronaux',
                    description: 'Outil d\'optimisation d\'architecture de réseaux neuronaux personnalisés utilisant des algorithmes génétiques et un réglage automatisé des hyperparamètres.'
                },
                roboticArm: {
                    title: 'Contrôleur de Bras Robotique',
                    description: 'Système de contrôle de précision pour bras robotique à 6 degrés de liberté avec intégration de vision par ordinateur pour les opérations de pick-and-place.'
                },
                swarmSim: {
                    title: 'Simulateur d\'Intelligence en Essaim',
                    description: 'Plateforme de simulation multi-agents pour étudier les comportements émergents dans les essaims robotiques utilisant des algorithmes distribués.'
                }
            }
        },
        contact: {
            title: 'Entrer en Contact',
            subtitle: 'Prêt à collaborer sur votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées avec une technologie de pointe.',
            info: {
                title: 'Informations de Contact',
                email: 'E-mail',
                location: 'Localisation'
            },
            form: {
                name: 'Nom',
                namePlaceholder: 'Votre Nom',
                email: 'E-mail',
                emailPlaceholder: 'votre.email@exemple.com',
                message: 'Message',
                messagePlaceholder: 'Parlez-moi de votre projet...',
                send: 'Envoyer le Message'
            }
        },
        footer: {
            brand: 'Administrateur Systèmes',
            description: 'Pionnier de l\'avenir grâce à la robotique avancée, aux réseaux neuronaux et aux systèmes d\'IA. Transformer les idées en machines intelligentes.',
            quickLinks: 'Liens Rapides',
            connect: 'Connecter',
            rights: '© 2025 Portfolio Maselu. Tous droits réservés.'
        }
    }
};
