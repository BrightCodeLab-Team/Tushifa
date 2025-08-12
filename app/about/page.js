import AboutPersonalCareBlock from "@/components/About/AboutPersonalCareBlock";
import AboutTestimonialsBlock from "@/components/About/AboutTestimonialsBlock";
import DoctorsAchivementsBlock from "@/components/About/DoctorsAchivementsBlock";
import OurDoctorsBlock from "@/components/About/OurDoctorsBlock";
import PageHeroicBlock from "@/components/common/PageHeroicBlock";
import WebsiteLayout from "@/components/layouts/website";
import React from "react";

const About = () => {
  return (
    <WebsiteLayout>
      <PageHeroicBlock title="About Us" />
      <AboutPersonalCareBlock />
      {/* <DoctorsAchivementsBlock /> */}
      {/* <OurDoctorsBlock /> */}
      <div style={{ padding: "130px 0 100px 0" }}>
        <AboutTestimonialsBlock />
      </div>
    </WebsiteLayout>
  );
};

export default About;
