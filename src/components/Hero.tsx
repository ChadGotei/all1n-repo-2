import { Play, ChevronRight } from "lucide-react";
import PopUp from "./PopUp";
import { useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <>
      {show && <PopUp handleClick={handleClick} />}
      <div id="home" className="relative min-h-screen flex items-center z-0">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-video-editing-software-2527/preview"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Vision Into
              <span className="text-purple-500"> Cinematic Reality</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional video editing services that bring your stories to
              life with stunning visuals, seamless transitions, and compelling
              narratives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => setShow(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Showreel
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
