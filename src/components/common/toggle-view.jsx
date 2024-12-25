export function ToggleView({ view, onViewChange }) {
    return (
      <div className="flex rounded-lg bg-gray-100 p-1">
        <button
          className={`px-6 py-2 rounded-lg ${
            view === 'saas'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => onViewChange('saas')}
        >
          SAAS
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            view === 'self-hosted'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => onViewChange('self-hosted')}
        >
          Self Hosted
        </button>
      </div>
    )
  }
  
  