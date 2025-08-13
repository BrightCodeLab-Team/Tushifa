import React from "react";
import WebsiteLayout from "@/components/layouts/website";
import PatientsHero from "@/components/patients/PatientsHero";
import PatientStories from "@/components/patients/PatientStories";
import PerformanceSnapshot from "@/components/Home/PerformanceSnapshot";
import LifelineSection from "@/components/patients/LifeLineSection";

const page = () => {
  return (
    <WebsiteLayout>
      <PatientsHero />
      <PatientStories />
      <PerformanceSnapshot/>
      <LifelineSection />
    </WebsiteLayout>
  );
};

export default page;