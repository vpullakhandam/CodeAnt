import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Shield, HelpCircle, Settings, PhoneCall, LogOut, ChevronDown } from 'lucide-react';
import { Logo } from '../common/logo';

export function Sidebar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b">
        <Logo />
      </div>

      {/* Organization Dropdown */}
      <div className="p-4 border-b">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between text-sm font-medium hover:bg-gray-50 rounded-lg p-2"
        >
          <span>UtkarshDhairyaPatel</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-2 text-blue-600 bg-blue-50 rounded-lg p-2">
              <Home className="w-5 h-5" />
              <span>Repositories</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
              <code className="text-lg">&lt;/&gt;</code>
              <span>AI Code Review</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
              <Shield className="w-5 h-5" />
              <span>Cloud Security</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
              <HelpCircle className="w-5 h-5" />
              <span>How to Use</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t space-y-2">
        <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
          <PhoneCall className="w-5 h-5" />
          <span>Support</span>
        </a>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-lg p-2 w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

