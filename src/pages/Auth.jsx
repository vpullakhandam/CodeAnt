'use client'

import { useState } from 'react'
import { Logo } from '../components/common/logo'
import { StatsCard } from '../components/common/stats-card'
import { ToggleView } from '../components/common/toggle-view'
import { SaasAuth } from '../components/auth/saas-auth'
import { SelfHostedAuth } from '../components/auth/self-hosted-auth'

export default function Auth() {
  const [view, setView] = useState('saas')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side with stats - hidden on mobile */}
      <div className="hidden md:flex md:flex-1 p-8 items-center justify-center">
        <StatsCard />
      </div>

      {/* Right side with auth */}
      <div className="flex-1 bg-white p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-6 md:space-y-8">
          <Logo className="mx-auto" />
          
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Welcome to CodeAnt AI
          </h1>
          
          <ToggleView view={view} onViewChange={setView} />
          
          {view === 'saas' ? <SaasAuth /> : <SelfHostedAuth />}
          
          <p className="text-center text-sm text-gray-600">
            By signing up you agree to the{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

