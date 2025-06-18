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
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";


export default function Home() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Smart Hire</span>
          </SidebarHeader>
          
          <SidebarContent>
            fefwfew
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  fgfdg
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          dsfrefr
        </main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
