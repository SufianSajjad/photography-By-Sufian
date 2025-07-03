import React, { useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
  ExternalLink,
  Users,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 3227287185", "+92 305 5903637"],
    // link: "tel:+923211234567",
    color: "from-slate-600 to-slate-700",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["techversa.io@gmail.com"],
    link: "mailto:techversa.io@gmail.com",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Bahria Town, Lahore", "Punjab, Pakistan"],
    link: "https://maps.google.com/?q=Bahria+Town+Lahore",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 24/7"],
    link: null,
    color: "from-emerald-600 to-emerald-700",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/techversa-io/",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/TechVersaio",
    bgColor: "from-slate-600 to-slate-700",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61578146303107",
    bgColor: "from-blue-700 to-blue-800",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/techversa",
    bgColor: "from-gray-600 to-gray-700",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/923227287185",
    bgColor: "from-green-600 to-green-700",
  },
];

const whyChooseUsPoints = [
  "Expert team with 3+ years of experience",
  "24/7 customer support and maintenance",
  "Proven track record with 15+ projects",
  "Tailored solutions for your business needs",
];

const Contact = () => {
  // Memoize contact info cards
  const contactInfoCards = useMemo(() => {
    return contactInfo.map((info, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white shadow-sm`}
          >
            <info.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
              {info.title}
            </h4>
            {info.details.map((detail, detailIdx) => (
              <p
                key={detailIdx}
                className="text-gray-600 dark:text-gray-400 mb-1 leading-relaxed"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group/link"
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
        className={`group flex items-center gap-2 p-3 bg-gradient-to-r ${social.bgColor} rounded-lg text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105`}
        title={`Follow us on ${social.name}`}
      >
        <social.icon className="w-4 h-4" />
        <span className="font-medium text-sm">{social.name}</span>
      </a>
    ));
  }, []);

  // Memoize why choose us points
  const whyChooseUsContent = useMemo(() => {
    return whyChooseUsPoints.map((point, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{point}</p>
      </div>
    ));
  }, []);

  // Memoize section header
  const sectionHeader = useMemo(
    () => (
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We're here to help you achieve your business objectives. Contact our
          team of experts to discuss your project requirements and explore how
          we can add value to your organization.
        </p>
      </div>
    ),
    []
  );

  // Memoize Google Maps iframe
  const googleMapsSection = useMemo(
    () => (
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Our Location
          </h4>
        </div>
        <iframe
          title="TechVersa Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.073232063873!2d74.217932!3d31.400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b2b2b2b2b2%3A0x1234567890abcdef!2sBahria%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    ),
    []
  );

  // Memoize CTA section
  const ctaSection = useMemo(
    () => (
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 border border-gray-200 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your requirements
            and receive a customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@techversa.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
            <a
              href="tel:+923211234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {sectionHeader}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">{contactInfoCards}</div>

            {/* Google Maps */}
            {googleMapsSection}
          </div>

          {/* Professional Info & Social Links */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Why Choose Us
                </h4>
              </div>
              <div className="space-y-3">{whyChooseUsContent}</div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                Connect With Us
              </h4>
              <div className="grid grid-cols-2 gap-3">{socialLinksGrid}</div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Follow us for updates on technology trends, company news, and
                  industry insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        {ctaSection}
      </div>
    </section>
  );
};

export default Contact;
