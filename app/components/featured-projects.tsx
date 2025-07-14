import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Cloud, Shield, CreditCard } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
  const projects = [
    {
      title: "Weather Application",
      description:
        "Sophisticated weather app with location-based updates and city-specific search functionality. Features real-time data including temperature, humidity, and wind speed.",
      icon: Cloud,
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Location-based weather", "City search", "Real-time data"],
      githubUrl: "https://github.com/Abishek1254/Weather-App",
      color: "text-blue-400",
    },
    {
      title: "Random Password Generator",
      description:
        "Robust password generator with customizable composition, strength assessment, and clipboard integration. Supports passwords from 4-20 characters.",
      icon: Shield,
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: ["Customizable composition", "Strength assessment", "Clipboard integration"],
      githubUrl: "https://github.com/Abishek1254/Password-Generator",
      color: "text-green-400",
    },
    {
      title: "Razorpay Clone",
      description:
        "Pixel-perfect responsive clone of Razorpay's landing page with modern UI components, flex/grid layouts, and smooth hover effects.",
      icon: CreditCard,
      technologies: ["HTML", "CSS", "Tailwind CSS"],
      features: ["Responsive design", "Modern UI", "Hover effects"],
      githubUrl: "https://github.com/Abishek1254/Razorpay-Clone",
      color: "text-purple-400",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my development skills and problem-solving abilities.
          </p>
          <Button variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800 bg-transparent" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-800/50 border-gray-700 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className={`h-6 w-6 ${project.color}`} />
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-white">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-gray-600 text-gray-200 hover:bg-gray-700"
                    asChild
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
