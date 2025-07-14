import { Hero } from "./components/hero"
import { FeaturedProjects } from "./components/featured-projects"
import { Skills } from "./components/skills"
import { Achievements } from "./components/achievements"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Achievements />
    </div>
  )
}
