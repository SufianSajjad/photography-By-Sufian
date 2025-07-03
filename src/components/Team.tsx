import React, { useMemo } from "react";

const teamMembers = [
  {
    name: "Muhammad Abdullah",
    position: "Co-Founder & Blockchain Lead",
    image: "/images/team/Abdullah3.jpeg",
    bio: "Blockchain specialist focused on building secure, scalable Web3 solutions. Leads smart contract architecture and decentralized systems development.",
    skills: ["Solidity", "Smart Contracts", "Web3 Architecture"],
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Waleed Yaseen",
    position: "Co-Founder & AI Lead",
    image: "/images/team/Waleed.png",
    bio: "Generative AI enthusiast with deep expertise in deep learning and model optimization. Drives AI innovation across product lines.",
    skills: ["Generative AI", "Deep Learning", "Model Deployment"],
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Waleed Hassan",
    position: "Marketing Director",
    image: "/images/team/WaleedHassan.jpeg",
    bio: "Creative marketing strategist specializing in digital campaigns and brand growth. Expert in customer engagement.",
    skills: ["Digital Marketing", "Brand Strategy", "Content Creation"],
  },
  {
    name: "Dania Haider",
    position: "UI/UX & Brand Designer",
    image: "/images/team/dania.png",
    bio: "Creative designer specializing in user interfaces, brand identity, and visual storytelling. Passionate about crafting intuitive designs, logos, and marketing assets that align with brand vision.",
    skills: ["UI/UX Design", "Figma", "Branding"],
  },

  {
    name: "Hanzla Feroz",
    position: "Full Stack Developer",
    image: "/images/team/HanzlaFeroz.jpeg",
    bio: "Versatile developer with expertise in modern web technologies. Passionate about clean code and scalable solutions.",
    skills: ["React", "Node.js", "Cloud Architecture"],
  },
  {
    name: "Murtaza Kazmi",
    position: "Full Stack Developer",
    image: "/images/team/mutazakazmi.jpeg",
    bio: "Versatile developer with expertise in modern web technologies. Passionate about clean code and scalable solutions.",
    skills: ["React", "Node.js", "Cloud Architecture"],
  },
];

const Team = () => {
  // Memoize team member cards to prevent unnecessary re-renders
  const teamCards = useMemo(() => {
    return teamMembers.map((member, idx) => (
      <div
        key={idx}
        className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-colors duration-300"
      >
        {/* Card Content */}
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-green-400 transition-colors duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
        </div>
      </div>
    ));
  }, []);

  // Memoize section header to prevent re-renders
  const sectionHeader = useMemo(
    () => (
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The brilliant minds behind our success. Each bringing unique expertise
          and passion to drive innovation.
        </p>
      </div>
    ),
    []
  );

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.1),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.1),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {sectionHeader}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamCards}
        </div>
      </div>
    </section>
  );
};

export default Team;
