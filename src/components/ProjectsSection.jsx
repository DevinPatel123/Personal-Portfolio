import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Repurposed Bed-Frame Materials",
    description: "A custom-designed cornhole set built for portability with built-in drink holders.",
    image: "/CornholeSet.png",
    tags: ["Fusion 360", "Woodworking", "CAD"],
    category: "Mechanical Engineering",
    demoUrl: "https://docs.google.com/document/d/1BQ_wNzm1Vng2BDtVjh0X8MWFVgvtGfjQQJilJynsIa0/edit?usp=sharing",
    githubUrl: null, // No GitHub for this project
  },
  {
    id: 5,
    title: "PicklePals",
    description: "Multi or single player, interactive pickleball video game.",
    image: "/newpicklelogo.png",
    tags: ["Unity", "C#", "Physics", "Game Development"],
    category: "Computer Science",
    demoUrl: "https://docs.google.com/presentation/d/1kXw7ERKEYlLjLFYdfFTp-2cCCkjPqETEchIuwzELiHA/edit?usp=sharing",
    githubUrl: null
  },
  {
    id: 2,
    title: "2.4 GHz Dipole Antenna",
    description: "Built and tested a 2.4 GHz dipole antenna, meant for bluetooth and wifi.",
    image: "/Dipole.png",
    tags: ["Antenna", "Simulation", "RF", "CAD"],
    category: "Mechanical Engineering",
    demoUrl: "https://docs.google.com/presentation/d/1veqBcrLbCDeXf5Dx8mNFr8KZ91V1CBr6/edit?usp=sharing&ouid=114384835196500073889&rtpof=true&sd=true",
    githubUrl: null
  },

  {
    id: 3,
    title: "CycleSip",
    description: "Designed and built an adjustable, gyroscopic bottle holder for bikes.",
    image: "/CycleSip.png",
    tags: ["Product Design", "Fusion 360", "Prototyping"],
    category: "Mechanical Engineering",
    demoUrl: "https://drive.google.com/file/d/1_74dMWi9ZOENKP7YhUOC-I3DCMZy1ZkQ/view?usp=sharing",
    githubUrl: null
  },
  {
    id: 4,
    title: "Synchrony Shield",
    description: "Chrome extension that won hackathon Runner-Up for improving AI safety.",
    image: "/syn1.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Web Design"],
    category: "Computer Science",
    demoUrl: null,
    githubUrl: null
  },
];

const categories = ["All", "Mechanical Engineering", "Computer Science"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="w-full bg-background py-20 text-foreground" id="projects">
      <div className="container max-w-5xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  {project.title === "Synchrony Shield" ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
                      onClick={e => {
                        e.preventDefault();
                        const win = window.open();
                        if (win) {
                          win.document.write('<!DOCTYPE html><html><head><title>Demo Down</title></head><body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h1>Sorry, we had to take the demo down.</h1></body></html>');
                          win.document.close();
                        }
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}