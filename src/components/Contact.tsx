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
  Sparkles,
  Award,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call or Text",
    details: ["+92 344 5271525", "+92 322 5072406"],
    link: "tel:+923445271525",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["photographybysufian@gmail.com"],
    link: "mailto:photographybysufian@gmail.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Studio Location",
    details: ["The Centaurus Mall", "Jinnah Avenue, F-8/4, Islamabad"],
    link: "https://maps.app.goo.gl/41BR4WVAgnj2Bx237",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Clock,
    title: "Availability",
    details: ["Available 24/7", "Appointments Anytime"],
    link: null,
    color: "from-purple-500 to-purple-600",
  },
];

const socialLinks = [
  {
    name: "@weddingsbysufian",
    icon: Instagram,
    url: "https://instagram.com/weddingsbysufian",
    bgColor: "from-pink-500 to-rose-500",
  },
  {
    name: "@photographybysufian",
    icon: Instagram,
    url: "https://instagram.com/photographybysufian",
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/weddingsbysufian",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/923445271525",
    bgColor: "from-green-500 to-green-600",
  },
];

const whyChooseUsPoints = [
  "8+ years of professional wedding photography",
  "Specialized in Pakistani & destination weddings",
  "Same-day teaser videos available",
  "Professional 4K equipment & drone coverage",
  "Flexible packages for every budget",
  "Lifetime online gallery access",
  "Coverage across Pakistan & internationally"
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call or email service
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfoCards = useMemo(() => {
    return contactInfo.map((info, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-rose-500/30 transition-all duration-500 group hover:scale-105"
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            aria-hidden
          >
            <info.icon className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white mb-3 text-lg">{info.title}</h4>
            {info.details.map((detail, detailIdx) => (
              <p key={detailIdx} className="text-gray-300 mb-1 leading-relaxed font-light">
                {info.link ? (
                  <a
                    href={info.link}
                    className="hover:text-rose-400 transition-colors duration-200 flex items-center gap-2 group/link"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
        <span className="font-medium">{social.name}</span>
      </a>
    ));
  }, []);

  const whyChooseUsContent = useMemo(() => {
    return whyChooseUsPoints.map((point, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
        <p className="text-gray-300 font-light">{point}</p>
      </div>
    ));
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-rose-500/10 border border-rose-500/30 rounded-full">
          <Sparkles className="w-4 h-4 text-rose-400" />
          <span className="text-rose-400 text-sm font-light tracking-wide">Let's Connect</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          Let's Capture Your Story
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Ready to book your photography session? Get in touch to discuss your vision,
          check availability, and create something beautiful together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-rose-500/30 transition-all duration-500">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-8 h-8 text-rose-400" />
            <h3 className="text-2xl font-bold text-white">Book Your Session</h3>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-light">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  aria-label="Full name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-light">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-label="Email address"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-light">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  aria-label="Phone number"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors duration-300"
                  placeholder="+92 3xx xxxxxxx"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-light">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  aria-label="Event type"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white focus:border-rose-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="mehndi">Mehndi Ceremony</option>
                  <option value="engagement">Engagement Session</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="family">Family Photography</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-light">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                aria-label="Preferred date"
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white focus:border-rose-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-light">Tell us about your vision</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                aria-label="Message"
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Describe your event, preferred style, location, number of guests, or any special requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Send inquiry"
              className="w-full bg-gradient-to-r from-rose-500 to-purple-500 text-white py-4 rounded-xl font-medium hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </form>

        {/* Contact Information & Social */}
        <div className="space-y-8">
          {/* Contact Info Cards */}
          <div className="grid gap-6">{contactInfoCards}</div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
            <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              Why Choose Us
            </h4>
            <div className="space-y-4">{whyChooseUsContent}</div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
            <h4 className="font-bold text-white mb-6 text-xl">Follow Our Journey</h4>
            <div className="space-y-3">{socialLinksGrid}</div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 font-light">
                Follow us to see our latest work, behind-the-scenes content, and real wedding features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-rose-900/20 via-purple-900/20 to-amber-900/20 backdrop-blur-sm border border-rose-500/30 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          For urgent bookings or last-minute photography needs, reach out directly.
          We're available 24/7 to discuss your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+923445271525"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Call now"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +92 344 5271525
          </a>
          <a
            href="https://wa.me/923445271525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="WhatsApp chat"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;