import { Search, RotateCw, Plus } from 'lucide-react';

const repositories = [
  {
    name: 'design-system',
    visibility: 'Public',
    language: 'React',
    size: '7320 KB',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    language: 'Javascript',
    size: '5871 KB',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    size: '4521 KB',
    updatedAt: '5 days ago'
  },
  // Add more repositories as needed
];

const languageColors = {
  React: 'bg-blue-500',
  Javascript: 'bg-yellow-400',
  Python: 'bg-blue-600',
  Swift: 'bg-orange-500',
  Java: 'bg-red-500',
  'HTML/CSS': 'bg-purple-500',
  PHP: 'bg-indigo-500'
};

export function RepositoryList() {
  return (
    <div className="flex-1 p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">33 total repositories</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg border hover:bg-gray-50">
            <RotateCw className="w-4 h-4" />
            Refresh All
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            Add Repository
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="p-6 border rounded-lg hover:border-blue-500 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">{repo.name}</h3>
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                  {repo.visibility}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${languageColors[repo.language]}`} />
                {repo.language}
              </div>
              <div>{repo.size}</div>
              <div>Updated {repo.updatedAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

