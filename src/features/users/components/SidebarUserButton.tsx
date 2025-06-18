import { Suspense } from "react"
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient"
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
import { auth } from "@clerk/nextjs/server"

export function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  )
}

async function SidebarUserSuspense() {
  const { userId } = await auth();

  return <SidebarUserButtonClient user={{ email: "tariq@mail.com", name: "Tariq K", imageUrl: "" } } />
}