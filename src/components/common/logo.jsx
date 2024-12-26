import logoImage from "../../assets/logo.svg";

export function Logo() {
  return (
    <div className={`flex items-center gap-2 ml-28 `}>
      <img src={logoImage} alt="CodeAnt AI Logo" className="w-8 h-8" />
      <span className="text-2xl font-medium">CodeAnt AI</span>
    </div>
  );
}
