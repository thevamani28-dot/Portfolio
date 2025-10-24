
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Mail, Phone, Globe, GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download an actual PDF file
    alert('Resume download would start here. Please add your actual resume PDF to the public folder.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Resume
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <Button onClick={handleDownloadResume} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Button>
          </div>

          {/* Personal Information */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                TM
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Thevamani Manimaran</h2>
              <p className="text-xl text-blue-600 mb-6">Computer Science Student & Aspiring Full Stack Developer</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>thevamani.manimaran@email.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>+60 12-345-6789</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span>linkedin.com/in/thevamani-manimaran</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-600" />
                Professional Summary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Motivated Computer Science student at Open Universiti Malaysia with strong foundation in full-stack development, 
                data structures, and software engineering principles. Experienced in modern web technologies 
                including React, Node.js, and cloud platforms. Proven ability to work in team environments 
                and deliver high-quality software solutions. Seeking entry-level software developer position 
                to contribute technical skills and passion for innovation.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                Education
              </h3>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h4>
                  <p className="text-blue-600 font-semibold">Open Universiti Malaysia</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Currently Pursuing</span>
                    <span className="mx-4">•</span>
                    <span>Excellent Academic Performance</span>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                    <div className="grid md:grid-cols-2 gap-2">
                      <span className="text-gray-600">• Data Structures and Algorithms</span>
                      <span className="text-gray-600">• Software Engineering</span>
                      <span className="text-gray-600">• Database Management Systems</span>
                      <span className="text-gray-600">• Web Development</span>
                      <span className="text-gray-600">• Computer Networks</span>
                      <span className="text-gray-600">• Machine Learning Fundamentals</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">Foundation Studies</h4>
                  <p className="text-blue-600 font-semibold">Open Universiti Malaysia</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Completed with Distinction</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
                Experience
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900">Software Development Intern</h4>
                  <p className="text-blue-600 font-semibold">TechStart Solutions</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>June 2023 - August 2023</span>
                    <span className="mx-4">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Kuala Lumpur, Malaysia</span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Developed and maintained web applications using React and Node.js</li>
                    <li>• Collaborated with senior developers to implement new features and fix bugs</li>
                    <li>• Participated in code reviews and agile development processes</li>
                    <li>• Improved application performance by 25% through code optimization</li>
                  </ul>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900">Peer Tutor</h4>
                  <p className="text-blue-600 font-semibold">Open Universiti Malaysia</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>January 2023 - Present</span>
                    <span className="mx-4">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Kuala Lumpur, Malaysia</span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Assist fellow students with programming assignments and concepts</li>
                    <li>• Conduct study sessions for data structures and algorithms</li>
                    <li>• Provide guidance on software development best practices</li>
                    <li>• Mentor 15+ students per semester in various programming languages</li>
                  </ul>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Teaching</Badge>
                      <Badge variant="secondary">Mentoring</Badge>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900">Freelance Web Developer</h4>
                  <p className="text-blue-600 font-semibold">Self-Employed</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>September 2022 - Present</span>
                    <span className="mx-4">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Remote</span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Developed responsive websites for local businesses and nonprofits</li>
                    <li>• Managed full project lifecycle from requirements gathering to deployment</li>
                    <li>• Implemented SEO best practices and accessibility standards</li>
                    <li>• Maintained ongoing client relationships and provided technical support</li>
                  </ul>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">WordPress</Badge>
                      <Badge variant="secondary">SEO</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <Award className="mr-3 h-6 w-6 text-blue-600" />
                Certifications & Awards
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AWS Certified Cloud Practitioner (2023)</li>
                    <li>• Google Analytics Certified (2023)</li>
                    <li>• freeCodeCamp Responsive Web Design (2022)</li>
                    <li>• Coursera Machine Learning Certificate (2023)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dean's List - Excellent Academic Performance</li>
                    <li>• Open Universiti Malaysia Merit Scholarship</li>
                    <li>• Best Project Award - Software Engineering</li>
                    <li>• Hackathon Winner - Tech Innovation Challenge</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Summary */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Skills Summary</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Programming Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Java</Badge>
                    <Badge>C++</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Frameworks & Libraries:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Express.js</Badge>
                    <Badge>Django</Badge>
                    <Badge>Flask</Badge>
                    <Badge>Bootstrap</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>Linux</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;