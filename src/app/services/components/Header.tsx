"use client";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("logovideo.mp4");

  useEffect(() => {
    // Esto asegura que el src del video solo se actualice en el cliente
    setVideoSrc(`logovideo.mp4?cache_buster=${Date.now()}`);
  }, []);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-52 flex justify-center items-center">
      <div
        className={`absolute z-0 w-full opacity-100 pointer-events-none ${
          loading ? "invisible" : "visible"
        }`}
      >
        <video
          className="w-full h-52 object-cover"
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
          onCanPlay={handleLoading}
        ></video>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-cyan-500/50 absolute w-full h-52"></div>
          <div className="absolute text-white w-4/6 max-w-[1400px]">
            <h3 className="text-3xl">
              En <span className="text-4xl font-extrabold ">OvaTech</span>
            </h3>
            <p className="text-2xl">Te ofrecemos</p>
          </div>
        </>
      )}
    </div>
  );
}
