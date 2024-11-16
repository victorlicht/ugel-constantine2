"use client";
import { ColumnDef } from "@tanstack/react-table";

// Define the User type
export type User = {
    id: number;           
    email: string;
    name: string | null;
    title: string;
    createdAt: Date;
};

// Helper function to format dates
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
}

// Define the columns
export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "المعرف", // Arabic: ID
        cell: ({ row }) => row.original.id,
    },
    {
        accessorKey: "name",
        header: "الاسم", // Arabic: Name
        cell: ({ row }) => row.original.name || "غير متوفر", // Arabic: Not available
    },
    {
        accessorKey: "title",
        header: "اللقب", // Arabic: Title
        cell: ({ row }) => row.original.title,
    },
    {
        accessorKey: "email",
        header: "البريد الإلكتروني", // Arabic: Email
        cell: ({ row }) => row.original.email,
    },
    {
        accessorKey: "createdAt",
        header: "تاريخ الإنشاء", // Arabic: Created At
        cell: ({ row }) => formatDate(row.original.createdAt),
    },
];
