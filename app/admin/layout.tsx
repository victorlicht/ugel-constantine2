// app/admin/layout.tsx
"use client"

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Redirect to login if not authenticated (except for the login page)
    if (status === 'unauthenticated' && pathname !== '/admin') {
      router.push('/admin')
    }
  }, [status, router, pathname])

  // Don't show loading on the login page
  if (status === 'loading' && pathname !== '/admin') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  // Only render children for authenticated users or on the login page
  if (status === 'authenticated' || pathname === '/admin') {
    return <>{children}</>
  }

  return null
}