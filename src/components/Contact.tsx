import { Mail, Phone, MapPin } from "lucide-react";
import SocialMediaInfo from "./SocialMediaInfo";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400">pintubadmosh@gmail.com</p>
                <p className="text-gray-100">
                  Contact.tsx pe jaakar change kar diyo apne hisabs se{" "}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400">(+91) 83575076491</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400">
                  123 Edit Street, Suite 100
                  <br />
                  Los Angeles, CA 90028
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Send Message
            </button>

            <div>
              <p className="text-gray-300 flex justify-center gap-2">
                <span className="text-gray-200 text-bold text-lg">Note:</span>{" "}
                For faster response contact us through our social media.{" "}
                <SocialMediaInfo />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
