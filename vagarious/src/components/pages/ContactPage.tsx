import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'andemshankar630@gami.com',
      subtext: 'We typically respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9652984415',
      subtext: 'Mon-Fri from 9am to 6pm',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '2nd Floor, Spline Arcade, Ayyappa Society Main Rd,Madhapur, Hyderabad, 500081',
      // subtext: 'TC 12345, United States',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtext: '24/7',
      gradient: 'from-green-500 to-emerald-500',
    },
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
                <span className="text-indigo-300 flex items-center gap-2">
                  <Sparkles size={16} />
                  Let's Connect
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl text-white mb-6">
              Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-400">
              Ready to transform your business with AI? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group relative h-full"
        >
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 h-full min-h-[260px]">
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white mb-2 font-semibold">{info.title}</h3>
              <p className="text-gray-300 mb-1 flex-grow">{info.details}</p>
              <p className="text-gray-500 text-sm">{info.subtext}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Form Section - Glassmorphic Design */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-white mb-4">Send us a message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {/* Glassmorphic Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-white mb-2 text-sm">
                      Name *
                    </label>
                    <div className="relative group">
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-indigo-500 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 transition-all duration-300"
                      />
                      {/* Glowing border effect */}
                      {focusedField === 'name' && (
                        <motion.div
                          layoutId="glow"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-white mb-2 text-sm">
                      Email *
                    </label>
                    <div className="relative group">
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-indigo-500 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 transition-all duration-300"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          layoutId="glow"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-white mb-2 text-sm">
                      Phone
                    </label>
                    <div className="relative group">
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-indigo-500 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 transition-all duration-300"
                      />
                      {focusedField === 'phone' && (
                        <motion.div
                          layoutId="glow"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-white mb-2 text-sm">
                      Company
                    </label>
                    <div className="relative group">
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Company"
                        className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-indigo-500 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 transition-all duration-300"
                      />
                      {focusedField === 'company' && (
                        <motion.div
                          layoutId="glow"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label htmlFor="message" className="block text-white mb-2 text-sm">
                    Message *
                  </label>
                  <div className="relative group">
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-indigo-500 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 transition-all duration-300 resize-none"
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="glow"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 w-full md:w-auto border-0 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </Button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl text-white mb-6">Why Work With Us?</h3>

                <div className="space-y-6">
                  {[
                    {
                      title: 'AI-Powered Solutions',
                      description: 'Leverage cutting-edge artificial intelligence to solve complex business challenges.',
                    },
                    {
                      title: 'Expert Team',
                      description: 'Our team of AI specialists brings decades of combined experience.',
                    },
                    {
                      title: 'Proven Results',
                      description: '500+ successful AI implementations across various industries.',
                    },
                    {
                      title: '24/7 Support',
                      description: 'Round-the-clock monitoring and support for your AI systems.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">
                    Prefer to talk directly? Give us a call during business hours.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Phone size={20} />
                    <span>+91 9652984415</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
