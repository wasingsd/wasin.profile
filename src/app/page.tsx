"use client";

import React from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Layout,
  Globe,
  Database,
  Monitor,
  Code2,
  Cpu,
  Users,
  TrendingUp,
  Workflow,
  Settings,
  ShieldCheck,
  Zap,
  Briefcase,
  MapPin,
  Phone,
  Menu,
  X,
  Brain,
  Truck,
  Music,
  Video,
  Package,
  FileText,
  ExternalLink,
  Rocket
} from 'lucide-react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "SRTA Digital Asset Management",
      category: "Government & Enterprise",
      description: "Leading the development of a digital asset system for SRT Asset (State Railway of Thailand) to optimize asset management and operational efficiency.",
      tags: ["Digital Transformation", "Asset Management", "Enterprise"],
      size: "large",
      icon: <ShieldCheck className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Miss Grand International (MGI)",
      category: "System Design & Architecture",
      description: "Responsible for System UX/UI Design and System Flow Architecture for the Pre-development phase of the MGI project.",
      tags: ["UX/UI Architecture", "System Flow", "Entertainment"],
      size: "medium",
      icon: <Zap className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop"
    },
    {
      title: "ZWAPMONEY US",
      category: "Chiang Mai Startup",
      description: "Co-founded Sneaker Marketplace in the US. Designed the entire Business Plan and Product Prototype.",
      tags: ["Business Plan", "Product Prototype", "Marketplace"],
      size: "medium",
      icon: <Globe className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Fizzy Marketplace",
      category: "Niche Marketplace",
      description: "Managing functional requirements for a niche marketplace, aligning business goals with technical execution.",
      tags: ["Requirements Management", "Functional Design", "Niche Market"],
      size: "medium",
      icon: <TrendingUp className="text-zinc-400" size={20} />,
      image: "/wasin.profile/fizzyimage.jpg"
    },
    {
      title: "Moonblues Co., Ltd.",
      category: "Business Development",
      description: "Focused on Business Development, quarterly growth planning, and marketing strategy to drive company expansion.",
      tags: ["Business Strategy", "Growth Planning", "Marketing"],
      size: "medium",
      icon: <Briefcase className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const expertise = [
    { name: "Project Management (Agile)", icon: <Workflow size={18} /> },
    { name: "System Flow Design", icon: <Database size={18} /> },
    { name: "UX/UI Prototyping", icon: <Layout size={18} /> },
    { name: "Business Intelligence", icon: <TrendingUp size={18} /> },
    { name: "Enterprise Software", icon: <Settings size={18} /> },
    { name: "Team Leadership", icon: <Users size={18} /> },
    { name: "AI & LLM Integration", icon: <Cpu size={18} /> },
    { name: "Firebase & Cloud Architecture", icon: <Database size={18} /> },
    { name: "LINE Platform (LIFF)", icon: <Monitor size={18} /> },
  ];

  const personalProjects = [
    {
      title: "Panya",
      category: "AI SaaS Platform",
      description: "AI Shop Brain for local restaurants & shops in Chiang Mai — 4 Brain Modules: Sales, Content, Chat, Insight. Empowering solo owners to operate like a full team.",
      tech: ["Next.js 15", "tRPC", "Firebase", "Zustand", "Gemini AI"],
      icon: <Brain className="text-zinc-400" size={20} />,
      status: "In Development"
    },
    {
      title: "POS Delivery System",
      category: "Full-stack Application",
      description: "End-to-end POS + Delivery system for restaurants — LINE LIFF login, Google Maps, Gemini AI Chatbot, Rider Dispatch with 13 Module Specs.",
      tech: ["Next.js 15", "LINE LIFF", "Firebase", "Gemini AI", "Playwright"],
      icon: <Truck className="text-zinc-400" size={20} />,
      status: "Active"
    },
    {
      title: "AI Emotional Audio",
      category: "LINE-first Platform",
      description: "Subscription platform — users express emotions via text, AI generates personalized voice notes & micro-songs. Blends Astrology, Psychology & AI Voice.",
      tech: ["Monorepo", "Firebase", "LINE LIFF", "AI Voice", "TTS"],
      icon: <Music className="text-zinc-400" size={20} />,
      status: "Planning"
    },
    {
      title: "Affiliate Video Agent",
      category: "AI Automation",
      description: "AI Agent for automated video content creation — leverages Knowledge Base + AI Profiles to generate affiliate videos with Docker deployment.",
      tech: ["Next.js", "Firebase", "Docker", "Cloud Functions", "Gemini AI"],
      icon: <Video className="text-zinc-400" size={20} />,
      status: "In Development"
    },
    {
      title: "Commission Cargo",
      category: "Business Tool",
      description: "Commission calculation system for cargo & logistics — Rate Versioning, CSV Import/Export, Audit Log, and Role-Based Access Control.",
      tech: ["Next.js 14", "Prisma", "PostgreSQL", "NextAuth"],
      icon: <Package className="text-zinc-400" size={20} />,
      link: "https://github.com/wasingsd/commission-cargo",
      status: "In Development"
    },
    {
      title: "MBS System",
      category: "Data Platform",
      description: "Book management & reading log platform built with Firebase Data Connect — featuring book lists, reviews, and social reading features.",
      tech: ["Next.js", "Firebase Data Connect", "React Query", "Vercel"],
      icon: <Database className="text-zinc-400" size={20} />,
      status: "In Development"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] selection:bg-zinc-800 selection:text-white font-sans relative overflow-x-hidden">

      {/* Background Layer 1: Grid System */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Background Layer 2: Radial Spotlight */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.8),transparent_100%)]"></div>



      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-xl transition-colors ${isMobileMenuOpen ? 'bg-black' : 'bg-black/60'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-none z-50 relative">
            <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default text-white">
              WASIN.G
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-medium">Project Manager</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="#side-projects" className="hover:text-white transition-colors">Side Projects</a>
            <a href="#contact" className="hover:text-white transition-colors text-xs uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed top-16 left-0 right-0 z-40 flex flex-col items-center bg-black border-b border-white/10 py-10 md:hidden shadow-2xl">
              <div className="flex flex-col gap-8 text-2xl text-zinc-400 items-center font-bold">
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#work"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#side-projects"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Side Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white transition-colors text-xl uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Connect
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section id="about" className="mb-20 md:mb-40">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Based in Chiang Mai, Thailand
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white whitespace-nowrap">
                Wasin Garnsomdee <span className="text-zinc-500 italic text-2xl sm:text-3xl md:text-5xl">(Sua)</span>
              </h1>
              <h2 className="text-2xl md:text-1xl text-zinc-300 mb-8 font-medium">
                <span className="text-white opacity-70"> "Connecting</span>
                <span className="text-white"> Business Strategy</span> <span className="text-white opacity-70">and</span> <span className="text-white">Technical Implementation"</span>.
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl font-medium">
                With over 3 years of experience in the tech industry, I aim to simplify complex business requirements into seamless system flows and user-friendly designs. I have had the opportunity to contribute to high-traffic platforms and state enterprise projects, assisting them in their digital transformation journey. I believe in using data-driven strategies to help businesses scale sustainably.
              </p>

              <div className="flex flex-wrap gap-4">
                {expertise.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-wide md:tracking-widest px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:border-white/40 transition-colors backdrop-blur-sm font-semibold whitespace-normal text-center">
                    {skill.icon} <span className="text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image Slot */}
            <div className="flex justify-center lg:block relative group mt-8 lg:mt-0">
              <div className="w-64 h-80 bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                <img
                  src="/wasin.profile/wasinpf.jpg"
                  alt="Wasin Profile"
                  className="w-full h-full object-cover grayscale-0 opacity-100 lg:grayscale lg:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-zinc-800 rounded-bl-3xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-zinc-800 rounded-tr-3xl"></div>
            </div>
          </div>
        </section>

        {/* Work Section (Bento Grid) */}
        <section id="work" className="mb-20 md:mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-8 bg-zinc-700"></div>
                <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 font-bold">Selected Works</h2>
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-white">Project Highlights</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/80 backdrop-blur-md flex flex-col hover:border-white/20 transition-all duration-500 shadow-xl
                  ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                `}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                        {project.icon}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-300 py-1 px-3 border border-zinc-800 rounded-full backdrop-blur-sm font-bold">
                        {project.category}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h3 className={`font-bold mb-4 tracking-tight leading-none text-white transition-colors 
                        ${project.size === 'large' ? 'text-2xl md:text-5xl' : 'text-2xl'}`}>
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-sm group-hover:text-white transition-colors font-medium">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[9px] px-2 py-1 rounded border border-white/5 bg-white/5 text-zinc-400 uppercase font-bold tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal / Side Projects Section */}
        <section id="side-projects" className="mb-20 md:mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-8 bg-zinc-700"></div>
                <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 font-bold">Side Projects</h2>
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-white">Personal Projects</h3>
              <p className="text-zinc-500 text-sm mt-3 max-w-lg font-medium">Self-designed, architected & built from Business Plan to Production.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/80 backdrop-blur-md p-8 hover:border-white/20 transition-all duration-500 shadow-xl"
              >

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {project.title}
                        </h4>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{project.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-300 py-1 px-3 border border-zinc-800 rounded-full backdrop-blur-sm font-bold">
                        {project.status}
                      </span>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-md group-hover:text-white transition-colors font-medium">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[9px] px-2 py-1 rounded border border-white/5 bg-white/5 text-zinc-400 uppercase font-bold tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20 md:mb-40 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-center text-zinc-900">
          <div className="relative">
            <div className="flex items-center gap-3 mb-10 text-zinc-950">
              <Briefcase size={24} className="text-zinc-800 dark:text-zinc-200" />
              <h2 className="text-2xl font-bold tracking-tight uppercase text-white">Work Experience</h2>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-900/20"></div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-950 font-bold text-xl tracking-tight !text-white">Project Manager</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Jun 2025 – Present</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2 font-bold uppercase tracking-tighter !text-white !opacity-75">Lucas Strategy (Chiang Mai)</p>
                <ul className="text-sm text-zinc-700 leading-relaxed list-disc pl-4 space-y-1 font-medium !text-white opacity-50">
                  <li>Leading SRTA Digital Asset Management system development.</li>
                  <li>Managing Fizzy Marketplace functional requirements.</li>
                  <li>Consulting for public sector Digital Transformation in Northern Thailand.</li>
                </ul>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-700 border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-800 font-bold text-xl tracking-tight !text-white">Business Project Manager</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Aug 2024 – Nov 2024</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2 font-bold uppercase tracking-tighter !text-white !opacity-75">Moonblues Co., Ltd.</p>
                <p className="text-sm text-zinc-700 leading-relaxed font-medium !text-white opacity-50">Focused on Business Development, quarterly growth planning, and marketing strategy.</p>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-800 font-bold text-xl tracking-tight !text-white">Product Manager (Co-founder)</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Aug 2024 – Nov 2024</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2 font-bold uppercase tracking-tighter !text-white opacity-75">Soleout Co., Ltd.</p>
                <p className="text-sm text-zinc-700 leading-relaxed font-medium !text-white opacity-50">Co-founded ZWAPMONEY US (Sneaker Marketplace). Designed the entire Business Plan and Product Prototype.</p>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-500 border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-700 font-bold text-xl tracking-tight !text-white">Project Manager & Team Leader</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Jul 2023 – Aug 2024</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2 font-bold uppercase tracking-tighter !text-white opacity-75">Greyscale Digital</p>
                <ul className="text-sm text-zinc-700 leading-relaxed list-disc pl-4 space-y-1 font-medium !text-white opacity-50">
                  <li>MGI (Miss Grand International) Project: System UX/UI Design & Architecture.</li>
                  <li>Managed web development teams and strategic growth.</li>
                </ul>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-400 border-4 border-white group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-500 font-bold text-xl tracking-tight !text-white">Sales Executive (Acting DM)</p>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Oct 2021 – Feb 2023</span>
                </div>
                <p className="text-sm text-zinc-500 mb-2 font-bold uppercase tracking-tighter !text-white opacity-75">CRC Thaiwatsadu</p>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium !text-white opacity-50">Managed inventory and sales analytics. Achieved sales targets as Acting Department Manager.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-300 to-zinc-500 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-950 rounded-[3rem] p-12 border border-white/10 shadow-2xl text-zinc-100">
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 w-8 bg-zinc-800 rounded-full overflow-hidden">
                  {i === 1 && <div className="h-full w-full bg-white"></div>}
                </div>)}
              </div>
              <h2 className="text-3xl font-bold mb-8 leading-tight tracking-tight italic">
                "Scaling systems requires <br />
                <span className="text-zinc-500">empathy for users.</span>"
              </h2>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Education</p>
                  <p className="text-white text-lg font-bold tracking-tighter">BBA (Modern Retail)</p>
                  <p className="text-zinc-600 text-xs mt-1">RMUTL (Class of 2023)</p>
                  <p className="text-zinc-500 text-[10px] mt-1">GPA: 3.28</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Base Location</p>
                  <p className="text-white text-2xl font-bold tracking-tighter">Chiang Mai</p>
                </div>
              </div>
              <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Monitor size={18} className="text-white" />
                </div>
                <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">Enterprise Software</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-24 pb-12 text-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16">
            <div className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-zinc-500 text-[10px] mb-8 uppercase tracking-[0.6em] font-bold">Get in touch</p>
              <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-white">
                Let's <span className="text-zinc-500">talk.</span>
              </h2>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-3 text-zinc-400 font-medium">
                  <Mail size={18} /> wasin.gsd@gmail.com
                </div>
                <div className="flex items-center gap-3 text-zinc-400 font-medium">
                  <Phone size={18} /> 094-061-7970
                </div>
                <div className="flex items-center gap-3 text-zinc-400 font-medium">
                  <span className="font-bold text-zinc-200">LINE</span> divineheart
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <a href="mailto:wasin.gsd@gmail.com" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all active:scale-95 shadow-xl hover:bg-zinc-200">
                  <Mail size={18} /> Email Me
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-10 text-center md:text-right">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/10 max-w-[240px]">
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-3 font-bold">Status</p>
                <p className="text-xs text-zinc-300 leading-relaxed font-bold">
                  Open for opportunities in Enterprise Software & Digital Transformation.
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold mb-2">Developed by</span>
                <span className="text-xl font-bold tracking-tighter text-white">ANTIGRAVITY</span>
                <span className="text-[10px] text-zinc-600 tracking-[0.4em] uppercase font-bold mt-4 italic">© 2025 ALL RIGHTS RESERVED.</span>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;