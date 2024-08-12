"use client";

import Loading from "@/components/Loading";
import { useState } from "react";

export default function Header() {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-52 flex justify-center items-center">
      {loading ? <Loading /> : null}
      <video
        className="w-full h-52 object-cover"
        src={"logovideo.mp4"}
        autoPlay
        muted
        playsInline
        loop
        onCanPlay={handleLoading}
      ></video>

      <div className="bg-cyan-500/50 absolute w-full h-52"></div>
      <div className="absolute text-white w-4/6 max-w-[1400px]">
        <h3 className="text-3xl">
          En <span className="text-4xl font-extrabold ">OvaTech</span>
        </h3>
        <p className="text-2xl">Te ofrecemos</p>
      </div>
    </div>
  );
}
