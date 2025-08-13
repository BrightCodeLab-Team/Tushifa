import React from 'react'
import WebsiteLayout from "@/components/layouts/website";
import HealBeyondMedicine from '@/components/health/HealBeyondMedicine';
import HealthPage from '@/components/health/HealthPage';
import HealthImages from '@/components/health/HealthImages';
function page() {
  return (
    <WebsiteLayout>
      <HealBeyondMedicine/>
      <HealthPage/>
      <HealthImages/>
    </WebsiteLayout>
  )
}

export default page
