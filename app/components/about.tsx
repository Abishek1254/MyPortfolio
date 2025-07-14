import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. I
            love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              Started my journey in web development during college, where I discovered my passion for creating
              user-friendly applications. Since then, I've worked with startups and established companies, helping them
              bring their digital visions to life.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe in continuous learning and staying up-to-date with the latest technologies. When I'm not coding,
              you can find me exploring new design trends, contributing to open-source projects, or mentoring aspiring
              developers.
            </p>
            <p className="text-muted-foreground">
              My goal is to create digital experiences that not only look great but also solve real-world problems and
              make people's lives easier.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-500 mr-3" />
                  <h4 className="text-lg font-semibold">Clean Code</h4>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and efficient code that stands the test of time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-purple-500 mr-3" />
                  <h4 className="text-lg font-semibold">User-Centered Design</h4>
                </div>
                <p className="text-muted-foreground">
                  Creating intuitive interfaces that provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-500 mr-3" />
                  <h4 className="text-lg font-semibold">Performance</h4>
                </div>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and search engine visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
