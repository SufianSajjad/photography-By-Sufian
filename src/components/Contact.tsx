import React, { useState, useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  Camera,
  Send,
  User,
  Calendar,
  Heart,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 322 7287185", "+92 305 5903637"],
    link: "tel:+923227287185",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@photographystudio.pk"],
    link: "mailto:info@photographystudio.pk",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Studio",
    details: ["MM Alam Road, Gulberg", "Lahore, Punjab"],
    link: "https://maps.google.com/?q=MM+Alam+Road+Gulberg+Lahore",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Clock,
    title: "Studio Hours",
    details: ["Mon - Sat: 9AM - 8PM", "Sun: By Appointment"],
    link: null,
    color: "from-green-500 to-green-600",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/photographystudio_pk",
    bgColor: "from-pink-500 to-purple-600",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/photographystudiopk",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/923227287185",
    bgColor: "from-green-500 to-green-600",
  },
];

const whyChooseUsPoints = [
  "5+ years of professional photography experience",
  "Specialized in Pakistani wedding traditions",
  "Same-day photo editing and delivery available",
  "Professional equipment including drone photography",
  "Customizable packages for every budget",
  "Lifetime online gallery access",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 2000);
  };

  // Memoize contact info cards
  const contactInfoCards = useMemo(() => {
    return contactInfo.map((info, idx) => (
      <div
        key={idx}
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group"
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <info.icon className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white mb-3 text-lg">
              {info.title}
            </h4>
            {info.details.map((detail, detailIdx) => (
              <p
                key={detailIdx}
                className="text-gray-300 mb-1 leading-relaxed"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group/link"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {detail}
                    {info.link.startsWith("http") && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                ) : (
                  detail
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    ));
  }, []);

  // Memoize social links
  const socialLinksGrid = useMemo(() => {
    return socialLinks.map((social, idx) => (
      <a
        key={idx}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 p-4 bg-gradient-to-r ${social.bgColor} rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        title={`Follow us on ${social.name}`}
      >
        <social.icon className="w-5 h-5" />
        <span className="font-semibold">{social.name}</span>
      </a>
    ));
  }, []);

  // Memoize why choose us points
  const whyChooseUsContent = useMemo(() => {
    return whyChooseUsPoints.map((point, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-gray-300">{point}</p>
      </div>
    ));
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
          Let's Capture Your Story
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready to book your photography session? Get in touch with us to discuss your vision, 
          check availability, and create something beautiful together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Book Your Session</h3>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="+92 3xx xxxxxxx"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                //  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="engagement">Engagement Session</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="family">Family Photography</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Tell us about your vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Describe your event, preferred style, location, number of guests, or any special requirements..."
              />
            </div>

            <button
           //   onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
            </div>
        </div>

        {/* Contact Information & Social */}
        <div className="space-y-8">
          {/* Contact Info Cards */}
          <div className="grid gap-6">
            {contactInfoCards}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-2">
              <Camera className="w-6 h-6 text-yellow-400" />
              Why Choose Us
            </h4>
            <div className="space-y-4">{whyChooseUsContent}</div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-6 text-xl">
              Follow Our Work
            </h4>
            <div className="space-y-3">{socialLinksGrid}</div>
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <p className="text-sm text-gray-400">
                Follow us to see our latest work, behind-the-scenes content, and client features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          For urgent bookings or last-minute photography needs, call us directly. 
          We're available 24/7 for emergency and same-day sessions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+923227287185"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
          <a
            href="https://wa.me/923227287185"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;