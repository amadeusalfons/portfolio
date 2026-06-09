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
    <main className="w-full bg-background">
      <Navbar />
      <Hero />
      <MetricsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
