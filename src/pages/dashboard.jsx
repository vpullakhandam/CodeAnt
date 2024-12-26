'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sidebar } from '../components/dashboard/sidebar'
import { RepositoryList } from '../components/dashboard/repo-list'
import { MobileNav } from '../components/dashboard/mobile-nav'
import { Logo } from '../components/common/logo'

export default function Dashboard() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)}>
        <Sidebar />
      </MobileNav>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
          <Logo showText={false} />
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <RepositoryList />
      </div>
    </div>
  )
}

