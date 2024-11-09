"use client";

import * as React from "react";
import Link from "next/link";  // Import Link from next.js
import {
    Bell,
    Home,
    Settings,
    Users,
    MessageSquare,
    Folder,
    FilePlus,
    LogOut,
    User,
    Blocks,
    BellDot,
    BellRing,
    ChevronsUpDown,
    Notebook,
    SquarePen,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";

const data = {
    user: {
        name: "شهاب الدين جريبيع",
        title: "رئيس الفرع",
        avatar: "/images/ugel.jpg"
    }
};

const items = [
    { title: "الرئيسية", url: "/admin/dashboard", icon: Home },
    { title: "سجل المستخدمين", url: "/admin/dashboard/users", icon: Users },
    { title: "الإشعارات", url: "/admin/dashboard/notifications", icon: Bell, hasNotifications: false, notificationCount: 4 },
    { title: "الشكاوى", url: "/admin/dashboard/complaints", icon: Notebook },
    { title: "الفئات", url: "/admin/dashboard/categories", icon: Folder },
    { title: "سجل الشعب", url: "/admin/dashboard/branches", icon: Blocks },
    { title: "المنشورات", url: "/admin/dashboard/settings", icon:  SquarePen },
];




export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" side="right">
                 <SidebarContent>
                     <SidebarGroup>
                         <SidebarGroupLabel>لوحة تحكم فرع قسنطينة 2</SidebarGroupLabel>
                         <SidebarGroupContent>
                             <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <Link href={item.url} className="flex items-center">
                                        <SidebarMenuButton asChild>
                                                    
                                                    <div className="flex items-center">
                                                        {/* Conditional render for the icon and text color */}
                                                        {item.hasNotifications ? (
                                                            <BellDot className="text-red-500" />
                                                        ) : (
                                                            <item.icon/>
                                                        )}
                                                        <span className={item.hasNotifications ? "text-red-500" : ""}>{item.title}</span>
                                                        {/* {} */}
                                                        {/* Conditional render for notifications */}
                                                        {item.hasNotifications && (
                                                            <div className="ml-2 flex items-center justify-center rounded-lg bg-red-500 text-white font-semibold text-xs w-5 h-5">
                                                                {item.notificationCount}
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                        </SidebarMenuButton></Link>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                {/* Sidebar Footer */}

                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton
                                        size="lg"
                                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                    >
                                        <Avatar className="relative h-8 w-8">
                                            <AvatarImage className="rounded-lg" src={data.user.avatar} alt={data.user.name} />
                                            <AvatarFallback className="rounded-lg bg-gray-200">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-right text-sm leading-tight">
                                            <span className="truncate font-semibold">{data.user.name}</span>
                                            <span className="truncate text-xs">{data.user.title}</span>
                                        </div>
                                        <ChevronsUpDown className="mr-auto size-4" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                    side="bottom"
                                    align="end"
                                    sideOffset={4}
                                >
                                    <DropdownMenuLabel className="p-0 font-normal">
                                        <div className="flex items-center gap-2 px-1 py-1.5 text-right text-sm">
                                            <div className="grid flex-1 text-right text-sm leading-tight">
                                                <span className="truncate font-semibold">{data.user.name}</span>
                                                <span className="truncate text-xs">{data.user.title}</span>
                                            </div>
                                            <Avatar className="h-8 w-8 rounded-lg">
                                                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            الملف الشخصي {/* Profile */}
                                            <User />
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            الإعدادات {/* Settings */}
                                            <Settings />
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() =>
                                            signOut({
                                                callbackUrl: "/auth/login",
                                            })
                                        }
                                    >
                                        تسجيل الخروج {/* Log out */}
                                        <LogOut />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
  )
}
