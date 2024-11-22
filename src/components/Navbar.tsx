import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="./public/LOGO.png" alt="ALLIN1 MEDIA" className="h-8" />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-white">
              Allin1 Media
            </span>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white md:text-lg sm:text-sm  hover:text-purple-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white md:text-lg sm:text-sm hover:text-purple-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-white md:text-lg sm:text-sm hover:text-purple-500 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-white md:text-lg sm:text-sm hover:text-purple-500 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors md:text-lg sm:text-sm hidden md:block"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile View */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-500 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-black/90"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-700">
              <a
                href="#home"
                className="block text-white hover:text-purple-500 transition-colors py-2 px-3"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-white hover:text-purple-500 transition-colors py-2 px-3"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-white hover:text-purple-500 transition-colors py-2 px-3"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="block text-white hover:text-purple-500 transition-colors py-2 px-3 space-x-2"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors mx-3 text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
