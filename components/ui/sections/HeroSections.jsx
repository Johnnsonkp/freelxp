// import heroBg from '/public/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[220px] overflow-hidden mt-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{ backgroundImage: `url(${heroBg})` }}
        style={{ backgroundImage: `url(./hero-bg.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 dark:from-[#121212]  dark:via-black/5 to-background" />
      </div>

      <div className="relative h-full flex flex-col items-end justify-center container mx-auto px-6">
        <div className="text-right space-y-1 max-w-3xl">
          <div className="mb-0 inline-block px-4 py-1 bg-secondary/20 backdrop-blur-sm border border-secondary/50 rounded-lg">
            <h2 className="text-1xl font-bold text-foreground tracking-wider">
              JOHN NKPOLUKWU
            </h2>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-6xl font-medium tracking-tight">
            <span className="block neon-text text-primary">SOFTWARE</span>
            <span className="block neon-text text-primary">ENGINEERING</span>
          </h1>

          <p className="text-4xl md:text-3xl font-semibold text-foreground">
            Simplified.
          </p>
        </div>
      </div>
    </section>
  );
};
