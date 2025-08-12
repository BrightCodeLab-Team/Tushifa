import PageHeroicBlock from "@/components/common/PageHeroicBlock";
import ContactDetailsBlock from "@/components/contact/ContactDetailsBlock";
import ContactForm from "@/components/contact/ContactForm";
import WebsiteLayout from "@/components/layouts/website";
import React from "react";

const Contact = () => {
  return (
    <WebsiteLayout>
      <section id="top">
        <PageHeroicBlock title="Contact Us" subTitle="Get in touch" />
        <ContactDetailsBlock />
        <ContactForm />
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.112750495633!2d71.48713147555772!3d33.98963757318067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91738222f00d5%3A0x6d7a9bb654d33381!2s43%2C%202%20Syed%20Jamal-ud-din%20Afghani%20Rd%2C%20University%20Town%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708173619702!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default Contact;
