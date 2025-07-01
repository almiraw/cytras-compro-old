import React from 'react';
import { Shield, Eye, Zap, Lock, AlertTriangle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection systems that identify and neutralize security risks before they impact your business.',
      features: ['Real-time monitoring', 'AI-powered analysis', 'Automated responses']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring by our expert team to ensure your systems are always protected.',
      features: ['Continuous surveillance', 'Expert analysts', 'Instant alerts']
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid incident response services to minimize damage and restore normal operations quickly.',
      features: ['Emergency response', 'Damage assessment', 'Recovery planning']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data protection solutions including encryption, backup, and secure storage.',
      features: ['End-to-end encryption', 'Secure backups', 'Compliance ready']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments to identify and address potential vulnerabilities in your systems.',
      features: ['Penetration testing', 'Risk analysis', 'Security audits']
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Employee security awareness training to build a human firewall against cyber threats.',
      features: ['Interactive training', 'Phishing simulations', 'Security awareness']
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-800/50">
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
            Our <span className="text-gradient">Security Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive cybersecurity solutions tailored to protect your business 
            from evolving digital threats.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-800 rounded-xl p-8 hover:bg-dark-700 transition-all duration-300 cyber-border hover:border-cyber-500/50"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyber-500/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-cyber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyber-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;