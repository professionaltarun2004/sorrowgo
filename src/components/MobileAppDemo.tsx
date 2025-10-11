const MobileAppDemo = () => {
  return (
    <div className="sticky top-8 space-y-4 animate-fade-in">
      <div className="glass rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] transform hover:scale-[1.02] transition-all duration-500">
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
      <p className="text-center text-sm text-foreground/80 px-4">
        Experience healing in motion
      </p>
    </div>
  );
};

export default MobileAppDemo;
