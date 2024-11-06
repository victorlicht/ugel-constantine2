"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import arabicText from "@/public/locales/arabic.json";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Reset error message

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            if (result?.ok) {
                router.push("/admin");
            } else {
                setError(arabicText.auth.loginFailed); // Set error message if login fails
            }
        } catch (error) {
            setError(arabicText.auth.error); // Set error message for unexpected errors
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        {arabicText.auth.signIn}
                    </CardTitle>
                </CardHeader>
                
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        {error && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email">{arabicText.auth.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                                required
                                placeholder={arabicText.auth.emailPlaceholder}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">{arabicText.auth.password}</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setPassword(e.target.value)
                                }
                                required
                                placeholder={arabicText.auth.passwordPlaceholder}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            {arabicText.auth.loginButton}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
