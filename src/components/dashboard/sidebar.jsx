import {
  Home,
  Code,
  Cloud,
  FileText,
  Settings,
  Phone,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import ChevronDown from "../../assets/chevron-down.svg";

function SidebarLink({ icon: Icon, href, children, active }) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={20} />
      {children}
    </Link>
  );
}

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          {logoImage ? (
            <img src={logoImage} alt="CodeAnt AI" className="w-8 h-8" />
          ) : (
            <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
              CA
            </div>
          )}
          <p className="text-xl">CodeAnt AI</p>
        </div>

        <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 text-gray-900 mb-4">
          UtkarshDhairyaPa...
          <span className="float-right">
            <img src={ChevronDown} alt="" className="mt-2" />
          </span>
        </button>
      </div>

      <nav className="flex-1 px-2">
        <SidebarLink icon={Home} href="/repositories" active>
          Repositories
        </SidebarLink>
        <SidebarLink icon={Code} href="/ai-code-review">
          AI Code Review
        </SidebarLink>
        <SidebarLink icon={Cloud} href="/cloud-security">
          Cloud Security
        </SidebarLink>
        <SidebarLink icon={FileText} href="/how-to-use">
          How to Use
        </SidebarLink>
        <SidebarLink icon={Settings} href="/settings">
          Settings
        </SidebarLink>
      </nav>

      <div className="px-2 pb-4">
        <SidebarLink icon={Phone} href="/support">
          Support
        </SidebarLink>
        <SidebarLink icon={LogOut} href="/logout">
          Logout
        </SidebarLink>
      </div>
    </div>
  );
};
