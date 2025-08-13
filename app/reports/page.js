import React from 'react'
import WebsiteLayout from "@/components/layouts/website";
import ReportHeader from '@/components/Reports/ReportHeader';
import Reports from '@/components/Reports/Reports';
function page() {
  return (
    <WebsiteLayout>
      <ReportHeader/>
      <Reports/>
    </WebsiteLayout>
  )
}

export default page
