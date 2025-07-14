"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Code, MapPin, GraduationCap, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from 'next/image'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = ["JavaScript","React","Node.js", "MongoDB", "Express.js", "C++"]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 dark-gradient-bg">
      <div className="text-center max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Profile Image */}
          <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/20 relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              {/* Replace this div with your actual photo */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <User className="h-20 w-20 text-gray-400" />
              </div>
              {/* Uncomment and use this when you have your photo */}
              { 
              <Image 
  src="/photo.jpg" 
  alt="Abishek Salaria" 
  fill 
  className="object-cover w-full h-full"
/>
              }
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abishek Salaria
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-lg sm:text-xl text-gray-300">
              <GraduationCap className="h-5 w-5 text-blue-400" />
              <span>Information Technology Student</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-lg sm:text-xl text-gray-300">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>NIT Srinagar</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Pre-final year student passionate about <span className="text-blue-400 font-semibold">web development</span>{" "}
            and <span className="text-purple-400 font-semibold">competitive programming</span>. Building innovative
            solutions with modern technologies and solving complex problems with elegant code.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-sm px-3 py-1 transition-all duration-500 hover:scale-105 bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-200 hover:bg-gray-800 bg-transparent"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/Abishek1254"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-7 w-7" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abishek-salaria-376569297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT%2BVSCxAIQWKhjHe0YQqW4g%3D%3D"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://leetcode.com/u/abisheksalaria/"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="h-7 w-7" />
              <span className="sr-only">LeetCode</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <Link href="#skills" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
