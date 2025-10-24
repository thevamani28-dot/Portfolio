
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, GraduationCap, Briefcase, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Computer Science Student",
      description: "Currently at Open Universiti Malaysia with excellent academic performance"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Full Stack Developer",
      description: "Proficient in React, Node.js, Python, and more"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      title: "Ready for Career",
      description: "Seeking opportunities to launch my career in technology"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Award Winner",
      description: "Dean's List, Hackathon Winner, Merit Scholar"
    }
  ];

  const keyStrengths = [
    "Full-Stack Web Development",
    "Problem Solving & Algorithms",
    "Team Leadership & Collaboration",
    "Modern JavaScript Frameworks",
    "Database Design & Management",
    "Cloud Technologies (AWS)"
  ];

  const recentAchievements = [
    "🏆 Cal Hacks 9.0 Winner - Best Use of Technology for Social Good",
    "📚 Dean's List Recognition for Fall 2022 & Spring 2023",
    "🎓 Open Universiti Malaysia Merit Scholarship Recipient",
    "👨‍🏫 Outstanding Teaching Assistant Award - CS 61A",
    "☁️ AWS Certified Cloud Practitioner"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                TM
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                THEVAMANI MANIMARAN
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-700 mb-6 font-light">
                Computer Science Student & Aspiring Developer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Passionate about creating innovative solutions through code. Currently pursuing my Computer Science 
                degree at Open Universiti Malaysia while building real-world applications and seeking opportunities to launch my 
                career in technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/thevamani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/thevamani-manimaran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:thevamani.manimaran@email.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Me?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A dedicated student with proven technical skills, leadership experience, and a passion for innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Key Strengths</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyStrengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{strength}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/skills">
                  View All Skills & Certifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Recent Achievements</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Recognition and milestones that demonstrate my commitment to excellence
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{achievement.split(' ')[0]}</span>
                      <span className="text-gray-700 leading-relaxed">{achievement.substring(2)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/resume">
                  View Complete Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              I'm actively seeking opportunities to begin my career in technology. Let's discuss how my 
              skills, passion, and fresh perspective can contribute to your team's success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Start a Conversation
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/portfolio">
                  Explore My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Available for Opportunities
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Open to Relocation
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Full-time Positions
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Thevamani Manimaran</h3>
                <p className="text-gray-400 leading-relaxed">
                  Computer Science student passionate about creating innovative solutions 
                  through technology and ready to make a meaningful impact in the industry.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Me</Link>
                  <Link to="/resume" className="block text-gray-400 hover:text-white transition-colors">Resume</Link>
                  <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                  <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/thevamani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/thevamani-manimaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:thevamani.manimaran@email.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Thevamani Manimaran. Built with React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Designed and developed with ❤️ for my career journey
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}