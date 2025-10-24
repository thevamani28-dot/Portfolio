
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with great user experience."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Hello! I'm John, a passionate developer based in San Francisco.
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a full-stack developer with over 5 years of experience building web applications. 
                  I specialize in React, Node.js, and modern JavaScript technologies.
                </p>
                <p>
                  My journey in web development started during college, and since then, I've worked 
                  with startups and established companies to create digital solutions that make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying outdoor activities like hiking and photography.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;