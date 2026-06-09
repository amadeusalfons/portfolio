import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MetricsSection from "@/components/MetricsSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import CredentialsSection from "@/components/CredentialsSection"
import LeadershipSection from "@/components/LeadershipSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full bg-background">
        <Hero />
        <section id="metrics">
          <MetricsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="credentials">
          <CredentialsSection />
        </section>
        <section id="leadership">
          <LeadershipSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
