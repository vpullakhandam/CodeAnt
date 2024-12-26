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
    <div className="min-h-screen flex" style={{ backgroundColor: '#FFFFFF' }} >
      {/* Left side with stats */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <StatsCard />
      </div>
      

      {/* Right side with auth */}
      <div className="flex-1 flex flex-col items-center justify-center " style={{ backgroundColor: '#FAFAFA' }}>
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6">
          <Logo className="mx-auto" />
          
          <h1 className="text-3xl font-bold text-center">
            Welcome to CodeAnt AI
          </h1>
          
          <ToggleView view={view} onViewChange={setView} />
          
          {view === 'saas' ? <SaasAuth /> : <SelfHostedAuth />}
          
          <p className="text-center text-sm text-gray-600">
            By signing up you agree to the <b> Privacy Policy</b>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

