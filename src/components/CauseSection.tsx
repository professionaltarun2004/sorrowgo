const CauseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            The Silence We All Share
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/80 leading-relaxed space-y-6">
            <p>
              In a world that celebrates marks more than minds, and ranks more than feelings — millions silently carry the weight of expectations. From classrooms to offices, from family dining tables to friend circles — our generation smiles through pain, scared to be misunderstood, judged, or silenced.
            </p>
            
            <p>
              Depression is no longer an illness of a few — it's the unseen epidemic of an entire generation that forgot how to be heard.
            </p>
            
            <p className="text-xl font-medium text-primary">
              SorrowGo was born out of this silence.
            </p>
            
            <p>
              A ride that's not about distance, but connection. A movement that turns strangers into listeners, and conversations into healing. Here, you don't have to pretend to be okay. You don't need to wear ranks, degrees, or family pride. You just need to be human.
            </p>
            
            <p className="text-lg italic text-center pt-6 text-primary">
              Because sometimes, one comforting ride can do what years of silence could not — make you feel heard again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CauseSection;