import React, { useState } from "react";

const teamMembers = [
  {
    name: "Muhammad Abdullah",
    position: "Founder",
    image: "/images/team/Abdullah.jpeg",
    bio: "Visionary leader with 10+ years in tech innovation. Passionate about building solutions that transform businesses.",
    skills: ["Strategic Planning", "Business Development", "Team Leadership"],
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Waleed Yaseen",
    position: "Founder",
    image: "/images/team/Waleed.png",
    bio: "Machine learning expert with expertise in deep learning and natural language processing. Published researcher.",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Sara Khan",
    position: "Marketing Director",
    image: "/images/team/Abdullah.jpeg",
    bio: "Creative marketing strategist specializing in digital campaigns and brand growth. Expert in customer engagement.",
    skills: ["Digital Marketing", "Brand Strategy", "Content Creation"],
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Zainab Malik",
    position: "Product Designer",
    image: "/images/team/Abdullah.jpeg",
    bio: "UX/UI designer focused on creating intuitive and beautiful user experiences. Award-winning design portfolio.",
    skills: ["UI/UX Design", "Figma", "User Research"],
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Abdullah",
    position: "Full Stack Developer",
    image: "/images/team/Abdullah.jpeg",
    bio: "Versatile developer with expertise in modern web technologies. Passionate about clean code and scalable solutions.",
    skills: ["React", "Node.js", "Cloud Architecture"],
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-[#050C12] via-[#0A1520] to-[#050C12] text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.1),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.1),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-green-400 uppercase tracking-wider font-medium">
              Our Experts
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The brilliant minds behind our success. Each bringing unique
            expertise and passion to drive innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex  justify-center">
          {" "}
          {teamMembers.slice(0, 2).map((member, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === idx
                  ? "scale-105 shadow-2xl shadow-green-400/20"
                  : ""
              }`}
              //   onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-green-400 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-green-400 mb-2 uppercase tracking-wider">
                    {member.position}
                  </p>
                  <p className="text-md text-gray-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-gray-800/60 border border-gray-600/50 rounded-full text-sm text-gray-300 group-hover:border-green-400/50 group-hover:text-green-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-blue-400 hover:border-blue-400 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.name
                      .toLowerCase()
                      .replace(" ", ".")}@company.com`}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(2).map((member, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === idx
                  ? "scale-105 shadow-2xl shadow-green-400/20"
                  : ""
              }`}
              //   onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-green-400 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-green-400 mb-2 uppercase tracking-wider">
                    {member.position}
                  </p>
                  <p className="text-md text-gray-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-gray-800/60 border border-gray-600/50 rounded-full text-sm text-gray-300 group-hover:border-green-400/50 group-hover:text-green-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-blue-400 hover:border-blue-400 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.name
                      .toLowerCase()
                      .replace(" ", ".")}@company.com`}
                    className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-colors duration-300 group/link"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover/link:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>Join Our Team</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-green-400 rounded-full text-white font-semibold hover:bg-green-400/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
