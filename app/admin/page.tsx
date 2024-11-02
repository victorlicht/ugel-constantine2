// app/admin/page.tsx
"use client"

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/Admin/Auth/LoginForm'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/admin/dashboard')
    }
  }, [status, router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {status === 'loading' ? (
        <div className="flex items-center justify-center min-h-screen">
          <div dir='ltr' className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div> 
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : status === 'unauthenticated' ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Please sign in to your admin account</p>
            </div>
            <LoginForm />
          </div>
          <footer className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Ugel Constantine. All rights reserved.
          </footer>
        </div>
      ) : null}
    </div>
  )
}