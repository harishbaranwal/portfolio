
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'harishbaranwal2005@gmail.com',
      link: 'mailto:harishbaranwal2005@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+91 87078 425353',
      link: 'tel:+918707842353'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Varanasi, Uttar Pradesh, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="bg-secondary/50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-navy-600 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-navy-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Availability</h4>
              <p className="text-navy-600 mb-4">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs attention or are looking for a developer
                to join your team, I'd love to hear from you!
              </p>
              <p className="text-navy-600">
                Response time: <span className="font-semibold text-primary">Within 24 hours</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-navy-700 font-medium">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Last"
                    required
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-navy-700 font-medium">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-navy-700 font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-navy-700 font-medium">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="min-h-[150px] bg-background"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
