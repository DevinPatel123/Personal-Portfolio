export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={`${import.meta.env.BASE_URL}IMG_2322.jpg`}
              alt="Wide Profile"
              className="w-full max-w-2xl rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside of work, I’m passionate about staying active and connecting with others through shared experiences. 
  The photo on the left is from one of my favorite pastimes — golf — a sport I’ve played for years and continue to enjoy both competitively and casually. 
  I’m also a big fan of basketball, whether it's playing a quick pickup game or catching an NBA matchup with friends. 
  When I’m not on the course or the court, I love hiking new trails, experimenting in the kitchen with new recipes, and spending quality time with my family. 
  These hobbies keep me balanced, energized, and always learning something new.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://linkedin.com/in/devin-patel82"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Visit LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
