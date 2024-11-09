// "use client";

// import * as React from "react";
// import Link from "next/link";  // Import Link from next.js
// import {
//     Bell,
//     Home,
//     Settings,
//     Users,
//     MessageSquare,
//     Folder,
//     FilePlus,
//     LogOut,
//     User,
//     Blocks,
//     BellDot,
//     BellRing,
//     ChevronsUpDown,
//     Notebook,
//     SquarePen,
// } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";



// export default function Layout({ children }: { children: React.ReactNode }) {
//     console.log("Building Layout page")
//     return (
//         <SidebarProvider>
            
            
//         </SidebarProvider>
//     );
// }


import { SidebarRail, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@radix-ui/react-separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
      <header className="flex h-16 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1 rotate-180" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">البيانات</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block rotate-180" />
                <BreadcrumbItem>
                    <BreadcrumbPage>جلب البيانات</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
        </header> 
        <div>
            {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
