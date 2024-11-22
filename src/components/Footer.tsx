import SocialMediaInfo from './SocialMediaInfo';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
            <img src="./public/LOGO.png" alt="ALLIN1 MEDIA" className="h-8" />
              <span className="ml-2 text-xl font-bold">Allin1 Media</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional video editing services that bring your vision to life.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-500">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-500">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-purple-500">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-500">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-purple-500">Video Editing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-500">Color Grading</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-500">Sound Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-500">Visual Effects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex space-x-4">
              <SocialMediaInfo />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Allin1 Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}