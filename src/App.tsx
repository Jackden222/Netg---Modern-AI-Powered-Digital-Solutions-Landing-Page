import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  ChartBarIcon, 
  ArrowRightIcon,
  ChevronDownIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Netg
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Features', 'About', 'Services', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Features', 'About', 'Services', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                ✨ Next-Gen Digital Solutions
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl pb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              We help businesses create stunning digital experiences with cutting-edge AI technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get Started <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 rounded-full text-lg font-semibold cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-800/70 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400">Discover what makes us different</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <SparklesIcon className="w-12 h-12" />,
                title: "AI-Powered Solutions",
                description: "Leverage the power of artificial intelligence to create unique digital experiences"
              },
              {
                icon: <RocketLaunchIcon className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Optimized performance that keeps your audience engaged"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12" />,
                title: "Data-Driven",
                description: "Make informed decisions with our advanced analytics"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive solutions for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CodeBracketIcon className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom websites and web applications"
              },
              {
                icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform solutions"
              },
              {
                icon: <ComputerDesktopIcon className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful and intuitive interfaces"
              },
              {
                icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
                title: "Digital Marketing",
                description: "Reach your target audience"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Trusted by businesses worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content: "Netg transformed our digital presence completely. Their AI solutions gave us a competitive edge.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateCorp",
                content: "The team's expertise in modern technologies is impressive. Highly recommended!",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Marketing Director, GrowthCo",
                content: "Outstanding service and results. They helped us achieve our digital goals.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300">
              Join hundreds of satisfied clients who have already transformed their digital presence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold cursor-pointer flex items-center gap-2 mx-auto hover:bg-gray-100 transition-all"
            >
              Contact Us <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Netg
              </span>
              <p className="text-gray-400 mt-4">Transforming digital experiences with AI</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Netg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
