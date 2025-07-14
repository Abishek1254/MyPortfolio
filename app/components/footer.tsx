import Link from "next/link"
import { Github, Linkedin, Mail, Code, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abishek Salaria
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Information Technology student at NIT Srinagar, passionate about web development, competitive programming,
              and creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Abishek1254"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="hhttps://www.linkedin.com/in/abishek-salaria-376569297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE8DoYtKPSM%2BSl5sMiAJJLg%3D%3D"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://leetcode.com/u/abisheksalaria/"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Link>
              <Link
                href="mailto:abisalaria30@gmail.com"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="mailto:abisalaria30@gmail.com" className="hover:text-white transition-colors">
                  abisalaria30@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+916006618668" className="hover:text-white transition-colors">
                  +91-6006618668
                </Link>
              </li>
              <li>NIT Srinagar, J&K</li>
            </ul>
          </div>
        </div>

        {/* //Bottom Bar */}
        
      </div>
    </footer>
  )
}
