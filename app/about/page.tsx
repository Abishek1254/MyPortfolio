import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Award, Users, Code } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 dark-gradient-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A passionate Information Technology student at NIT Srinagar, dedicated to creating innovative solutions and
            pushing the boundaries of what's possible with code.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
          <div className="space-y-6">
            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-white">
                      Bachelor of Technology in Information Technology
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>National Institute of Technology, Srinagar</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Expected 2027</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">
                        Current CGPA: 9.06 (up to 4th semester)
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-white">12th Standard CBSE</CardTitle>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Army Public School Janglot, Kathua, J&K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>2022 - 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same but with updated card styling */}
      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Academic & Extra-Curricular Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <CardTitle className="text-white">CODEMANIA Runner-Up</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">
                  Secured 2nd place in an intra-NIT coding competition competing against 50+ students from the college.
                </p>
                <p className="text-sm text-gray-400">
                  Involved solving general programming questions along with problems related to Data Structures and
                  Algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Competitive Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-300">• Solved 470+ problems on LeetCode with a contest rating over 1500</p>
                  <p className="text-gray-300">• Solved over 300 problems on GeeksforGeeks</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-white">Academic Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-300">• District Topper in 10th standard CBSE exams with a 98% score</p>
                  <p className="text-gray-300">• Maintaining CGPA of 9.06 (upto 4th semester) at NIT Srinagar</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-white">Leadership & Organization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">Event Organiser at Techvaganza NIT Srinagar 2024</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>• Successfully organized a speaking competition with 50+ participants</p>
                  <p>• Coordinated with a team of 10+ individuals</p>
                  <p>• Collaborated with faculty, students, and external partners</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">My Journey</h2>
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              My journey in technology began during my school years when I first discovered the power of programming.
              What started as curiosity about how websites and applications work has evolved into a deep passion for
              creating innovative solutions that can make a real difference.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Currently pursuing my Bachelor's in Information Technology at NIT Srinagar, I've been fortunate to learn
              from some of the best minds in the field while also challenging myself through competitive programming and
              real-world projects. My academic journey has been marked by consistent excellence, maintaining a CGPA of
              9.06 while actively participating in coding competitions and technical events.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beyond academics, I believe in the power of community and collaboration. As an Event Organiser at
              Techvaganza 2024, I had the opportunity to bring together students from across the region, fostering an
              environment of learning and innovation. This experience taught me valuable lessons about leadership,
              teamwork, and the importance of creating platforms for others to showcase their talents.
            </p>
            <p className="text-lg leading-relaxed">
              Looking ahead, I'm excited about the possibilities that lie at the intersection of technology and human
              needs. Whether it's building responsive web applications, solving complex algorithmic challenges, or
              contributing to open-source projects, I'm committed to continuous learning and making a positive impact
              through technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
