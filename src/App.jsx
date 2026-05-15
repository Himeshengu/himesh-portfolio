import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, FileText, Sun, Moon, Menu, X } from "lucide-react";
import {
  FaPython,
  FaAws,
  FaReact,
  FaDocker,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiSnowflake,
  SiApacheairflow,
  SiApachespark,
  SiGooglecloud,
} from "react-icons/si";

const projects = [
  {
    title: "MedGAN Studio — Distributed GAN Inference System",
    type: "Full Stack Generative AI",
    desc: "Built a full-stack AI-powered medical imaging platform for synthetic MRI, CT Scan, X-Ray, and retinal image generation using distributed GAN inference pipelines, FastAPI microservices, React dashboards, and MongoDB Atlas cloud storage.",
    tech: [
      "PyTorch",
      "GANs",
      "FastAPI",
      "React",
      "MongoDB Atlas",
      "Docker",
      "Python"
    ],
    github:
      "https://github.com/Himeshengu/MedGAN-Studio-Distributed-GAN-Inference-Synthetic-Medical-Imaging-System",
  },

  {
    title: "RAG Benchmarking System",
    type: "AI / LLM Systems",
    desc: "A benchmarking framework for evaluating RAG systems across accuracy, latency, cost-efficiency, response quality, and explainability.",
    tech: ["Python", "LangChain", "Vector DB", "LLMs", "Streamlit"],
    github:
      "https://github.com/Himeshengu/RAG-System-Benchmarking-with-Explainability-and-Hallucination-Guardrails",
  },

  {
    title: "YOLOv8 License Plate Detection",
    type: "Computer Vision Research",
    desc: "Built a two-stage system using YOLOv8 for license plate detection and EfficientNet B7 for character recognition, improving recognition accuracy by 23%.",
    tech: ["YOLOv8", "EfficientNet B7", "TensorFlow", "Python"],
    github: "https://github.com/Himeshengu/License-Plate-Identification",
  },

  {
    title: "Multi-Class Retinal Disease Detection",
    type: "Medical AI Research",
    desc: "Developed a GAN-based pipeline for retinal disease classification using preprocessing, augmentation, feature extraction, and optimized model training.",
    tech: ["GAN", "PyTorch", "OpenCV", "TensorFlow"],
    github: "https://github.com/Himeshengu",
  },

  {
    title: "Needs On Wheels",
    type: "Full Stack E-Commerce",
    desc: "Built a food and grocery delivery web application with customer/admin platforms, order management, secure payments, and real-time tracking.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Himeshengu",
  },
];

const skillCategories = [
  {
    title: "Programming & Tools",
    items: ["Python", "SQL", "PySpark", "JavaScript", "Git", "Linux/Unix"],
  },
  {
    title: "Data Engineering & Big Data",
    items: [
      "Apache Spark",
      "Apache Airflow",
      "Kafka",
      "ETL Pipelines",
      "AWS Glue",
      "Redshift",
      "AWS EMR",
    ],
  },
  {
    title: "Databases & Cloud Platforms",
    items: [
      "MySQL",
      "Snowflake",
      "PostgreSQL",
      "Google BigQuery",
      "AWS S3",
      "AWS EC2",
      "GCP",
      "Microsoft Azure",
    ],
  },
  {
    title: "Data Analysis & Visualization",
    items: ["Pandas", "NumPy", "Scikit-learn", "Tableau", "Power BI"],
  },
  {
    title: "Machine Learning & Modeling",
    items: [
      "TensorFlow",
      "PyTorch",
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "A/B Testing",
    ],
  },
  {
    title: "DevOps & Automation",
    items: ["Docker", "Kubernetes", "Python Automation", "CI/CD"],
  },
];

