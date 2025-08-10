import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-left max-w-xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="opacity-0 animate-fade-in-delay-1">
                    <span className="text-primary">Devin </span>
                    <span className="text-gradient">Patel</span>
                </span>
            </h1>
          {/* Add linkedin??? */}
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I am currently a rising sophomore at the University of Illinois Urbana-Champaign studying Mechanical Engineering and Computer Science.
          </p>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-16 md:mt-0">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}headshot.jpg`}
              alt="Devin Patel"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>

</div>

      </div>

      <div className="absolute -bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};