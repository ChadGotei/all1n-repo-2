import React from 'react';
import { Film, Edit3, Music, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: 'Video Editing',
    description: 'Professional cuts, transitions, and effects to make your footage shine.',
  },
  {
    icon: <Edit3 className="w-8 h-8" />,
    title: 'Color Grading',
    description: 'Expert color correction and grading to set the perfect mood.',
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Sound Design',
    description: 'Premium audio mixing and sound effects for immersive experiences.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Visual Effects',
    description: 'Stunning VFX and motion graphics to elevate your content.',
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive video editing solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors group"
            >
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}