import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    'Advanced AI-powered threat detection',
    'Real-time security monitoring',
    'Automated incident response',
    'Comprehensive vulnerability assessments',
    'Employee security training programs',
    'Compliance management solutions',
    'Data encryption and backup services',
    '24/7 expert support team'
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Lightning Fast Response',
      description: 'Our automated systems respond to threats in under 5 minutes, minimizing potential damage.'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Enterprise-level protection using the same security standards trusted by government agencies.'
    },
    {
      icon: Clock,
      title: 'Always-On Protection',
      description: 'Round-the-clock monitoring ensures your business is protected even when you sleep.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-gradient">Cytras</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the difference with our comprehensive cybersecurity platform 
            designed for modern businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8"
            >
              Complete Security Coverage
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-800/50 transition-colors duration-200"
                >
                  <CheckCircle className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-6 cyber-border hover:border-cyber-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-cyber-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;