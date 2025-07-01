import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Blocks,
  Brain,
  Code2,
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Shield,
  Database,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

// Project modal component
const ProjectModal: React.FC<{
  project: any;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project Image */}
            {project.image && (
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Project Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technical Implementation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.technical.map((tech: any, index: number) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-400 mb-2">{tech.category}</h4>
                    <p className="text-gray-300 text-sm">{tech.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {project.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>


          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ProjectModal.displayName = 'ProjectModal';

// Project card component
const ProjectCard: React.FC<{
  project: any;
  index: number;
  onClick: (project: any) => void;
}> = ({ project, index, onClick }) => {
  const Icon = project.icon;

  const handleClick = () => {
    onClick(project);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-500 cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Image */}
      {project.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={project.backgroundImage}
            alt={`${project.title} background`}
            className="w-full h-full scale-[1.03] blur-[1.5px] brightness-50 opacity-40"
            loading="lazy"
            draggable={false}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10 rounded-2xl" />

      {/* Content */}
      <div className="relative z-20">
        {/* Icon */}
        <div className={`${project.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-300 leading-relaxed text-sm mb-4 line-clamp-3">
          {project.shortDesc}
        </p>

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-blue-600/20 border border-blue-600/30 rounded text-blue-300 text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-600/20 border border-gray-600/30 rounded text-gray-400 text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {project.year}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

ProjectCard.displayName = 'ProjectCard';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Advanced Blockchain System",
      category: "Distributed Systems & Cryptography",
      icon: Blocks,
      iconBg: "bg-gradient-to-br from-blue-600/60 to-cyan-400/40",
      shortDesc: "Sophisticated blockchain system in Go with Adaptive Merkle Forest, Byzantine fault tolerance, and dynamic optimization for enterprise-grade distributed systems.",
      description: "A cutting-edge blockchain implementation that pushes the boundaries of distributed systems design. Features advanced state verification, dynamic optimization, and Byzantine fault tolerance without relying on traditional smart contract query mechanisms.",
      backgroundImage: "/images/background/blockchain.jpg",
      features: [
        "Adaptive Merkle Forest with self-adaptive sharding",
        "Probabilistic verification mechanisms",
        "Cross-shard state synchronization",
        "Multi-layer adversarial defense",
        "Hybrid consensus protocol",
        "Advanced cryptographic primitives"
      ],
      technical: [
        {
          category: "Core Architecture",
          details: "Hierarchical dynamic sharding with automatic load balancing and cryptographic integrity maintenance during restructuring."
        },
        {
          category: "Consensus Mechanism", 
          details: "Novel hybrid protocol combining PoW randomness injection with dBFT principles for enhanced security."
        },
        {
          category: "Cryptographic Innovation",
          details: "Zero-knowledge proofs, verifiable random functions, and multi-party computation protocols for distributed trust."
        },
        {
          category: "Fault Tolerance",
          details: "Multi-layered Byzantine fault tolerance with reputation-based node scoring and adaptive consensus thresholds."
        }
      ],
      technologies: ["Go", "Cryptography", "Blockchain", "Distributed Systems", "Byzantine Consensus", "Zero-Knowledge Proofs", "Merkle Trees"],
      year: "2024",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "< 2s", label: "Block Time" },
        { value: "1000+", label: "TPS" },
        { value: "0", label: "Security Breaches" }
      ],
      githubUrl: "#",
      demoUrl: null
    },
    {
      id: 2,
      title: "StoryGenerator LLama3.2",
      category: "AI & Machine Learning",
      icon: Brain,
      iconBg: "bg-gradient-to-br from-purple-600/60 to-pink-400/40",
      shortDesc: "Fine-tuned LLama 3.2 1B model for creative story generation with advanced data engineering and specialized training pipelines.",
      description: "A sophisticated AI story generation system built on fine-tuned LLama 3.2 1B model. Features advanced data engineering pipelines, custom training procedures, and optimized inference for creative writing applications.",
      backgroundImage: "/images/background/aiMachineLearning.jpg",
      features: [
        "Custom fine-tuning on creative writing datasets",
        "Advanced data preprocessing pipelines",
        "Optimized inference for real-time generation",
        "Multi-genre story generation capabilities",
        "Context-aware narrative continuation",
        "Hugging Face model hub integration"
      ],
      technical: [
        {
          category: "Model Architecture",
          details: "Fine-tuned LLama 3.2 1B with custom tokenization and specialized attention mechanisms for creative text generation."
        },
        {
          category: "Data Engineering",
          details: "Comprehensive data preprocessing pipeline with quality filtering, deduplication, and genre-specific dataset curation."
        },
        {
          category: "Training Pipeline",
          details: "Custom training procedures with gradient accumulation, learning rate scheduling, and convergence optimization."
        },
        {
          category: "Deployment",
          details: "Optimized inference pipeline with batching, caching, and real-time generation capabilities through Hugging Face integration."
        }
      ],
      technologies: ["Python", "PyTorch", "Transformers", "LLama 3.2", "Hugging Face", "Data Engineering", "MLOps"],
      year: "2024",
      stats: [
        { value: "1.24B", label: "Parameters" },
        { value: "20+", label: "Downloads/Month" },
        { value: "95%", label: "Quality Score" },
        { value: "F16", label: "Precision" }
      ],
      githubUrl: "#",
      demoUrl: "https://huggingface.co/wy2001/storygenratorllama3.21b"
    },
    {
      id: 3,
      title: "VerseCraft Workspace",
      category: "Full-Stack Development",
      icon: Code2,
      iconBg: "bg-gradient-to-br from-green-600/60 to-emerald-400/40",
      shortDesc: "Advanced real-time collaborative workspace built with MERN stack, featuring integrated AI models, live editing, and seamless team collaboration.",
      description: "A sophisticated real-time collaborative workspace that revolutionizes team productivity. Built with modern MERN stack and integrated AI capabilities for enhanced creative workflows and seamless collaboration.",
      backgroundImage: "/images/background/fullStack.jpg",
      features: [
        "Real-time collaborative editing",
        "Integrated AI assistance models",
        "Live cursor tracking and user presence",
        "Advanced document management",
        "Real-time chat and communication",
        "Version control and history tracking"
      ],
      technical: [
        {
          category: "Frontend Architecture",
          details: "React with TypeScript, Redux Toolkit for state management, Socket.io for real-time communication, and advanced UI components."
        },
        {
          category: "Backend Systems",
          details: "Node.js with Express, MongoDB with optimized schemas, Redis for caching, and WebSocket implementation for real-time features."
        },
        {
          category: "AI Integration",
          details: "Custom AI model integration for content assistance, automated suggestions, and intelligent workflow optimization."
        },
        {
          category: "Real-time Features",
          details: "WebSocket-based real-time collaboration, operational transforms for conflict resolution, and optimized data synchronization."
        }
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Socket.io", "Redis", "AI Integration"],
      year: "2024",
      stats: [
        { value: "< 50ms", label: "Latency" },
        { value: "100+", label: "Concurrent Users" },
        { value: "99.9%", label: "Uptime" },
        { value: "Real-time", label: "Sync Speed" }
      ],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  // Event handlers
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.05),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Past Projects
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcase of innovative projects spanning blockchain technology, AI/ML systems, 
            and full-stack applications that demonstrate technical excellence and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';

export default Projects; 
