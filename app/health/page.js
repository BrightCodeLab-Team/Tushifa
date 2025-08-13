import React from 'react'
import WebsiteLayout from "@/components/layouts/website";
import HealBeyondMedicine from '@/components/health/HealBeyondMedicine';
import HealthPage from '@/components/health/HealthPage';

function page() {
  return (
    <WebsiteLayout>
      <HealBeyondMedicine/>
      <HealthPage/>
    </WebsiteLayout>
  )
}

export default page
