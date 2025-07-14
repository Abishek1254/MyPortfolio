"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Code, GraduationCap, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    {
      icon: Trophy,
      title: "CODEMANIA Runner-Up",
      description: "Secured 2nd place in intra-NIT coding competition against 50+ students",
      category: "Competition",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Code,
      title: "Competitive Programming",
      description: "345+ LeetCode problems solved with 1479 contest rating",
      category: "Programming",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "District Topper in 10th CBSE (98%) • CGPA 9.1 (3rd semester)",
      category: "Academic",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Event Organiser",
      description: "Successfully organized speaking competition at Techvaganza NIT Srinagar 2024",
      category: "Leadership",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ]

  const stats = [
    { number: "345+", label: "LeetCode Problems" },
    { number: "300+", label: "GeeksforGeeks Problems" },
    { number: "1479", label: "Contest Rating" },
    { number: "9.1", label: "Current CGPA" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Achievements & Recognition</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Milestones that reflect my dedication to learning, competing, and contributing to the tech community.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-gray-800/50 border-gray-700 backdrop-blur-sm ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-white">{achievement.title}</h3>
                        <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-200 border-gray-600">
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
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
