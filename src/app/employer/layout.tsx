import React from 'react'
import { 
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroup,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { SignedOut } from "@/services/clerk/components/SignInStatus";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import AppSidebar from '@/components/sidebar/AppSidebar';

const EmployerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppSidebar
        content={
            <SidebarGroup>
                <SidebarMenu>
                    <SignedOut>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/sign-in">
                                    <LogInIcon />
                                    <span>Log In</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SignedOut>
                </SidebarMenu>
            </SidebarGroup>
        }
        footerButton={<SidebarUserButton />}
    >   
        {children}
    </AppSidebar>
  )
}

export default EmployerLayout