
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Briefcase, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SubmittedData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  inquiryType: string;
  subject: string;
  message: string;
  newsletter: boolean;
  submittedAt: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    inquiryType: '',
    subject: '',
    message: '',
    newsletter: false,
    terms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message || !formData.inquiryType) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      // Create submitted data object
      const submitted: SubmittedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        inquiryType: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        newsletter: formData.newsletter,
        submittedAt: new Date().toLocaleString()
      };

      setSubmittedData(submitted);
      
      toast({
        title: "Form submitted successfully!",
        description: `Thank you ${formData.firstName}! Your message has been received.`,
      });
      
      setIsSubmitting(false);
      
      // Scroll to the submitted data section
      setTimeout(() => {
        const element = document.getElementById('submitted-data');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const handleNewSubmission = () => {
    setSubmittedData(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      inquiryType: '',
      subject: '',
      message: '',
      newsletter: false,
      terms: false
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Address",
      details: "thevamani28@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:thevamani28@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone Number",
      details: "01116242214",
      description: "Call me during business hours",
      link: "tel:01116242214"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      details: "PJ Area, Malaysia",
      description: "Available for local meetings",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Typical response time",
      link: "#"
    }
  ];

  const inquiryTypes = [
    { value: "job-opportunity", label: "Job Opportunity" },
    { value: "freelance-project", label: "Freelance Project" },
    { value: "collaboration", label: "Collaboration" },
    { value: "internship", label: "Internship Inquiry" },
    { value: "networking", label: "Networking" },
    { value: "mentorship", label: "Mentorship" },
    { value: "other", label: "Other" }
  ];

  const getInquiryTypeLabel = (value: string) => {
    const type = inquiryTypes.find(type => type.value === value);
    return type ? type.label : value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm actively seeking opportunities to start my career in technology. Whether you're a recruiter, 
              potential collaborator, or just want to connect, I'd love to hear from you!
            </p>
          </div>

          {/* Submitted Data Display */}
          {submittedData && (
            <div id="submitted-data" className="mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Form Submitted Successfully!</h2>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Submitted Information:</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name:</label>
                          <p className="text-gray-900 font-medium">{submittedData.firstName} {submittedData.lastName}</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address:</label>
                          <p className="text-gray-900">{submittedData.email}</p>
                        </div>
                        
                        {submittedData.phone && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
                            <p className="text-gray-900">{submittedData.phone}</p>
                          </div>
                        )}
                        
                        {submittedData.company && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company:</label>
                            <p className="text-gray-900">{submittedData.company}</p>
                          </div>
                        )}
                        
                        {submittedData.position && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Position:</label>
                            <p className="text-gray-900">{submittedData.position}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type:</label>
                          <p className="text-gray-900">{getInquiryTypeLabel(submittedData.inquiryType)}</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                          <p className="text-gray-900">{submittedData.subject}</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Newsletter Subscription:</label>
                          <p className="text-gray-900">{submittedData.newsletter ? 'Yes' : 'No'}</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Submitted At:</label>
                          <p className="text-gray-900 text-sm">{submittedData.submittedAt}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{submittedData.message}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button onClick={handleNewSubmission} className="bg-blue-600 hover:bg-blue-700">
                      Submit Another Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contact Form - Only show if no data has been submitted */}
          {!submittedData && (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-xl mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                    
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <a
                              href={info.link}
                              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
                            >
                              {info.details}
                            </a>
                            <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-xl mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Why Connect With Me?</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">Ready to start my career</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Strong team collaboration skills</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-600">Excellent communication</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-600">Quick learner and adaptable</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Status */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-gray-900">Available for Opportunities</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Actively seeking full-time positions and internships
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Smith"
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Contact Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john.smith@company.com"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="01116242214"
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Company Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company/Organization
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company Name"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Position
                          </label>
                          <Input
                            id="position"
                            name="position"
                            type="text"
                            value={formData.position}
                            onChange={handleInputChange}
                            placeholder="HR Manager, CTO, etc."
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          Type of Inquiry *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select the type of inquiry" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What would you like to discuss?"
                          className="w-full"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide details about your inquiry, including any specific requirements, timeline, or questions you might have..."
                          rows={6}
                          className="w-full resize-none"
                        />
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleCheckboxChange('newsletter', checked as boolean)}
                          />
                          <label htmlFor="newsletter" className="text-sm text-gray-600">
                            I'd like to receive updates about your projects and career milestones
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) => handleCheckboxChange('terms', checked as boolean)}
                          />
                          <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the terms and conditions and privacy policy *
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.terms}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree that I may contact you regarding your inquiry. 
                        I respect your privacy and will never share your information with third parties.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Additional Information - Always show */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Let's Build Something Amazing Together</h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  I'm passionate about technology and eager to contribute to innovative projects. 
                  Whether you're looking for a dedicated team member, a fresh perspective, or someone 
                  who brings enthusiasm and strong technical skills to your organization, I'd love to 
                  discuss how we can work together to achieve great things.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;