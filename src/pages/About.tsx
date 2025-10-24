
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "Constantly learning and applying cutting-edge technologies to solve real-world problems."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Creativity",
      description: "Bringing creative solutions to complex challenges through thoughtful design and development."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Excellence",
      description: "Committed to delivering high-quality work and continuously improving my skills."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate computer science student with a drive for innovation and excellence in technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image and Introduction */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                TM
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello! I'm Thevamani Manimaran</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A dedicated Computer Science student at Open Universiti Malaysia, 
                with a passion for full-stack development and emerging technologies. I'm currently 
                pursuing my degree while building real-world applications and preparing to enter the tech industry 
                with a strong foundation in software development and a keen interest in creating impactful digital solutions.
              </p>
            </div>

            {/* Academic Journey */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Academic Journey</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                    <p className="text-blue-600 font-medium">Open Universiti Malaysia</p>
                    <p className="text-gray-600">Currently Pursuing | Excellent Academic Performance</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>• Data Structures & Algorithms</span>
                      <span>• Database Systems</span>
                      <span>• Software Engineering</span>
                      <span>• Web Development</span>
                      <span>• Machine Learning</span>
                      <span>• Computer Networks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Career Goals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Mission & Goals</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My mission is to leverage technology to create meaningful solutions that improve people's 
                  lives and drive positive change in society. I believe in the power of code to solve 
                  complex problems and bridge gaps between ideas and implementation.
                </p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900">Career Goals:</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Secure a full-stack developer position at a tech company</li>
                    <li>• Contribute to open-source projects and community initiatives</li>
                    <li>• Develop expertise in cloud technologies and DevOps</li>
                    <li>• Eventually lead development teams and mentor junior developers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Interests</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900">Primary Interests:</h5>
                    <ul className="text-gray-600 space-y-1 mt-2">
                      <li>• Full-Stack Web Development</li>
                      <li>• Mobile Application Development</li>
                      <li>• Cloud Computing & DevOps</li>
                      <li>• Machine Learning & AI</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Technologies I Love:</h5>
                    <p className="text-gray-600 mt-2">
                      React, Node.js, Python, TypeScript, AWS, Docker, PostgreSQL, 
                      and always exploring new frameworks and tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">My Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Beyond Coding</h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                When I'm not coding, you can find me exploring new technologies, 
                experimenting with different programming languages, or contributing to local tech communities. I believe 
                in maintaining a healthy work-life balance and drawing inspiration from diverse 
                experiences to fuel my creativity in problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;