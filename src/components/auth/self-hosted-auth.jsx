import { Gitlab, Key } from 'lucide-react'

export function SelfHostedAuth() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Gitlab className="w-5 h-5" />
        <span>Self Hosted GitLab</span>
      </button>
      
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Key className="w-5 h-5" />
        <span>Sign in with SSO</span>
      </button>
    </div>
  )
}

