import { Heart, Stethoscope } from "lucide-react";

const Header = () => {
  return (
    <header className="medical-gradient text-white py-8 px-6 text-center shadow-2xl border-b-4 border-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 animate-fade-in-up">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            {/* Animated Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse-glow" style={{width: '140px', height: '140px', left: '-10px', top: '-10px'}}></div>
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse-glow" style={{width: '160px', height: '160px', left: '-20px', top: '-20px', animationDelay: '2s'}}></div>
            
            {/* Logo Container */}
            <div className="relative w-32 h-32 mx-4 animate-float">
              {/* Logo Background */}
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl">
                <div className="text-6xl">
                  <Stethoscope className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Success Badge */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse-glow">
                معتمد
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cairo tracking-wide">
          <span className="flex items-center justify-center gap-4">
            PhysioCare
            <Heart className="w-8 h-8 text-red-400 animate-pulse" />
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl opacity-95 font-cairo font-light">
          احجز جلستك العلاجية بسهولة وأمان مع أفضل أطباء العلاج الطبيعي
        </p>
      </div>
    </header>
  );
};

export default Header;
