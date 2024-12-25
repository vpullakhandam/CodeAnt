import { Logo } from './logo'

export function StatsCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Logo className="text-gray-800" />
          <h2 className="text-lg font-medium">AI to Detect & Autofix Bad Code</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm text-gray-600">Language Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">100K+</div>
            <div className="text-sm text-gray-600">Hours Saved</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-200 rounded-full" />
            </div>
            <div>
              <div className="text-sm text-blue-600 flex items-center gap-1">
                <span>↑ 14%</span>
                <span className="text-gray-500">This week</span>
              </div>
              <div className="font-medium">Issues Fixed</div>
              <div className="text-2xl font-bold">500K+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

