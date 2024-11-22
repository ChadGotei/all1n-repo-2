import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface PopUpProps {
  handleClick: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ handleClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-10 backdrop-blur-lg transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-slate-900 border-2 h-[280px] w-[400px] sm:h-[380px] sm:w-[600px] z-20 p-10 flex justify-center items-center relative transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button onClick={handleClick}>
          <X
            height="30px"
            width="30px"
            className="absolute top-4 right-4 text-white cursor-pointer"
          />
        </button>
        <iframe
          src="https://www.youtube.com/embed/oBjuhpJts0Q?ab_channel=allin1media"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[250px] sm:h-[305px] sm:w-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default PopUp;
