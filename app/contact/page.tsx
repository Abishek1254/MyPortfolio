"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abisalaria30@gmail.com",
      href: "mailto:abisalaria30@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6006618668",
      href: "tel:+916006618668",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "NIT Srinagar, J&K, India",
      href: "#",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Abishek1254",
      color: "text-gray-300",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abishek-salaria-376569297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE8DoYtKPSM%2BSl5sMiAJJLg%3D%3D",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/abisheksalaria/",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 dark-gradient-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in
            technology. Let's start a conversation!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you have a project idea, want to collaborate on something exciting, or just want to chat about
                technology and programming, I'd love to hear from you. Feel free to reach out through any of the
                channels below.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card
                      key={index}
                      className="transition-all duration-300 hover:shadow-md bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${info.bgColor}`}>
                            <IconComponent className={`h-5 w-5 ${info.color}`} />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-gray-400">{info.label}</p>
                            {info.href !== "#" ? (
                              <Link href={info.href} className="text-white hover:text-blue-400 transition-colors">
                                {info.value}
                              </Link>
                            ) : (
                              <p className="text-white">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Find Me Online</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg ${social.bgColor} ${social.color} hover:scale-110 transition-all duration-200`}
                        title={social.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="h-fit bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Send className="h-5 w-5 text-blue-400" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-200">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-200">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-200">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-200">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, idea, or just say hello!"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Quick Response Guarantee</h2>
            <p className="text-lg text-gray-300 mb-8">
              I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone or
              WhatsApp.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-white">Email Response</h3>
                  <p className="text-sm text-gray-300">Within 24 hours</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-white">Phone/WhatsApp</h3>
                  <p className="text-sm text-gray-300">Immediate response</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-white">LinkedIn</h3>
                  <p className="text-sm text-gray-300">Within 12 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
