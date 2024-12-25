import { Github, Gitlab } from 'lucide-react'

export function SaasAuth() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Github className="w-5 h-5" />
        <span>Sign in with Github</span>
      </button>
      
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <img src="/placeholder.svg?height=20&width=20" alt="Bitbucket" className="w-5 h-5" />
        <span>Sign in with Bitbucket</span>
      </button>
      
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <img src="/placeholder.svg?height=20&width=20" alt="Azure DevOps" className="w-5 h-5" />
        <span>Sign in with Azure Devops</span>
      </button>
      
      <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Gitlab className="w-5 h-5" />
        <span>Sign in with GitLab</span>
      </button>
    </div>
  )
}

