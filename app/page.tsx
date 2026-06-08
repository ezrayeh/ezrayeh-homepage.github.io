import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { ProjectsGrid } from "@/components/projects-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Showcase />
      <ProjectsGrid />
      <SiteFooter />
    </main>
  )
}
