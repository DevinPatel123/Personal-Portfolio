import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
            {/* Add more?? */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Created by Devin Patel
          </p>
        </div>
      </div>
    </footer>
  );
};