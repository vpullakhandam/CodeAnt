export function ToggleView({ view, onViewChange }) {
  return (
    <div className="flex w-full rounded-xl bg-gray-100 ">
      <button
        className={`flex-1 px-8 py-3 rounded-xl text-base font-medium transition-all ${
          view === 'saas'
            ? 'bg-blue-500 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onViewChange('saas')}
      >
        SAAS
      </button>
      <button
        className={`flex-1 px-8 py-3 rounded-xl text-base font-medium transition-all ${
          view === 'self-hosted'
            ? 'bg-blue-500 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onViewChange('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  )
}

