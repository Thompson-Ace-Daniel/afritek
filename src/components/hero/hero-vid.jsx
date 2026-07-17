import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import heroVideo from "../../assets/videos/map/hero2.mp4";

function HeroVid() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen object-cover"
      ></video>
      <button
        className="absolute bottom-3 right-3 -translate-x-1/2 z-10 -translate-y-1/2 outline-none cursor-pointer bg-neutral-700 p-1.5 rounded-full text-white font-bold transition-all duration-300 ease-out"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <Pause size={18} fill="currentColor" />
        ) : (
          <Play size={18} fill="currentColor" />
        )}
      </button>
    </div>
  );
}

export default HeroVid;
