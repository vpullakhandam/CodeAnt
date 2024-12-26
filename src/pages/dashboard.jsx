import { Sidebar } from '../components/dashboard/sidebar';
import { RepositoryList } from '../components/dashboard/repo-list';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <RepositoryList />
    </div>
  );
}

