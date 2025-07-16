import { StarBackground } from "../components/StarBackground.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import { AboutSection } from "../components/AboutSection.jsx"
import { TimelineSection } from "../components/TimelineSection.jsx"
import { ProjectsSection } from "../components/ProjectsSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { Footer } from "../components/Footer.jsx"

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/*Background Effects*/}
            {/*NavBar*/}
            <Navbar />
            {/*Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <TimelineSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/*Footer */}
            <Footer />
        </div>
    )
}