import githubImage from "../../assets/github.svg";
import bitbucketImage from "../../assets/bitbucket.svg";
import azureDevopsImage from "../../assets/devops.svg";
import gitlabImage from "../../assets/gitlab.svg";
import { useNavigate } from "react-router-dom";

export function SaasAuth() {
  const navigate = useNavigate();

  const handleAuth = () => {
    // Add any authentication logic here if needed
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <button
        onClick={handleAuth}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <img src={githubImage} className="w-5 h-5" />
        <span>Sign in with Github</span>
      </button>

      <button
        onClick={handleAuth}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <img src={bitbucketImage} className="w-5 h-5" />
        <span>Sign in with Bitbucket</span>
      </button>

      <button
        onClick={handleAuth}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <img src={azureDevopsImage} className="w-5 h-5" />
        <span>Sign in with Azure Devops</span>
      </button>

      <button
        onClick={handleAuth}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <img src={gitlabImage} className="w-5 h-5" />
        <span>Sign in with GitLab</span>
      </button>
    </div>
  );
}
