import { ArrowRight, Cloud, Brain, Shield, Database, Cpu, Network, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from "framer-motion";
import { Scene3D } from '../Scene3D';
import { Solution3DCard } from '../Solution3DCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const solutions = [
    {
      icon: Brain,
      title: 'Intelligent Software Solutions',
      description: 'We develop smart systems using advanced technologies to automate processes, improve decision-making, and deliver business value',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cpu,
      title: 'Mobile Application Development',
      description: 'We develop fast and user-friendly mobile applications that help businesses reach customers anytime, anywhere',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon:Database,
      title: 'Full Stack Development',
      description: 'We provide complete end-to-end development solutions, from frontend design to backend integration and deployment',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Web Application Development',
      description: 'We build modern, responsive, and high-performance web applications tailored to business needs, ensuring scalability and smooth user experience',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { value: '500+', label: 'AI Models Deployed' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '150+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'AI Support' },
  ];

  const aiFeatures = [
    {
      title: 'High Performance',
      description: 'We build fast and efficient applications that deliver smooth user experience',
      icon: Brain,
    },
    {
      title: 'Secure Solutions',
      description: 'We ensure strong security and data protection in every project we develop.',
      icon: Shield,
    },
    {
      title: 'Scalable Systems',
      description: 'We create scalable software solutions that grow with your business',
      icon: Database,
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section with 3D Scene */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-0 mt-0">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                {/* <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 px-6 py-3 rounded-full"> */}
                  {/* <span className="text-indigo-300 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    AI-Powered Innovation
                  </span> */}
                {/* </div> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-6xl lg:text-5xl leading-tight"
              >
                <span className="text-white">Empowering the</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future with AI
                </span>
                <br />
                <span className="text-white">Innovation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Transform your business with cutting-edge artificial intelligence solutions. 
                We build intelligent systems that learn, adapt, and deliver extraordinary results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => onNavigate('services')}
                  className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-7 text-lg border-0 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore AI Solutions
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </Button>

                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 px-8 py-7 text-lg backdrop-blur-sm"
                >
                  Schedule Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              <Scene3D />

              {/* Floating info cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 -left-4 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 max-w-xs"
              >
                
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-indigo-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Solutions Section with 3D Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-white mb-6">
              WHAT WE DO...
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a variety of Manpower recruitment services to our clients including
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Solution3DCard key={index} {...solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the power of artificial intelligence with live demonstrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-300" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-white" size={32} />
                    </div>

                    <h3 className="text-white text-2xl mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>

                    <button className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 group/btn">
                      <span>Try Demo</span>
                      <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join leading companies leveraging AI to drive innovation and achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-7 text-lg border-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Button>
              <Button
                onClick={() => onNavigate('services')}
                variant="outline"
                className="border-2 border-white/20 text-black hover:bg-white/10 px-10 py-7 text-lg backdrop-blur-sm"
              >
                Explore All Solutions
              </Button>
            </div>
          </motion.div>
        </div>

         <Button
              onClick={() => onNavigate("admin-dashboard")}
              className=" overflow-hidden shadow-xl shadow-indigo-500/10 border-50"
            >
              <span className="relative z-10">
                Get Started
              
              </span>
            </Button>
      </section>
    </div>
  );
}
