import React, { Suspense } from 'react'
import { 
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupAction,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ClipboardListIcon, PlusIcon } from "lucide-react";
import { SidebarNavMenuGroup } from '@/components/sidebar/SidebarNavMenuGroup';
import AppSidebar from '@/components/sidebar/AppSidebar';

const EmployerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppSidebar
        content={
            <>
                <SidebarGroup>
                    <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Job Listing" asChild>
                        <Link href="/employer/job-listings/new">
                            <PlusIcon /> <span className="sr-only">Add Job Listing</span>
                        </Link>
                    </SidebarGroupAction>
                    <SidebarGroupContent className="group-data-[state=collapsed]:hidden">
                        <Suspense>
                            <JobListingMenu orgId={orgId} />
                        </Suspense>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarNavMenuGroup
                    className="mt-auto"
                    items={[
                        { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
                    ]}
                />
            </>
        }
        footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  )
}

export default EmployerLayout