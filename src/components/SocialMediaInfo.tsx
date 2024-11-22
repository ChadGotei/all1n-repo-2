import { Instagram, Linkedin, Youtube } from "lucide-react";

// Re useable user interface component
const SocialMediaInfo = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/allin1mediain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/allin1-media"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://www.youtube.com/@allin1mediain"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500"
      >
        <Youtube className="w-6 h-6" />
      </a>
    </>
  );
};

export default SocialMediaInfo;
