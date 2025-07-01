import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      number: '10M+',
      label: 'Threats Blocked',
      description: 'Security incidents prevented'
    },
    {
      number: '99.99%',
      label: 'Uptime',
      description: 'Service availability guarantee'
    },
    {
      number: '<2min',
      label: 'Detection Time',
      description: 'Average threat identification'
    },
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses protected globally'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyber-600 to-cyber-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Proven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-cyber-100 max-w-3xl mx-auto"
          >
            Our track record speaks for itself. See how we've helped businesses 
            stay secure and thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-cyber-100 mb-2">
                {stat.label}
              </div>
              <div className="text-cyber-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;