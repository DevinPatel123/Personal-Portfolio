import { Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground mb-8 text-lg leading-relaxed">
            Feel free to contact me at the email or phone number below and I'll get back as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div>
              <a
                href="mailto:dpatel021306@gmail.com"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors duration-200 font-medium w-11/12 mx-auto"
              >
                <Mail className="h-5 w-5" />
                dpatel021306@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+1 (630) 962-9319</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};