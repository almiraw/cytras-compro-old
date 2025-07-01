import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      description: 'Decade of cybersecurity expertise'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Clients Protected',
      description: 'Businesses secured worldwide'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Served',
      description: 'Global security coverage'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      label: 'Success Rate',
      description: 'Proven threat prevention'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Leading the Fight Against
              <span className="text-gradient block">Cyber Threats</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              At Cytras, we're more than just a cybersecurity company. We're your digital guardians, 
              committed to protecting what matters most to your business. With cutting-edge technology 
              and unparalleled expertise, we stay ahead of evolving threats.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Our team of certified security professionals works around the clock to ensure your 
              digital assets remain secure, your operations run smoothly, and your reputation stays intact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button className="cyber-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-500/25 transition-all duration-200">
                Learn More
              </button>
              <button className="border border-cyber-500/30 text-cyber-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500/10 transition-all duration-200">
                View Case Studies
              </button>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-6 text-center cyber-border hover:border-cyber-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cyber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyber-500/20 transition-colors duration-300">
                  <achievement.icon className="h-6 w-6 text-cyber-400" />
                </div>
                <div className="text-3xl font-bold text-cyber-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;