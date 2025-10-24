
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Palette, Users, Lightbulb, Award, BookOpen, Trophy, Star } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      skills: [
        { name: "Python", level: 90, experience: "3 years" },
        { name: "JavaScript", level: 85, experience: "2.5 years" },
        { name: "TypeScript", level: 80, experience: "1.5 years" },
        { name: "Java", level: 85, experience: "2 years" },
        { name: "C++", level: 75, experience: "2 years" },
        { name: "SQL", level: 80, experience: "2 years" },
        { name: "HTML/CSS", level: 95, experience: "3 years" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6 text-green-600" />,
      skills: [
        { name: "React", level: 90, experience: "2 years" },
        { name: "Node.js", level: 85, experience: "2 years" },
        { name: "Express.js", level: 80, experience: "1.5 years" },
        { name: "Django", level: 75, experience: "1 year" },
        { name: "Flask", level: 70, experience: "1 year" },
        { name: "Bootstrap", level: 85, experience: "2 years" },
        { name: "Tailwind CSS", level: 90, experience: "1.5 years" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Cloud className="h-6 w-6 text-purple-600" />,
      skills: [
        { name: "Git/GitHub", level: 90, experience: "3 years" },
        { name: "Docker", level: 70, experience: "1 year" },
        { name: "AWS", level: 75, experience: "1 year" },
        { name: "MongoDB", level: 80, experience: "1.5 years" },
        { name: "PostgreSQL", level: 75, experience: "1.5 years" },
        { name: "Linux", level: 80, experience: "2 years" },
        { name: "Firebase", level: 85, experience: "1.5 years" }
      ]
    },
    {
      category: "Design & UI/UX",
      icon: <Palette className="h-6 w-6 text-pink-600" />,
      skills: [
        { name: "Figma", level: 80, experience: "1.5 years" },
        { name: "Adobe Photoshop", level: 70, experience: "2 years" },
        { name: "Responsive Design", level: 90, experience: "2.5 years" },
        { name: "User Experience Design", level: 75, experience: "1.5 years" },
        { name: "Wireframing", level: 80, experience: "1.5 years" }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      description: "Strong analytical thinking and ability to break down complex problems into manageable solutions.",
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      level: 95
    },
    {
      name: "Team Collaboration",
      description: "Excellent teamwork skills with experience in agile development and cross-functional teams.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      level: 90
    },
    {
      name: "Communication",
      description: "Clear written and verbal communication skills, with experience in technical documentation.",
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      level: 85
    },
    {
      name: "Leadership",
      description: "Experience leading project teams and mentoring fellow students in programming concepts.",
      icon: <Star className="h-8 w-8 text-purple-600" />,
      level: 80
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-CCP-12345",
      description: "Foundational understanding of AWS cloud services and architecture.",
      badge: "🏅"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "February 2023",
      credentialId: "GA-CERT-67890",
      description: "Proficiency in Google Analytics for web traffic analysis and reporting.",
      badge: "📊"
    },
    {
      title: "freeCodeCamp Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "January 2022",
      credentialId: "FCC-RWD-54321",
      description: "Comprehensive training in HTML, CSS, and responsive web design principles.",
      badge: "💻"
    },
    {
      title: "Machine Learning Course Certificate",
      issuer: "Coursera (Stanford University)",
      date: "December 2023",
      credentialId: "COURSERA-ML-11111",
      description: "Completed Andrew Ng's Machine Learning course with hands-on projects.",
      badge: "🤖"
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition",
      description: "Achieved Dean's List status for Fall 2022 and Spring 2023 semesters with GPA above 3.7",
      date: "2022-2023",
      icon: <Trophy className="h-6 w-6 text-yellow-600" />
    },
    {
      title: "Hackathon Winner - Cal Hacks 9.0",
      description: "First place winner in the 'Best Use of Technology for Social Good' category",
      date: "October 2022",
      icon: <Award className="h-6 w-6 text-blue-600" />
    },
    {
      title: "UC Berkeley Merit Scholarship",
      description: "Recipient of merit-based scholarship for academic excellence",
      date: "2020-2024",
      icon: <Star className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Best Project Award - CS 61B",
      description: "Recognized for outstanding final project in Data Structures course",
      date: "Spring 2022",
      icon: <Code className="h-6 w-6 text-green-600" />
    },
    {
      title: "Teaching Assistant of the Semester",
      description: "Selected as outstanding TA for CS 61A based on student evaluations",
      date: "Fall 2023",
      icon: <BookOpen className="h-6 w-6 text-red-600" />
    }
  ];

  const workshops = [
    "Advanced React Patterns Workshop - Meta (2023)",
    "Cloud Architecture Fundamentals - AWS (2023)",
    "Machine Learning in Production - Google (2023)",
    "Agile Development Methodologies - UC Berkeley (2022)",
    "Technical Interview Preparation - LeetCode (2023)",
    "Open Source Contribution Workshop - GitHub (2022)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Achievements
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise, soft skills, certifications, 
              and academic achievements that demonstrate my commitment to continuous learning and excellence.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Technical Skills</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {technicalSkills.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {category.icon}
                      <h3 className="text-xl font-bold ml-3 text-gray-900">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">{skill.experience}</span>
                              <span className="text-sm text-gray-600">{skill.level}%</span>
                            </div>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Soft Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{skill.name}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{skill.description}</p>
                        <div className="flex items-center space-x-3">
                          <Progress value={skill.level} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{cert.badge}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 mb-3">
                          Issued: {cert.date} | ID: {cert.credentialId}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Awards & Recognition</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                          </div>
                          <Badge variant="secondary" className="ml-4">
                            {achievement.date}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Workshops & Training */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Workshops & Professional Development</h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {workshops.map((workshop, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{workshop}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Summary */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Continuous Learning Journey</h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                I believe in the importance of continuous learning and staying updated with the latest 
                technologies and industry trends. My diverse skill set, combined with my academic 
                achievements and practical experience, positions me well for contributing to innovative 
                projects and growing within a dynamic tech environment.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div>Programming Languages & Frameworks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div>Professional Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div>Academic Awards</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;