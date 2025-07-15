import { Briefcase, GraduationCap, Wifi } from "lucide-react";

const timelineData = [
  {
    title: "Student",
    company: "Fremd High School",
    date: "Aug 2020 – May 2024",
    description:
      "Graduated with strong interest in technology, by taking numerous PLTW and computer science classes. Participated in golf, basketball, and National Honor Society.",
    icon: <GraduationCap className="w-5 h-5" />,
    side: "right",
  },
  {
    title: "Mechanical Engineering Intern",
    company: "Field Theory",
    date: "May 2022 – Aug 2023",
    description:
      "Worked on Bluetooth and Wi-Fi antennas, helped with design and testing, and gained hands-on experience with tools like 3D printers and soldering equipment.",
    icon: <Wifi className="w-5 h-5" />,
    side: "left",
  },
  {
    title: "Student",
    company: "University of Illinois Urbana-Champaign",
    date: "Aug 2024 – Present",
    description:
      "I'm currently a rising sophomore studying Mechanical Engineering and CS. Around campus I am in a professional business fraternity PCT, the Illinois off-road Baja Team, and the National Organization of Business and Engineering.",
    icon: (
      <img
        src="/public/UIUCLOGO.PNG"
        alt="UIUC"
        className="w-5 h-5 object-contain"
      />
    ),
    side: "right",
  },
  {
    title: "Emerging Technology Intern",
    company: "Synchrony Financial",
    date: "May 2024 – Present",
    description:
      "Collaborated with teams to design and develop responsive, user-friendly web interfaces. Focused on performance optimization, accessibility, and modern UI/UX practices using React and Tailwind CSS.",
    icon: (
      <img
        src="/public/SynchronyWhiteLogo.png"
        alt="Synchrony"
        className="w-5 h-5 object-contain"
      />
    ),
    side: "left",
  },
];

export const TimelineSection = () => {
  return (
    <section id="journey" className="py-12 px-6 md:px-12 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary" />

          <div className="md:hidden absolute left-6 top-0 h-full border-l-2 border-primary" />

          <div className="space-y-8 relative">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start"
              >
               
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md" />
                </div>

                
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 top-4 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md" />
                </div>

                
                <div className="md:hidden w-full pl-16 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-primary-foreground p-2 rounded-full shadow-md">
                      {item.icon}
                    </span>
                    <span className="text-lg font-semibold">{item.company}</span>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-md">
                    <div className="text-sm text-gray-400 mb-1">{item.date}</div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>

                  
                  <div className="hidden md:block w-full">
                  
                  <div
                    className={`w-full md:w-1/2 px-2 md:px-6 mb-2 absolute top-0 ${
                      item.side === "left"
                        ? "left-1/2 -translate-x-full flex justify-end text-right"
                        : "left-1/2 flex justify-start text-left"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.side === "right" && (
                        <span className="bg-primary text-primary-foreground p-2 rounded-full shadow-md">
                          {item.icon}
                        </span>
                      )}
                      <span className="text-lg font-semibold">{item.company}</span>
                      {item.side === "left" && (
                        <span className="bg-primary text-primary-foreground p-2 rounded-full shadow-md">
                          {item.icon}
                        </span>
                      )}
                    </div>
                  </div>

                  
                  <div
                    className={`w-full md:w-1/2 px-4 mt-4 md:mt-0 ${
                      item.side === "left"
                        ? "md:pl-12 md:ml-auto text-left"
                        : "md:pr-12 md:mr-auto text-right"
                    }`}
                  >
                    <div className="bg-card p-5 md:p-6 rounded-xl shadow-md">
                      <div className="text-sm text-gray-400 mb-1">{item.date}</div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
