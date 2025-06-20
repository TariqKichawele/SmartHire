import React, { ReactNode } from 'react'
import { 
    Sidebar, 
    SidebarContent, 
    SidebarHeader, 
    SidebarProvider, 
    SidebarTrigger,
    SidebarMenu,
    SidebarMenuItem,
    SidebarFooter,
    SidebarMenuButton,
    SidebarGroup,
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "@/components/sidebar/_AppSidebarClient";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@/services/clerk/components/SignInStatus";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
  

const AppSidebar = ({ content, footerButton, children }: { content: ReactNode, footerButton: ReactNode, children: ReactNode }) => {
  return (
    <SidebarProvider className="overflow-y-hidden">
        <AppSidebarClient>
            <Sidebar collapsible="icon" className="overflow-hidden">
                <SidebarHeader className="flex-row">
                <SidebarTrigger />
                <span className="text-xl text-nowrap">Smart Hire</span>
                </SidebarHeader>

                <SidebarContent>
                {content}
                </SidebarContent>

                <SignedIn>
                <SidebarFooter>
                    <SidebarMenu>
                    <SidebarMenuItem>
                        {footerButton}
                    </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                </SignedIn>
            </Sidebar>

            <main className="flex-1">
                {children}
            </main>
        </AppSidebarClient>
    </SidebarProvider>
  )
}

export default AppSidebar