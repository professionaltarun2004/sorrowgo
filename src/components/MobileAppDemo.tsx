const MobileAppDemo = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* 3D Phone Frame Container */}
      <div className="relative mx-auto max-w-[380px] animate-gentle-float">
        {/* Phone Frame */}
        <div 
          className="relative bg-white rounded-[3rem] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-[1.02]"
          style={{ 
            perspective: '1200px',
            transform: 'perspective(1200px) rotateY(0deg)'
          }}
        >
          {/* Screen Background */}
          <div className="bg-[#f0f9f9] rounded-[2.5rem] overflow-hidden">
            {/* Video Content */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[9/16] object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Phone Notch (optional) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-full z-10" />
        </div>
      </div>
      
      <p className="text-center text-sm text-foreground/80 px-4 font-medium">
        Experience healing in motion
      </p>
    </div>
  );
};

export default MobileAppDemo;
