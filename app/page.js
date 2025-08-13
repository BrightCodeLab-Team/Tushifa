import AppointmentBookingBlock from "@/components/Home/AppointmentBookingBlock";
import HealthCareBlock from "@/components/Home/HealthCareBlock";
import HomeHeroicBlock from "@/components/Home/HomeHeroicBlock";
import ServicesCardsBlock from "@/components/Home/ServicesCardsBlock";
import SupportingPartnersBlock from "@/components/Home/SupportingPartnersBlock";
import WorkingHoursSection from "@/components/Home/WorkingHoursSection";
import WebsiteLayout from "@/components/layouts/website";
import PurposeSection from "@/components/Home/PurposeSection";
import PerformanceSnapshot from "@/components/Home/PerformanceSnapshot";
import PatientTestimonials from "@/components/Home/PatientTestimonials";

export default function Home() {
  return (
    <WebsiteLayout>
      <main>
        <HomeHeroicBlock />
        <ServicesCardsBlock />
        <WorkingHoursSection />
        <PurposeSection />
        <HealthCareBlock />
        <SupportingPartnersBlock />
        <PatientTestimonials/>
        <PerformanceSnapshot/>
        <AppointmentBookingBlock />
        
      </main>
    </WebsiteLayout>
  );
}