const techIcons = [
  { name: "Python", icon: <FaPython /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Snowflake", icon: <SiSnowflake /> },
  { name: "Airflow", icon: <SiApacheairflow /> },
  { name: "Spark", icon: <SiApachespark /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "React", icon: <FaReact /> },
  { name: "GCP", icon: <SiGooglecloud /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const getSkillIcon = (skill) => {
    if (skill.includes("Python")) return <FaPython />;
    if (skill.includes("AWS")) return <FaAws />;
    if (skill.includes("Docker")) return <FaDocker />;
    if (skill.includes("React")) return <FaReact />;
    if (skill.includes("GCP") || skill.includes("Google"))
      return <SiGooglecloud />;
    if (skill.includes("Snowflake")) return <SiSnowflake />;
    if (skill.includes("Airflow")) return <SiApacheairflow />;
    if (skill.includes("Spark")) return <SiApachespark />;
    return null;
  };

  const bgClass = darkMode ? "bg-black text-white" : "bg-slate-100 text-black";
  const cardClass = darkMode
    ? "bg-zinc-900/90 border-zinc-800"
    : "bg-white border-slate-200";
  const textClass = darkMode ? "text-gray-400" : "text-slate-600";

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black text-white"
            >
              Himesh<span className="text-cyan-400">.</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="h-1 bg-cyan-400 rounded-full mt-6 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen ${bgClass} relative overflow-hidden transition-colors duration-500`}
      >
        {/* Animated background grid */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="fixed inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(34,211,238,.8) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="fixed top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Sticky Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-cyan-400 text-black px-4 py-3 md:px-5 rounded-full font-semibold shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:bg-cyan-300 transition"

        >
          <FileText size={18} />
          Resume
        </a>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 border border-white/10 bg-black/40 backdrop-blur-2xl px-4 py-3 rounded-full hover:bg-white/10 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Navbar */}
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50 mt-3 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_35px_rgba(34,211,238,0.08)] overflow-hidden">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl text-white">
              Himesh<span className="text-cyan-400">.</span>
            </h1>

            <div className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
              <a href="#publications" className="hover:text-cyan-400 transition">Publications</a>
              <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
              <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
              <a href="#education" className="hover:text-cyan-400 transition">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-gray-300 text-sm">
              <a onClick={() => setMobileMenuOpen(false)} href="#projects">Projects</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#publications">Publications</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#skills">Skills</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#experience">Experience</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#education">Education</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact">Contact</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 pt-40 pb-20 grid lg:grid-cols-[1.4fr_0.6fr] gap-12 items-center"
        >
          <div>
            <div className="text-cyan-400 text-sm uppercase tracking-widest h-6">
              <TypingRoles />
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
              Hi, I’m Himesh Engu
            </h1>

            <p className={`text-lg mt-6 max-w-3xl leading-8 ${textClass}`}>
              Data Engineer graduate student with 3+ years of hands-on
              experience building Python and SQL-based data pipelines, cloud
              workflows, analytics dashboards, and AI/ML systems across AWS,
              Azure, and GCP.
            </p>

            {/* Open To Work Banner */}
            <div className="mt-8 inline-flex flex-wrap items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
              🚀 Open to:
              <span className={darkMode ? "text-white" : "text-black"}>
                Data Engineering • ML Engineering • SWE Roles
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/himeshengu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/engu-himesh-a3a6372b7"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=enguhimesh01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition"
              >
                Email Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`${cardClass} border rounded-3xl p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
          >
            <img
              src="/profile.png"
              alt="Himesh Engu"
              className="w-24 h-24 rounded-3xl object-cover mb-6 border border-zinc-700"
            />

            <h2 className="text-2xl font-bold">Portfolio Snapshot</h2>

            <div className={`mt-6 space-y-4 ${textClass}`}>
              <p>🎓 MS Computer Science @ NAU</p>
              <p>⚙️ ETL, ELT & Cloud Data Pipelines</p>
              <p>🤖 AI/ML + RAG Systems</p>
              <p>📄 Published Research Experience</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="bg-black/50 rounded-2xl p-4 border border-zinc-800">
                <p className="text-3xl font-bold text-cyan-400">3+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>

              <div className="bg-black/50 rounded-2xl p-4 border border-zinc-800">
                <p className="text-3xl font-bold text-cyan-400">2M+</p>
                <p className="text-sm text-gray-400">Records Processed</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Technologies Strip */}
        <AnimatedSection>
          <div
            className={`${cardClass} overflow-hidden rounded-3xl border py-5`}
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex w-max gap-10 px-8"
            >
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 text-gray-300 text-lg whitespace-nowrap"
                >
                  <span className="text-cyan-400 text-2xl">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            About Me
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-8">
            Professional Summary
          </h2>

          <div
            className={`${cardClass} border rounded-3xl p-8 md:p-10 grid md:grid-cols-[0.32fr_0.68fr] gap-10 items-center hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="/profile.png"
                alt="Himesh Engu"
                className="w-64 h-64 rounded-3xl object-cover border border-zinc-700 shadow-2xl"
              />
            </motion.div>

            <div className="space-y-5">
              <p className={`${textClass} leading-8 text-lg`}>
                As a Graduate Student in Computer Science at Northern Arizona University, I am passionate about designing scalable, data-driven systems that transform complex data into actionable business insights and intelligent solutions.

              </p>
              <p className={`${textClass} leading-8 text-lg`}>
                I specialize in Data Engineering with strong experience in
                ETL/ELT pipelines, database optimization, analytics dashboards,
                cloud infrastructure, and large-scale data processing across
                AWS, Google Cloud, and Microsoft Azure.
              </p>
              <p className={`${textClass} leading-8 text-lg`}>
                My technical expertise includes Python, SQL, Java, C++, PySpark, Apache Airflow, Snowflake, BigQuery, Power BI, Tableau, TensorFlow, PyTorch, and Scikit-learn. I am particularly interested in cloud-native architectures, big data processing, machine learning systems, and AI-driven analytics that improve scalability, automation, and decision-making.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects">
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Featured Work
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${cardClass} border p-8 rounded-3xl hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
              >
                <p className="text-cyan-400 text-sm mb-3">{project.type}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className={`${textClass} mt-4 leading-7`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-black/50 border border-zinc-700 px-3 py-1 rounded-full text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    View GitHub →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    Source Code →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="publications">
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Publications
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">
            Research Publications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <PublicationCard
              title="Automatic License Plate Identification using YOLOv8"
              conf="ICCCIS 2023 • Sharda University"
              desc="Research focused on intelligent transportation systems using YOLOv8 and EfficientNet B7 for license plate detection and recognition with improved accuracy."
              paper="https://ieeexplore.ieee.org/xpl/conhome/10424970/proceeding"
              code="https://github.com/Himeshengu/License-Plate-Identification"
              cardClass={cardClass}
              textClass={textClass}
            />

            <PublicationCard
              title="Multi-Class Retinal Disease Detection using GAN"
              conf="ICCCI 2024 • Sri Shakti Institute"
              desc="GAN-assisted medical imaging system for retinal disease classification using preprocessing, augmentation, and deep learning optimization techniques."
              paper="YOUR_RETINAL_PUBLICATION_LINK"
              code="https://github.com/Himeshengu"
              cardClass={cardClass}
              textClass={textClass}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills">
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Technical Expertise
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${cardClass} border rounded-3xl p-8 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-5">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black/50 border border-zinc-700 px-4 py-2 rounded-full text-sm text-gray-200 inline-flex items-center gap-2"
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Achievements
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">Key Highlights</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["2M+", "Records processed in analytics dashboards"],
              ["40%", "Dashboard latency reduction using optimized SQL models"],
              ["23%", "Improved recognition accuracy in license plate detection"],
              ["2", "AI/ML research works presented internationally"],
            ].map(([num, text]) => (
              <motion.div
                key={num}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`${cardClass} border rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
              >
                <p className="text-3xl font-bold text-cyan-400">{num}</p>
                <p className={`${textClass} mt-3`}>{text}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience">
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Experience
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">
            Professional Timeline
          </h2>

          <div className="relative border-l border-cyan-400/40 ml-4 space-y-8">
            {[
              {
                role: "Data Engineer",
                company: "Northern Arizona University",
                date: "Jul 2025 – Present",
                points: [
                  "Designed ETL pipelines in GCP for 250K+ records.",
                  "Reduced dashboard latency by 40%.",
                  "Automated reporting workflows saving 12+ hours weekly.",
                  "Resolved 130+ data quality issues.",
                ],
              },
              {
                role: "Data Engineer",
                company: "Sodexo",
                date: "Oct 2024 – Apr 2025",
                points: [
                  "Built Snowflake data marts for 1.2M+ records.",
                  "Developed Tableau dashboards improving access by 30%.",
                  "Automated ETL pipelines across AWS and Azure.",
                ],
              },
              {
                role: "Data Engineer",
                company: "Lead IT",
                date: "Jan 2023 – Jul 2024",
                points: [
                  "Developed ETL pipelines using Snowflake and Talend.",
                  "Built Power BI dashboards processing 2M+ records.",
                  "Reduced operational errors by 25%.",
                ],
              },
            ].map((job) => (
              <motion.div
                key={job.company}
                whileHover={{ x: 8 }}
                className={`relative ml-8 ${cardClass} border rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
              >
                <span className="absolute -left-[49px] top-8 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"></span>
                <p className="text-cyan-400 text-sm">{job.date}</p>
                <h3 className="text-2xl font-bold mt-2">{job.role}</h3>
                <p className={textClass}>{job.company}</p>

                <ul className={`${textClass} mt-5 space-y-3 leading-7`}>
                  {job.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="education">
          <p className="text-cyan-400 text-sm uppercase tracking-widest">
            Education
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-10">
            Academic Background
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <EducationCard
              title="MS in Computer Science"
              school="Northern Arizona University"
              desc="Flagstaff, Arizona • Aug 2024 – Dec 2025"
              cardClass={cardClass}
              textClass={textClass}
            />
            <EducationCard
              title="B.Tech in Computer Science"
              school="Amrita Vishwa Vidyapeetham"
              desc="Chennai, India • Jun 2020 – May 2024"
              cardClass={cardClass}
              textClass={textClass}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <div className={`${cardClass} border rounded-3xl p-10`}>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold">Let’s Connect</h2>
              <p className={`${textClass} mt-4`}>
                Open to software engineering, AI/ML engineering, data
                engineering, and research opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <ContactCard
                  title="Email"
                  href="mailto:enguhimesh01@gmail.com"
                  text="enguhimesh01@gmail.com"
                />
                <ContactCard
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/engu-himesh-a3a6372b7"
                  text="linkedin.com/in/engu-himesh-a3a6372b7"
                />
                <ContactCard
                  title="GitHub"
                  href="https://github.com/himeshengu"
                  text="github.com/himeshengu"
                />
              </div>

              <form className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                ></textarea>
                <a
                  href="mailto:enguhimesh01@gmail.com"
                  className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </AnimatedSection>

        <footer className="border-t border-white/10 py-8 text-center text-gray-500">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <FooterLink
              href="https://github.com/himeshengu"
              icon={<FaGithub />}
              text="GitHub"
            />
            <FooterLink
              href="https://www.linkedin.com/in/engu-himesh-a3a6372b7"
              icon={<FaLinkedin />}
              text="LinkedIn"
            />
            <FooterLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=enguhimesh01@gmail.com"
              icon={<Mail size={16} />}
              text="Email"
            />
            <FooterLink
              href="/resume.pdf"
              icon={<FileText size={16} />}
              text="Resume"
            />
          </div>
          © 2026 Himesh Engu. Built with React and Tailwind CSS.
        </footer>
      </div>
    </>
  );
}

function AnimatedSection({ children, id }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {children}
    </motion.section>
  );
}

function ContactCard({ title, href, text }) {
  return (
    <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition break-words"
      >
        {text}
      </a>
    </div>
  );
}

function FooterLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:text-cyan-400 transition"
    >
      {icon}
      {text}
    </a>
  );
}

function PublicationCard({
  title,
  conf,
  desc,
  paper,
  code,
  cardClass,
  textClass,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${cardClass} border p-8 rounded-3xl hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
    >
      <p className="text-cyan-400 text-sm">{conf}</p>
      <h3 className="text-2xl font-bold mt-3">{title}</h3>
      <p className={`${textClass} mt-4 leading-7`}>{desc}</p>

      <div className="mt-6 flex gap-4">
        <a
          href={paper}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          View Publication →
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          Source Code →
        </a>
      </div>
    </motion.div>
  );
}

function EducationCard({ title, school, desc, cardClass, textClass }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`${cardClass} border rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-cyan-400 mt-2">{school}</p>
      <p className={`${textClass} mt-4`}>{desc}</p>
    </motion.div>
  );
}

function TypingRoles() {
  const roles = [
    "Data Engineer",
    "AI/ML Engineer",
    "Cloud Data Engineer",
    "RAG Systems Builder",
    "Researcher",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));

          if (text === current) {
            setTimeout(() => setDeleting(true), 900);
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 80
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span>
      {text}
      <span className="text-cyan-400 animate-pulse">|</span>
    </span>
  );
}

export default App;