import AppointmentBookingBlock from "@/components/Home/AppointmentBookingBlock";
import HealthCareBlock from "@/components/Home/HealthCareBlock";
import HomeFiguresBlock from "@/components/Home/HomeFiguresBlock";
import HomeHeroicBlock from "@/components/Home/HomeHeroicBlock";
import PatientCareBlock from "@/components/Home/PatientCareBlock";
import PatientTestimonials from "@/components/Home/PatientTestimonials";
import ServicesCardsBlock from "@/components/Home/ServicesCardsBlock";
import SupportingPartnersBlock from "@/components/Home/SupportingPartnersBlock";
import WorkingHoursSection from "@/components/Home/WorkingHoursSection";
import WebsiteLayout from "@/components/layouts/website";

export default function Home() {
  return (
    <WebsiteLayout>
      <main>
        <HomeHeroicBlock />
        <ServicesCardsBlock />
        <WorkingHoursSection />
        <HealthCareBlock />
        <HomeFiguresBlock />
        <PatientCareBlock />
        <AppointmentBookingBlock />
        <PatientTestimonials />
        <SupportingPartnersBlock />
      </main>
    </WebsiteLayout>
  );
}
