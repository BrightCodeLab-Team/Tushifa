import HealthcareDedication from "@/components/About/HealthcareDedication";
import WhoWeAre from "@/components/About/WhoWeAre";
import DedicateTeamExperts from "@/components/About/DedicateTeamExperts";
import WebsiteLayout from "@/components/layouts/website";
import React from "react";

const About = () => {
  return (
    <WebsiteLayout>
      <HealthcareDedication/>
      <WhoWeAre/>
      <DedicateTeamExperts/>
    </WebsiteLayout>
  );
};

export default About;
