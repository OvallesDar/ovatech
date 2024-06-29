import React from "react";
import Ovatech from "./components/Ovatech";
import MissionVision from "./components/MissionVision";
import HowWeWork from "./components/HowWeWork";
import WhyChooseUs from "./components/WhyChooseUs";

function page() {
  return (
    <section className="container mt-20">
      <Ovatech />
      <MissionVision />
      <WhyChooseUs />
      <HowWeWork />
    </section>
  );
}

export default page;
