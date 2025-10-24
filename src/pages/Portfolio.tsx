
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack Web Application",
      description: "A comprehensive e-commerce platform built as a capstone project. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Implemented responsive design and optimized for performance.",
      longDescription: "This project was developed as part of my Software Engineering course. It demonstrates my ability to work with complex database relationships, implement secure authentication, and create intuitive user interfaces. The platform supports multiple user roles and includes advanced features like inventory management and sales analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      tools: ["VS Code", "Postman", "MongoDB Compass", "Git", "Heroku"],
      liveUrl: "https://ecommerce-demo.herokuapp.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      duration: "4 months",
      teamSize: "Solo Project",
      status: "Completed",
      highlights: [
        "Implemented secure payment processing with Stripe",
        "Built responsive design supporting mobile and desktop",
        "Achieved 95% test coverage with Jest and React Testing Library",
        "Deployed with CI/CD pipeline using GitHub Actions"
      ]
    },
    {
      id: 2,
      title: "Task Management System",
      category: "Web Application",
      description: "A collaborative task management application with real-time updates, team workspaces, and project tracking. Built with React and Firebase, featuring drag-and-drop functionality and real-time collaboration.",
      longDescription: "Developed during my internship at TechStart Solutions, this application helps teams organize and track their projects efficiently. The real-time features were implemented using Firebase Firestore, and the interface includes advanced drag-and-drop capabilities for intuitive task management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "JavaScript", "CSS3"],
      tools: ["VS Code", "Firebase Console", "Figma", "Git"],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrl: "https://github.com/johndoe/task-management",
      duration: "2 months",
      teamSize: "2 developers",
      status: "Completed",
      highlights: [
        "Real-time collaboration with multiple users",
        "Drag-and-drop interface for task organization",
        "Team workspace management and permissions",
        "Mobile-responsive design with PWA features"
      ]
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      category: "Data Visualization",
      description: "An interactive weather dashboard that displays current conditions, forecasts, and historical data with beautiful visualizations. Integrates with OpenWeatherMap API and includes location-based services.",
      longDescription: "This project showcases my skills in data visualization and API integration. The dashboard provides comprehensive weather information with interactive charts and maps. I focused on creating an intuitive user experience while handling large datasets efficiently.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "D3.js", "OpenWeather API", "Tailwind CSS"],
      tools: ["VS Code", "Postman", "Git", "Netlify"],
      liveUrl: "https://weather-analytics-jd.netlify.app",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      duration: "3 weeks",
      teamSize: "Solo Project",
      status: "Completed",
      highlights: [
        "Interactive charts showing weather trends",
        "Location-based weather predictions",
        "Historical data analysis and visualization",
        "Responsive design with dark/light mode toggle"
      ]
    },
    {
      id: 4,
      title: "Student Grade Management System",
      category: "Desktop Application",
      description: "A Java-based desktop application for managing student grades and academic records. Features include grade calculation, report generation, and data export functionality.",
      longDescription: "Built as part of my Object-Oriented Programming course, this application demonstrates my understanding of Java programming principles, database design, and user interface development. The system includes comprehensive grade tracking and reporting features.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      technologies: ["Java", "JavaFX", "SQLite", "JUnit"],
      tools: ["IntelliJ IDEA", "Scene Builder", "Git"],
      liveUrl: null,
      githubUrl: "https://github.com/johndoe/grade-management-system",
      duration: "6 weeks",
      teamSize: "3 developers",
      status: "Completed",
      highlights: [
        "Comprehensive grade calculation algorithms",
        "PDF report generation functionality",
        "Data import/export capabilities",
        "User-friendly JavaFX interface"
      ]
    },
    {
      id: 5,
      title: "Machine Learning Price Predictor",
      category: "Data Science Project",
      description: "A machine learning model that predicts house prices based on various features. Includes data preprocessing, model training, and a web interface for predictions.",
      longDescription: "This project was developed for my Machine Learning course, demonstrating my ability to work with real-world datasets, implement various ML algorithms, and create practical applications. The model achieves high accuracy in price predictions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "Matplotlib"],
      tools: ["Jupyter Notebook", "VS Code", "Git"],
      liveUrl: "https://house-price-predictor-jd.herokuapp.com",
      githubUrl: "https://github.com/johndoe/ml-price-predictor",
      duration: "5 weeks",
      teamSize: "Solo Project",
      status: "Completed",
      highlights: [
        "Achieved 92% accuracy in price predictions",
        "Comprehensive data preprocessing pipeline",
        "Interactive web interface for predictions",
        "Detailed analysis and visualization of results"
      ]
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      category: "Web Development",
      description: "A responsive portfolio website showcasing my projects, skills, and experience. Built with modern web technologies and optimized for performance and SEO.",
      longDescription: "This portfolio website serves as a comprehensive showcase of my work and skills. It features a modern design, smooth animations, and is fully responsive across all devices. The site is optimized for search engines and accessibility.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      tools: ["VS Code", "Figma", "Git", "Vercel"],
      liveUrl: "https://johndoe-portfolio.vercel.app",
      githubUrl: "https://github.com/johndoe/portfolio-website",
      duration: "2 weeks",
      teamSize: "Solo Project",
      status: "Ongoing",
      highlights: [
        "Fully responsive design with modern UI/UX",
        "SEO optimized with meta tags and structured data",
        "Smooth animations and transitions",
        "Contact form with email integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio & Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my academic and personal projects demonstrating my technical skills, 
              creativity, and problem-solving abilities across various domains.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies Used</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Hours of Coding</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-gray-600">Team Projects</div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`border-0 shadow-xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-blue-600 text-white mb-2">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-white text-sm space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {project.teamSize}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className={project.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'}
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <h5 className="font-medium text-gray-700 mb-2">Tools:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Interested in My Work?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  I'm always working on new projects and learning new technologies. 
                  Check out my GitHub for the latest updates, or get in touch to discuss potential collaborations.
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View All Projects
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#contact">
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;