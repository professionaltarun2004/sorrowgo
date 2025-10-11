import { Heart, Shield, Users, Sparkles } from "lucide-react";

const MobileAppDemo = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* App Info Cards Above Phone */}
      <div className="grid grid-cols-2 gap-3 max-w-[380px] mx-auto">
        <div className="glass rounded-2xl p-4 text-center space-y-2">
          <Heart className="w-6 h-6 mx-auto text-primary" />
          <p className="text-xs font-medium text-foreground/80">Empathetic Listeners</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center space-y-2">
          <Shield className="w-6 h-6 mx-auto text-primary" />
          <p className="text-xs font-medium text-foreground/80">100% Confidential</p>
        </div>
      </div>

      {/* 3D Phone Frame Container */}
      <div className="relative mx-auto" style={{ width: '280px' }}>
        {/* Phone Frame */}
        <div 
          className="relative bg-white rounded-[2.5rem] p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] animate-gentle-float"
          style={{ 
            perspective: '1200px',
            transform: 'perspective(1200px) rotateY(0deg)'
          }}
        >
          {/* Screen Background */}
          <div className="bg-[#f0f9f9] rounded-[2.2rem] overflow-hidden">
            {/* Video Content - Original Dimensions */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
              style={{ aspectRatio: '9/16' }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Phone Notch */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-white rounded-full z-10" />
        </div>
      </div>

      {/* App Info Cards Below Phone */}
      <div className="grid grid-cols-2 gap-3 max-w-[380px] mx-auto">
        <div className="glass rounded-2xl p-4 text-center space-y-2">
          <Users className="w-6 h-6 mx-auto text-primary" />
          <p className="text-xs font-medium text-foreground/80">Trained Comforters</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center space-y-2">
          <Sparkles className="w-6 h-6 mx-auto text-primary" />
          <p className="text-xs font-medium text-foreground/80">AI-Matched Rides</p>
        </div>
      </div>
      
      <p className="text-center text-sm text-foreground/80 px-4 font-medium">
        Experience healing in motion
      </p>
    </div>
  );
};

export default MobileAppDemo;
