"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Database, Settings } from "lucide-react"
import { useEffect, useState } from "react"

export function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "C", "JavaScript"],
      color: "text-blue-400",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "Tailwind CSS", "ReactJS", "Node.js", "Express.js", "MongoDB"],
      color: "text-green-400",
    },
    {
      title: "Core Concepts",
      icon: Database,
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Data Communication", "SQL"],
      color: "text-purple-400",
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: ["Visual Studio Code", "Git", "GitHub", "Postman","Figma"],
      color: "text-orange-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className={`h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-gray-800/50 border-gray-700 backdrop-blur-sm ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:scale-105 transition-transform duration-200 bg-gray-700 text-gray-200 border-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
