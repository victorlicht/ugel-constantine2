"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })
      if (result?.error) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة")
      } else {
        router.push("/admin/dashboard")
      }
    } catch (err) {
      setError("حدث خطأ غير متوقع")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="backdrop-blur-sm bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/60" dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-lg relative text-center" role="alert">
            <p className="text-sm">{error}</p>
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#038652] focus:border-[#038652] sm:text-sm transition-all duration-200"
            placeholder="admin@example.com"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            كلمة المرور
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#038652] focus:border-[#038652] sm:text-sm transition-all duration-200"
            required
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-all duration-200 ${
            isLoading
              ? 'bg-[#038652] opacity-75 cursor-not-allowed'
              : 'bg-[#038652] hover:bg-[#026b46] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#038652]'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2 align-middle">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              جاري تسجيل الدخول...
            </div>
          ) : (
            'تسجيل الدخول'
          )}
        </button>
      </form>
    </div>
  )
}