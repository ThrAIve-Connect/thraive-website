import React, { useState, useRef } from 'react'; // FIX: Removed unused 'useEffect'
import { ChevronsDown, Users, Zap, Code, Heart, Eye, Mail, Linkedin, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

// --- MOCK DATA (Replace with your actual data) ---

const teamMembers = [
 { name: 'Srikar Vemuri', role: 'Founder & CEO', imageUrl: 'https://placehold.co/300x300/1a202c/718096?text=AS', bio: 'A passionate advocate for accessible AI education, driving the vision and strategy of ThrAIve. Currently studying Computer Science at Stanford University.', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Priya Patel', role: 'Chief Technology Officer', imageUrl: 'https://placehold.co/300x300/1a202c/718096?text=PP', bio: 'Leads the technical development of all ThrAIve projects, with expertise in machine learning and full-stack development. MIT student.', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Praneel Vema', role: 'Head of Community', imageUrl: 'https://placehold.co/300x300/1a202c/718096?text=BC', bio: 'Fosters our vibrant community by organizing events, managing communications, and ensuring every member feels welcome. Studies at UC Berkeley.', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Neeraj Chandekar', role: 'Director of Non-Profit Outreach', imageUrl: 'https://placehold.co/300x300/1a202c/718096?text=CW', bio: 'Connects ThrAIve with non-profit organizations, leading projects that apply AI for social good. A student at Johns Hopkins University.', socials: { linkedin: '#', twitter: '#' } },
]
const projects = [
  {
    icon: Heart,
    title: 'HART Nonprofit Connect',
    status: 'Completed',
    description: 'Developed an AI-powered social media content generator for HART of Folsom. This tool automates the creation of flyers and promotional materials, significantly boosting their outreach capabilities and allowing them to focus more on their core mission.',
    tech: ['Python Flask', 'Canva API', 'OpenAI API', 'Unsplash API'],
  },
  {
    icon: Eye,
    title: 'NY State Ophthalmology Society Research',
    status: 'Ongoing',
    description: 'A collaborative research project leveraging AI to analyze complex ophthalmic data. Our goal is to develop models that can assist in early disease detection and support ophthalmologists in their diagnostic processes.',
    tech: ['Data Analysis', 'Machine Learning', 'AI Research', 'PyTorch'],
  },
];

const pastEvents = [
    {
        title: 'Intro to Generative AI for Social Impact',
        description: 'Our inaugural webinar featuring a guest speaker from a leading AI research lab. We explored the fundamentals of generative AI and brainstormed applications for non-profit organizations.',
        date: 'June 15, 2025',
        recordingUrl: 'https://www.youtube.com/' // Example URL
    }
];

const initiatives = [
    { icon: Zap, title: "AI Webinars", description: "Engaging webinars with industry experts and guest speakers on cutting-edge AI topics." },
    { icon: Users, title: "Student Community", description: "A thriving network for high school and college students to connect, collaborate, and share their passion for AI." },
    { icon: Heart, title: "AI for Social Good", description: "Promoting the use of AI for nonprofit projects, providing resources and support to make a real-world impact." },
    { icon: Code, title: "Hackathons", description: "High-energy hackathons designed to foster creativity, problem-solving, and innovation in AI." },
];


// --- CORE APP STRUCTURE ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'team':
        return <TeamPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactSection isPage={true} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-tight">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

// --- HEADER & FOOTER ---

const Header = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'team', title: 'Our Team' },
    { id: 'projects', title: 'Projects & Events' },
    { id: 'contact', title: 'Contact' },
  ];

  const navigate = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('home')}>
          <img src="transparent-white.png" alt="ThrAIve Logo" className="h-14 w-14" />
          <span className="text-2xl font-bold text-white">ThrAIve</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-lg font-medium transition-colors duration-300 ${
                currentPage === link.id ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              {link.title}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
       {isOpen && (
            <div className="md:hidden bg-gray-900 bg-opacity-95">
                <nav className="flex flex-col items-center py-4">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => navigate(link.id)} className={`py-2 text-lg font-medium transition-colors duration-300 ${currentPage === link.id ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
                            {link.title}
                        </button>
                    ))}
                </nav>
            </div>
        )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="transparent-white.png" alt="ThrAIve Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-white">ThrAIve</span>
        </div>
        <div className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ThrAIve. All rights reserved.
        </div>
        {/* FIX: Replaced '#' with valid placeholder URLs */}
        <div className="flex space-x-6">
          <a href="mailto:contact@thraive.ai" className="text-gray-400 hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="https://www.instagram.com/" className="text-gray-400 hover:text-blue-400 transition-colors"><Instagram className="w-6 h-6" /></a>
          <a href="https://twitter.com/" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  </footer>
);


// --- PAGES & SECTIONS ---

const HomePage = ({ setCurrentPage }) => {
    const aboutRef = useRef(null);
    const scrollToRef = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <React.Fragment>
            <HeroSection scrollToAbout={() => scrollToRef(aboutRef)} />
            <AboutSection ref={aboutRef} setCurrentPage={setCurrentPage} />
            <InitiativesSection />
            <ContactSection />
        </React.Fragment>
    );
};

const TeamPage = () => (
    <section id="team-page" className="py-20 md:py-28 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Meet the Core Team</h1>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    The driving force behind ThrAIve's mission. We are innovators, leaders, and students passionate about shaping the future of AI.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                        <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"/>
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                        <div className="flex justify-center space-x-4">
                            <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-400"><Linkedin /></a>
                            <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-400"><Twitter /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProjectsPage = () => (
    <div className="bg-gray-900 py-20 md:py-28">
        <div className="container mx-auto px-6">
            {/* Projects Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Projects</h1>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    Applying AI to solve real-world problems and support our community partners.
                </p>
            </div>
            <div className="grid md:grid-cols-1 gap-10 mb-20">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center">
                        <div className="p-4 bg-gray-700 flex-shrink-0 self-stretch flex items-center">
                            <project.icon className="w-12 h-12 text-blue-400 mx-4" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-2">
                                <h3 className="text-3xl font-bold text-white mr-4">{project.title}</h3>
                                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>{project.status}</span>
                            </div>
                            <p className="text-gray-300 mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Past Events Section */}
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Past Events & Webinars</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    Sharing knowledge and fostering discussion within our community.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                {pastEvents.map((event, index) => (
                    <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
                        <p className="text-sm text-blue-400 font-semibold mb-2">{event.date}</p>
                        <h3 className="text-3xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-300 mb-6">{event.description}</p>
                        <a href={event.recordingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors">
                            <Youtube className="w-6 h-6 mr-2" />
                            Watch Recording
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const HeroSection = ({ scrollToAbout }) => (
  <section id="home" className="h-[90vh] flex items-center justify-center bg-grid-gray-700/[0.2] relative">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="text-center z-10 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-300">
          Innovate. Collaborate. Inspire.
        </span>
        <br />
        The Future of AI is Here.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        ThrAIve is a student-led organization dedicated to exploring the frontiers of Artificial Intelligence, fostering a vibrant community, and applying AI for social good.
      </p>
      <button onClick={scrollToAbout} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
        Discover More
      </button>
    </div>
    <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={scrollToAbout}>
      <ChevronsDown className="w-8 h-8 text-gray-500" />
    </div>
  </section>
);

const AboutSection = React.forwardRef(({ setCurrentPage }, ref) => (
  <section ref={ref} id="about" className="py-20 md:py-32 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">About ThrAIve</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          We are a nationwide community of <span className="text-blue-400 font-bold">90+ passionate students</span>, united by a curiosity for AI and a drive to make a difference.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-300 text-lg">
                Our mission is to democratize AI education and application. We aim to conduct insightful webinars, build a collaborative student community, promote AI for nonprofit impact, and organize innovative hackathons. We're creating a launchpad for the next generation of AI leaders and problem-solvers.
            </p>
             <h3 className="text-3xl font-bold text-white mt-8">Our Vision</h3>
            <p className="text-gray-300 text-lg">
                We envision a future where students from all backgrounds can access the tools and knowledge to harness AI for positive change. By connecting aspiring minds and providing hands-on opportunities, we believe in fostering a more innovative, equitable, and intelligent world.
            </p>
        </div>
        <div className="text-center bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">The Team Behind the Mission</h3>
            <p className="text-gray-400 mb-6">Our organization is powered by a dedicated team of student leaders.</p>
            <button onClick={() => { setCurrentPage('team'); window.scrollTo(0, 0); }} className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                Meet the Core Team <ArrowRight className="ml-2 w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  </section>
));

const InitiativesSection = () => (
    <section id="initiatives" className="py-20 md:py-32 bg-gray-800 bg-opacity-40">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Initiatives</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    We empower our community through a variety of engaging and impactful activities.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {initiatives.map((item, index) => (
                    <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 bg-opacity-20 mb-6">
                           <item.icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = ({ isPage = false }) => (
  <section id="contact" className={`py-20 md:py-32 ${isPage ? 'bg-gray-900' : 'bg-gray-800 bg-opacity-40'}`}>
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Get Involved</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Whether you're a student, a non-profit, or a professional, there's a place for you at ThrAIve.
        </p>
      </div>
      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="your.email@example.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="How would you like to get involved?"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);
