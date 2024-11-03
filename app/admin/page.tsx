"use client"
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/Admin/Auth/LoginForm'
import adminPhrases from '@/app/public/arabic.json'
import Image from 'next/image'
import LogoImage from '@/app/public/photos/ugel_logo.jpg'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/admin/dashboard')
    }
  }, [status, router])

  return (
    <div className="min-h-screen" dir="rtl">
      {status === 'loading' ? (
        <div className="flex items-center justify-center min-h-screen" aria-live="polite">
          <div
            className="border-4 border-gray-200 rounded-full w-12 h-12 animate-spin"
            style={{ borderTopColor: '#038652' }}
          ></div>
        </div>
      ) : status === 'unauthenticated' ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-md">
            {/* Circular Logo with responsive sizing */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src={LogoImage}
                  alt='شعار'
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mb-8 text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 animate-fade-in">
                {adminPhrases.welcomeBack}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 animate-fade-in-slow">
                {adminPhrases.loginPrompt}
              </p>
            </div>
            <LoginForm />
          </div>
          <footer className="mt-8 text-center text-xs sm:text-sm text-gray-500">
            <div className="w-full max-w-xs mx-auto border-t border-gray-200 pt-4" />
            <p>{adminPhrases.footer.org_name}</p>
            <p>
              {adminPhrases.footer.rightsReserved} {adminPhrases.footer.copyrightSymbol} {adminPhrases.footer.year}
            </p>
          </footer>
        </div>
      ) : null}
    </div>
  )
}