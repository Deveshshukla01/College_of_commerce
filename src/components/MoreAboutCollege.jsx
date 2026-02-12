import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ITEMS = [
  { video: "/videos/1.mp4", poster: "/posters/1.png" },
  { video: "/videos/2.mp4", poster: "/posters/2.png" },
  { video: "/videos/3.mp4", poster: "/posters/3.png" },
  { video: "/videos/4.mp4", poster: "/posters/4.png" },
  { video: "/videos/5.mp4", poster: "/posters/5.png" },
];

// Screen size helper
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}

export default function MoreAboutCollege() {
  const isMobile = useIsMobile();
  const videoRef = useRef(null);

  const [center, setCenter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const visibleCount = isMobile ? 1 : 3;
  const half = Math.floor(visibleCount / 2);

  // Build visible reels
  const visibleItems = [];
  for (let i = -half; i <= half; i++) {
    const index = (center + i + ITEMS.length) % ITEMS.length;
    visibleItems.push({ ...ITEMS[index], index });
  }

  /* ================= FIXED LOGIC ================= */

  // Toggle play / pause on center click
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Move carousel + AUTO PLAY
  const move = (dir) => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setIsPlaying(false);

    setCenter((prev) => {
      const next =
        dir === "next"
          ? (prev + 1) % ITEMS.length
          : (prev - 1 + ITEMS.length) % ITEMS.length;

      // Auto-play after DOM updates
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      });

      return next;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-2xl md:text-3xl font-medium text-gray-700">
          A Glimpse into
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-red-600">
          College of Commerce
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-10">
        {visibleItems.map((item) => {
          const isCenter = item.index === center;

          return (
            <div
              key={item.index}
              onClick={isCenter ? togglePlay : undefined}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500
                ${isCenter ? "scale-110 z-10" : "scale-95 opacity-75"}
              `}
            >
              <video
                ref={isCenter ? videoRef : null}
                src={item.video}
                preload="metadata"
                controls={false}   // IMPORTANT: disable native toggle
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className={`w-[320px] md:w-[360px] lg:w-[420px]
                  h-[460px] md:h-[500px] lg:h-[560px]
                  object-contain bg-black transition-all
                  ${isCenter ? "" : "grayscale brightness-75"}
                `}
              />

              {/* Poster overlay for side reels */}
              {!isCenter && (
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={item.poster}
                    alt=""
                    className="w-full h-full object-contain bg-black grayscale brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 p-3 rounded-full">
                      <Play size={26} className="text-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <button
          onClick={() => move("prev")}
          className="absolute left-0 bg-white border border-black p-4 rounded-full z-40"
        >
          <ChevronLeft size={28} className="text-red-600" />
        </button>

        <button
          onClick={() => move("next")}
          className="absolute right-0 bg-white border border-black p-4 rounded-full z-40"
        >
          <ChevronRight size={28} className="text-red-600" />
        </button>
      </div>

      
    </section>
  );
}
