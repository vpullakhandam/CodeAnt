import logoImage from "../../assets/logo.svg";
import subtractImage from "../../assets/Subtract.svg";
import vectorImage from "../../assets/Vector.svg";

export function StatsCard() {
  return (
    <div className="relative max-w-md">
      {/* Background Image */}
      <img
        src={subtractImage}
        className="absolute mt-60  ml-2 -left-40 w-[200px] h-[250px] opacity-1"
        alt="Background decoration"
      />

      {/* First Card */}
      <div
        className="bg-white rounded-3xl p-6 z-10 mb-28"
        style={{ boxShadow: "0px 0px 16px rgba(8, 23, 53, 0.08)" }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt ="" className="w-8 h-8" />
            <h2 className="text-xl font-medium">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>
          <hr className="border-gray-200" />
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">30+</div>
              <div className="text-gray-600 text-sm">Language Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-gray-600 text-sm">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100K+</div>
              <div className="text-gray-600 text-sm">Hours Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div
        className="bg-white rounded-3xl absolute -bottom-16 right-0 transform translate-x-1/4 p-6 mr-16 z-20 w-[340px] h-[190px]"
        style={{ boxShadow: "0px 0px 16px rgba(8, 23, 53, 0.08)" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <img src={vectorImage} className="w-16 h-16" alt="Vector icon" />
            <div className="text-lg font-medium mt-2">Issues Fixed</div>
            <div className="text-3xl font-bold mt-1">500K+</div>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-600 font-medium">↑ 14%</span>
            <span className="text-gray-500 text-sm">This week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
