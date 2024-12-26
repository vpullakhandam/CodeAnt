import { Search, RotateCw, Plus } from "lucide-react";
import database from "../../assets/database.svg";

const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
];

export function RepositoryList({ isMobileMenuOpen }) {
  return (
    <div
      className={`flex-1 p-6 bg-gray-100 ${
        isMobileMenuOpen ? "hidden md:block" : "block"
      }`}
    >
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
            <p className="text-gray-600 text-sm">33 total repositories</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
              <RotateCw className="w-4 h-4" />
              Refresh All
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              Add Repository
            </button>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div
          className={`divide-y divide-gray-200 ${
            isMobileMenuOpen ? "mt-[YOUR_MOBILE_MENU_HEIGHT]px" : ""
          }`}
        >
          {repositories.map((repo) => (
            <div
              key={repo.name}
              className="py-4 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {repo.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      repo.visibility === "Public"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {repo.visibility}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  {repo.language}
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4">
                    <img src={database} alt="" />
                  </span>
                  {repo.size}
                </div>
                <div>Updated {repo.updatedAt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
