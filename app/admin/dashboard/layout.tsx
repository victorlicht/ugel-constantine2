"use client";

import * as React from "react";
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronLeft,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Plus,
    Settings2,
    Sparkles,
    SquareTerminal,
    Trash2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";
// This is sample data.
const data = {
    user: {
        name: "شادن",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "شركة أكمي",
            logo: GalleryVerticalEnd,
            plan: "مؤسسة",
        },
        {
            name: "شركة أكمي",
            logo: AudioWaveform,
            plan: "ناشئة",
        },
        {
            name: "شركة إيفل",
            logo: Command,
            plan: "مجاني",
        },
    ],
    navMain: [
        {
            title: "ملعب",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "السجل",
                    url: "/admin/dashboard/settings",
                },
                {
                    title: "المفضلة",
                    url: "/admin/dashboard/",
                },
                {
                    title: "الإعدادات",
                    url: "#",
                },
            ],
        },
        {
            title: "النماذج",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "جينيسيس",
                    url: "#",
                },
                {
                    title: "إكسبلورر",
                    url: "#",
                },
                {
                    title: "كوانتوم",
                    url: "#",
                },
            ],
        },
        {
            title: "التوثيق",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "مقدمة",
                    url: "#",
                },
                {
                    title: "ابدأ الآن",
                    url: "#",
                },
                {
                    title: "الدروس التعليمية",
                    url: "#",
                },
                {
                    title: "سجل التحديثات",
                    url: "#",
                },
            ],
        },
        {
            title: "الإعدادات",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "عام",
                    url: "#",
                },
                {
                    title: "الفريق",
                    url: "#",
                },
                {
                    title: "الفوترة",
                    url: "#",
                },
                {
                    title: "الحدود",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "الهندسة التصميمية",
            url: "#",
            icon: Frame,
        },
        {
            name: "المبيعات والتسويق",
            url: "#",
            icon: PieChart,
        },
        {
            name: "السفر",
            url: "#",
            icon: Map,
        },
    ],
};


export default function Layout({ children, }: { children: React.ReactNode }) {
    const [activeTeam, setActiveTeam] = React.useState(data.teams[0]);

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" side="right">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton className="bg-pink-100"
                                                tooltip={item.title}
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                <ChevronLeft className="mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                        >
                                                            <a
                                                                href={
                                                                    subItem.url
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton
                                        size="lg"
                                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                    >
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage
                                                src={data.user.avatar}
                                                alt={data.user.name}
                                            />
                                            <AvatarFallback className="rounded-lg">
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                {data.user.name}
                                            </span>
                                            <span className="truncate text-xs">
                                                {data.user.email}
                                            </span>
                                        </div>
                                        <ChevronsUpDown className="ml-auto size-4" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                    side="bottom"
                                    align="end"
                                    sideOffset={4}
                                >
                                    <DropdownMenuLabel className="p-0 font-normal">
                                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                            <Avatar className="h-8 w-8 rounded-lg">
                                                <AvatarImage
                                                    src={data.user.avatar}
                                                    alt={data.user.name}
                                                />
                                                <AvatarFallback className="rounded-lg">
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">
                                                    {data.user.name}
                                                </span>
                                                <span className="truncate text-xs">
                                                    {data.user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Sparkles />
                                            Upgrade to Pro
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <BadgeCheck />
                                            Account
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCard />
                                            Billing
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Bell />
                                            Notifications
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
                                        <LogOut />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 rotate-180" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                    البيانات
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block rotate-180" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        جلب البيانات         
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
