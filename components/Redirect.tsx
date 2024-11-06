"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

interface RedirectProps {
  to: string;
  message?: string;
}

export default function Redirect({ to, message = "Redirecting..." }: RedirectProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 100); // Increases progress by 10% every 100ms

    if (progress >= 100) {
      router.push(to);
    }

    return () => clearInterval(interval); // Clean up interval
  }, [progress, router, to]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <p className="text-lg font-semibold">{message}</p>
        <Progress value={progress} className="w-64 h-2 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
