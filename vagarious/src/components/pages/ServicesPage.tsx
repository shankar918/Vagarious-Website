import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {

  const services = [
    {
      icon: Briefcase,
      title: "AI Solutions",
      description:
        "We build intelligent systems to automate processes and improve decisions.",
      bg: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Full Stack Development",
      description:
        "Complete frontend and backend solutions with scalable architecture.",
      bg: "from-blue-500 to-cyan-500",
    },
    {
      icon: Handshake,
      title: "Mobile Apps",
      description:
        "Fast and user-friendly mobile applications for modern businesses.",
      bg: "from-pink-500 to-red-500",
    },
    {
      icon: Handshake,
      title: "Maintenance",
      description:
        "Continuous support, updates, and performance optimization.",
      bg: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="pt-150 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">

      {/* SERVICES */}
      <section className="py-16 sm:py-24 mt-8 ">
        <div className="max-w-7xl mx-auto px-4 ">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl ">
              Our Core Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver scalable web, mobile, and backend solutions to help businesses grow digitally.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${service.bg} p-6 rounded-2xl`}
              >
                <service.icon size={30} className="mb-4" />

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-100 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Dedicated Experts
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Scalable Solutions
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Proven Results
                  </li>
                </ul>

                <button className="flex items-center gap-2 text-sm font-medium">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 text-center bg-gray-900 px-4">
        <h2 className="text-3xl sm:text-5xl mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="text-gray-400 mb-6">
          Let’s build something amazing together.
        </p>

        <Button
          onClick={() => onNavigate("contact")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-4"
        >
          Contact Us <ArrowRight className="ml-2" size={18} />
        </Button>
      </section> */}


      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    
    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
      Ready to Build Your Next Project?
    </h2>

    <p className="text-gray-300 mb-8 text-base sm:text-lg">
      Partner with us to develop scalable web and mobile applications, 
      powerful backend systems, and intelligent software solutions 
      that drive your business forward.
    </p>

    <Button
      onClick={() => onNavigate("contact")}
      className="bg-[#0075BE] hover:bg-[#005a94] text-white px-6 sm:px-8 py-4 sm:py-6"
    >
      Contact Us Today
      <ArrowRight className="ml-2" size={20} />
    </Button>

  </div>
</section>
    </div>
  );
}
