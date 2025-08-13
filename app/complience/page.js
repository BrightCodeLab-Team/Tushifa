import React from 'react'
import WebsiteLayout from "@/components/layouts/website";
import ComplienceHeader from '@/components/complience/ComplienceHeader';
import Certificate from '@/components/complience/Certificate';

function page() {
  return (
    <WebsiteLayout>
      <ComplienceHeader/>
      <Certificate/>
    </WebsiteLayout>
  )
}

export default page
