import React from 'react';
import { Shield, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%230ea5e9&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-cyber-500/10 border border-cyber-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Shield className="h-4 w-4 text-cyber-400" />
            <span className="text-cyber-400 text-sm font-medium">Advanced Cybersecurity Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Protect Your
            <span className="text-gradient block">Digital Future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive cybersecurity solutions with 24/7 monitoring, advanced threat detection, 
            and rapid incident response to safeguard your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="group cyber-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-cyber-500/25 transition-all duration-300 flex items-center space-x-2">
              <span>Get Protected Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                <Play className="h-5 w-5 ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-800"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-400 mb-2">24/7</div>
              <div className="text-gray-400">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-400 mb-2">&lt;5min</div>
              <div className="text-gray-400">Response Time</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;