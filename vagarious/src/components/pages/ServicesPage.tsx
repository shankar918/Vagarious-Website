import React from "react";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Globe,
  Handshake,
  CheckCircle2,
  DollarSign,
  Target,
  UserCheck,
  Map,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";

export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: "IT Project Outsourcing",
      description:
        "Deliver high-quality IT projects on time and within budget. Our dedicated teams handle everything from planning to deployment with complete transparency.",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      button: "Learn More",
    },
    {
      icon: Users,
      title: "Best Staffing Industry in Hyderabad",
      description:
        "We provide the most efficient staffing solutions in Hyderabad — connecting top talent with leading businesses for sustainable growth.",
      bg: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
      button: "Hire Now",
    },
    {
      icon: Handshake,
      title: "Permanent Recruitment",
      description:
        "Find and hire full-time professionals who fit your company culture and bring long-term value to your business.",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      button: "Get Started",
    },
    {
      icon: Globe,
      title: "Contract Staffing",
      description:
        "Flexible contract-based staffing solutions for your short-term or project-specific requirements — with quick deployment and guaranteed expertise.",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      button: "Learn More",
    },
    {
      icon: DollarSign,
      title: "Payroll Service",
      description:
        "Simplify your employee payroll process. We manage salaries, deductions, compliance, and reports efficiently and securely.",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      button: "View Details",
    },
    {
      icon: Target,
      title: "Recruitment Process Outsourcing (RPO)",
      description:
        "Let our experts handle your complete recruitment lifecycle — from sourcing to onboarding — saving you time and cost.",
      bg: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500",
      button: "Know More",
    },
    {
      icon: UserCheck,
      title: "Executive Search",
      description:
        "We identify and recruit C-suite and senior executives who drive business excellence and leadership success.",
      bg: "bg-gradient-to-br from-teal-500 via-green-400 to-lime-400",
      button: "Discover Talent",
    },
    {
      icon: Map,
      title: "Data Mapping",
      description:
        "Our data mapping experts help you integrate, analyze, and visualize data to make smarter, faster business decisions.",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      button: "Explore",
    },
  ];

  return (
    <div className="pt-20 pt-20 ">
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-white">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-white">
              We specialize in modern staffing and digital transformation
              solutions for enterprises and startups alike.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`group ${service.bg} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-white`}
              >
                <div>
                  <div className="inline-flex p-4 bg-white/20 rounded-xl mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Dedicated Experts",
                      "Scalable Solutions",
                      "Proven Results",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-100"
                      >
                        <CheckCircle2
                          className="text-white flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ x: 3 }}
                  className="flex items-center text-white font-medium group"
                >
                  <span className="text-sm">{service.button}</span>
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Partner with us for permanent recruitment, contract staffing,
              payroll, and executive search solutions that scale with your goals.
            </p>
            <Button className="bg-[#0075BE] hover:bg-[#005a94] text-white px-8 py-6">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
