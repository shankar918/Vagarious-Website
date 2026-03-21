import { motion } from "framer-motion";
import { Rocket,Handshake } from "lucide-react";

import { Brain, Target, Users, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of AI to deliver cutting-edge solutions that transform industries.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality AI solutions with precision and reliability.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of human-AI collaboration to achieve extraordinary results.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'We measure our success by the real-world impact our AI solutions have on businesses.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const milestones = [
    { 
      year: '2018', 
      event: 'AI Journey Begins', 
      description: 'Founded with a vision to democratize artificial intelligence',
      icon: Sparkles,
    },
    { 
      year: '2020', 
      event: 'First 100 AI Models', 
      description: 'Deployed our 100th production AI model',
      icon: TrendingUp,
    },
    { 
      year: '2022', 
      event: 'Global AI Innovation Award', 
      description: 'Recognized for breakthrough achievements in AI technology',
      icon: Award,
    },
    { 
      year: '2024', 
      event: '500+ Enterprise Clients', 
      description: 'Serving leading companies worldwide with AI solutions',
      icon: Zap,
    },
  ];

  const stats = [
    { value: '50+', label: 'Websites & Apps Delivered', gradient: 'from-blue-500 to-cyan-500' },
    { value: '100%', label: 'Client Satisfaction', gradient: 'from-purple-500 to-pink-500' },
    { value: '15+', label: 'Happy clients', gradient: 'from-orange-500 to-red-500' },
    { value: '24/7', label: 'Support', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 px-6 py-3 rounded-full">
                <span className="text-indigo-300">Our Story</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl text-white mb-6">
              About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-400">
              We are a growing software company focused on building innovative and reliable digital solutions. Our team is dedicated to creating high-quality web and mobile applications that help businesses succeed in today’s competitive market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`text-5xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Our mission is to deliver high-quality, scalable, and innovative software solutions that help businesses grow in the digital world
                </p>
                <p>
               We specialize in developing intelligent systems that learn, adapt, and deliver measurable business value, leveraging technologies such as artificial intelligence for predictive analytics and natural language processing to enable smarter decision-making
                </p>
                <p>
                 We focus on building reliable web and mobile applications that improve efficiency, solve real-world problems, and create meaningful user experiences while ensuring performance, security, and long-term value for our clients.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 blur-2xl" />
                <div className="relative grid grid-cols-2 gap-6">
                  {[
                    { icon:Rocket, label: 'To Deliver Innovative Solutions' },
                    { icon: Zap, label: 'To Ensure Quality & Performance' },
                    { icon:Handshake, label: 'To Build Strong Client Relationships' },
                    { icon: TrendingUp, label: 'To Empower Digital Growth' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                    >
                      <item.icon className="text-indigo-400 mx-auto mb-3" size={32} />
                      <div className="text-white text-sm">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We maintain honesty, transparency, and strong ethics in all our work and client relationships
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We work closely with our clients and team members to achieve the best results together.
            </p>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-white text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Milestones in AI innovation</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-8 items-center">
                  <div className="flex-shrink-0 w-32 text-right">
                    <div className="inline-block bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <milestone.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <h3 className="text-white text-xl mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">Join Our AI Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              We're always looking for talented AI researchers, engineers, and innovators 
              who share our passion for pushing the boundaries of artificial intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '50+', label: 'AI Experts', gradient: 'from-blue-500 to-cyan-500' },
                { value: '15+', label: 'PhD Researchers', gradient: 'from-purple-500 to-pink-500' },
                { value: '20+', label: 'Technologies', gradient: 'from-orange-500 to-red-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                >
                  <div className={`text-5xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.value}
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
