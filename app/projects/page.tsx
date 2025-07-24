import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cloud, Shield, CreditCard, Zap } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Splitr-A Group Expense Management Platform",
      description:
        "A modern full-stack web application to streamline group expense tracking and settlements. Tailored for travel groups, roommates, and event organizers, the app ensures fair and transparent financial collaboration .",
      longDescription:
        "a responsive and modern full-stack web application to streamline group expense tracking and settlements. Tailored for travel groups, roommates, and event organizers, the app ensures fair and transparent financial collaboration.",
      icon: Cloud,
      technologies: ["Next.js", "React", "Tailwind CSS", "Convex", "Clerk", "Inngest" , "ShadcnUI", "Gemini API", "Resend", "Vercel"],
      features: [
        "A clean, responsive UI with Tailwind CSS ,modular React components and prebuilt components from ShadcnUI  for intuitive group management, expense logging, and settlement visualization",
        "Utilizes Clerk for robust authentication, secure user session handling, and seamless sign-in/sign-up flows",
        "Leverages Convex as a scalable backend for instant data syncing, group creation, and live updates across all users in a group.",
        "Payment reminders using the Resend API, ensuring timely notifications and accountability for pending dues.",
        "Uses Google Gemini API to automatically generate personalized monthly spending reports and deliver them via email for improved financial insights",
        "Responsive design for all devices",
      ],
      githubUrl: "https://github.com/Abishek1254/Splitr",
      liveUrl: "#",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      category: "Web Application",
    },
    {
      title: "Random Password Generator",
      description:
        "A robust password generator application that enables users to create secure passwords with customizable lengths from 4 to 20 characters. Features include password strength assessment and clipboard integration for seamless usage.",
      longDescription:
        "This project demonstrates my understanding of security best practices and user experience design. The application provides users with full control over password composition while educating them about password strength through visual feedback.",
      icon: Shield,
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Customizable password length (4-20 characters)",
        "Selectable character types (uppercase, lowercase, numbers, symbols)",
        "Real-time password strength assessment",
        "Three-tier strength categorization (weak, mid, strong)",
        "One-click clipboard integration",
        "Modern UI with Tailwind CSS",
      ],
      githubUrl: "https://github.com/Abishek1254/Password-Generator",
      liveUrl: "#",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      category: "Utility Tool",
    },
    {
      title: "Razorpay Clone",
      description:
        "A pixel-perfect, fully responsive clone of Razorpay's landing page built using HTML, CSS, and Tailwind CSS. The project focuses on modern UI components, advanced layouts, and smooth user interactions.",
      longDescription:
        "This project showcases my ability to recreate complex, professional designs with attention to detail. It demonstrates proficiency in modern CSS techniques, responsive design principles, and the effective use of CSS frameworks.",
      icon: CreditCard,
      technologies: ["HTML", "CSS", "Tailwind CSS"],
      features: [
        "Pixel-perfect design replication",
        "Fully responsive across all devices",
        "Modern flex and grid layouts",
        "Smooth hover effects and transitions",
        "Optimized performance and accessibility",
        "Clean, maintainable code structure",
      ],
      githubUrl: "https://github.com/Abishek1254/Razorpay-Clone",
      liveUrl: "#",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      category: "UI Clone",
    },
  ]

  const upcomingProjects = [
    {
      title: "Task Management System",
      description: "A full-stack task management application with real-time collaboration features",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "In Development",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 dark-gradient-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A collection of projects that showcase my technical skills, creativity, and problem-solving abilities. Each
            project represents a step in my journey as a developer.
          </p>
        </div>
      </section>

      {/* Main Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className={`p-8 ${project.bgColor} flex items-center justify-center`}>
                      <div className="text-center">
                        <IconComponent className={`h-24 w-24 ${project.color} mx-auto mb-4`} />
                        <Badge variant="secondary" className="mb-4 bg-gray-700 text-gray-200 border-gray-600">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <CardDescription className="text-base leading-relaxed mb-6 text-gray-300">
                        {project.longDescription}
                      </CardDescription>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-200 hover:bg-gray-700 bg-transparent"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                        {project.liveUrl !== "#" && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            asChild
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-6 w-6 text-orange-400" />
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
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
                      <Badge variant="secondary" className="w-fit bg-gray-700 text-gray-200 border-gray-600">
                        {project.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Interested in Collaborating?</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always excited to work on new projects and explore innovative ideas. Let's connect and create something
            amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-200 hover:bg-gray-800 bg-transparent"
              asChild
            >
              <Link href="https://github.com/Abishek1254" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
