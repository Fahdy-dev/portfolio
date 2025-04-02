import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "../public/dev-ed-wave.png"; // Replace with Fahdy's image later
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu

// Import icons from react-icons (Simple Icons set for tech logos)
import {
  SiAmazonaws as AwsIcon,
  SiMicrosoftazure as AzureIcon,
  SiGooglecloud as GcpIcon,
  SiApachespark as SparkIcon,
  SiApachekafka as KafkaIcon,
  SiApachehadoop as HadoopIcon,
  SiApacheairflow as AirflowIcon,
  SiSnowflake as SnowflakeIcon,
  SiTensorflow as TensorflowIcon,
  SiDocker as DockerIcon,
  SiKubernetes as KubernetesIcon,
  SiJenkins as JenkinsIcon,
  SiTerraform as TerraformIcon,
  SiPrometheus as PrometheusIcon,
  SiGrafana as GrafanaIcon,
  SiElasticsearch as ElkIcon,
  SiGitlab as GitlabIcon,
} from "react-icons/si";

// Use a generic icon for tools not available in Simple Icons
import { FaTools as GenericToolIcon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  // Define tools with their names and icons
  const tools = [
    { name: "AWS", icon: <AwsIcon className="w-12 h-12" /> },
    { name: "Azure", icon: <AzureIcon className="w-12 h-12" /> },
    { name: "GCP", icon: <GcpIcon className="w-12 h-12" /> },
    { name: "Apache Spark", icon: <SparkIcon className="w-12 h-12" /> },
    { name: "Kafka", icon: <KafkaIcon className="w-12 h-12" /> },
    { name: "Hadoop", icon: <HadoopIcon className="w-12 h-12" /> },
    { name: "Apache Airflow", icon: <AirflowIcon className="w-12 h-12" /> },
    { name: "Snowflake", icon: <SnowflakeIcon className="w-12 h-12" /> },
    { name: "TensorFlow", icon: <TensorflowIcon className="w-12 h-12" /> },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
    { name: "Kubernetes", icon: <KubernetesIcon className="w-12 h-12" /> },
    { name: "Jenkins", icon: <JenkinsIcon className="w-12 h-12" /> },
    { name: "Terraform", icon: <TerraformIcon className="w-12 h-12" /> },
    { name: "Prometheus", icon: <PrometheusIcon className="w-12 h-12" /> },
    { name: "Grafana", icon: <GrafanaIcon className="w-12 h-12" /> },
    { name: "ELK Stack", icon: <ElkIcon className="w-12 h-12" /> },
    { name: "GitLab CI", icon: <GitlabIcon className="w-12 h-12" /> },
    { name: "OpenShift", icon: <GenericToolIcon className="w-12 h-12" /> },
  ];

  // Define sections for the navbar
  const sections = [
    { name: "Home", id: "home" },
    { name: "Summary", id: "summary" },
    { name: "Services", id: "services" },
    { name: "Technologies", id: "tools" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Education", id: "education" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjusted offset for navbar height

      let newActiveSection = "home"; // Default to "home"
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            newActiveSection = section.id;
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  // Handle click to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjusted for navbar height
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fahdy Butt | Cloud & DevOps Architect</title>
        <meta
          name="description"
          content="Fahdy Butt - Cloud & DevOps Architect Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center dark:text-white">
        <a href="#home" onClick={() => scrollToSection("home")}>
          <h1 className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
            Fahdy Butt
          </h1>
        </a>

        {/* Desktop/Tablet Navbar Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`text-sm lg:text-lg cursor-pointer hover:text-teal-400 transition-colors ${
                    activeSection === section.id
                      ? "text-teal-400"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {section.name}
                </a>
                {activeSection === section.id && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-teal-400 rounded-full" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (Dark Mode Toggle + Resume) */}
        <div className="flex items-center">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl sm:text-2xl mr-3 sm:mr-4 text-gray-800 dark:text-gray-100"
          />
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
            href="/FahdyButt.pdf"
            target="_blank" // Replace with Fahdy's resume link
          >
            Resume
          </a>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden ml-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-gray-800 dark:text-gray-100" />
              ) : (
                <FaBars className="text-2xl text-gray-800 dark:text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slider) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-50 dark:bg-gray-900 shadow-md py-4 px-4">
            <ul className="flex flex-col space-y-4">
              {sections.map((section) => (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className={`text-lg cursor-pointer hover:text-teal-400 transition-colors ${
                      activeSection === section.id
                        ? "text-teal-400"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <main
        className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 pt-20 sm:pt-24"
        id="home"
      >
        <section className="min-h-screen">
          <div className="text-center p-6 sm:p-10">
            <div className="mx-auto bg-gradient-to-b mb-5 from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 relative overflow-hidden mt-10 sm:mt-20">
              <Image src={profilePic} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Fahdy Butt
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl py-2 text-gray-800 dark:text-white">
              Cloud & DevOps Architect
            </h3>
            <p className="text-sm sm:text-md md:text-xl py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl mx-auto">
              I architect and deploy scalable cloud infrastructures and data
              pipelines across AWS, Azure, and GCP, leveraging DevOps,
              containerization, and real-time data processing technologies.
            </p>
            <div className="text-4xl sm:text-5xl flex justify-center gap-8 sm:gap-16 py-3 text-gray-600 dark:text-gray-300">
              <a
                href="https://www.linkedin.com/in/fahdy-butt-dummy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
              <a
                href="https://github.com/Fahdy-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
              <a href="mailto:devfahdy@gmail.com">
                <AiOutlineMail className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section id="summary" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Summary
          </h3>
          <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
            Experienced Cloud & DevOps Leader with 12+ years of expertise in
            Site Reliability Engineering, DevOps, and Cloud Infrastructure.
            Proven track record in designing and deploying scalable,
            high-performance cloud architectures across AWS, Azure, GCP, and IBM
            Cloud. Skilled in automating infrastructure with Terraform and
            Ansible, and building CI/CD pipelines with Jenkins, GitLab CI, and
            ArgoCD. Expertise in containerization with Docker and Kubernetes,
            and data engineering with Kafka, Spark, and Hadoop.
          </p>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
              Services I Offer
            </h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
              With over 12 years in the industry, I specialize in:
            </p>
          </div>
          <div className="lg:flex gap-6 sm:gap-10">
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                Cloud Architecture
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                Scalable, multi-cloud solutions across AWS, Azure, and GCP.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Serverless Architectures
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Cloud Migrations
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Cost Optimization
              </p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                DevOps & Automation
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                CI/CD pipelines, IaC, and container orchestration.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Jenkins, GitLab CI, ArgoCD
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Terraform, Kubernetes
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Security Automation
              </p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                Data Pipelines
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                Real-time data processing and big data solutions.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Kafka, Spark, Hadoop
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                ETL/ELT Development
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Data Warehousing
              </p>
            </div>
          </div>
        </section>

        {/* TOOLS & TECHNOLOGIES SECTION */}
        <section id="tools" className="py-10">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
              Tools & Technologies
            </h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
              Proficient in a wide range of tools for cloud, DevOps, and data
              engineering:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group hover:scale-105"
              >
                <div className="mb-4 text-gray-800 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                  {tool.icon}
                </div>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black font-medium">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Experience
          </h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Principal Cloud & DevOps Engineer - MindK
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                April 2019 - Present
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Spearheaded multi-region Kubernetes deployment on IBM Cloud
                  with OpenShift
                </li>
                <li>
                  Architected real-time data pipelines with Kafka Streams,
                  Spark, and AWS Lambda
                </li>
                <li>
                  Optimized CI/CD pipelines using GitHub CI, Helm, and Terraform
                </li>
                <li>
                  Designed disaster recovery strategies across AWS and Azure
                </li>
                <li>
                  Implemented monitoring with Prometheus, Grafana, and ELK Stack
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Senior Cloud Architect - Twilio
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                August 2016 - April 2019
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Designed scalable cloud infrastructure across AWS and Azure
                </li>
                <li>
                  Built CI/CD pipelines with Jenkins, GitHub CI, and Docker
                </li>
                <li>
                  Engineered data warehousing with Google BigQuery and Amazon
                  Redshift
                </li>
                <li>
                  Integrated serverless architectures with AWS Lambda and Azure
                  Functions
                </li>
                <li>
                  Enhanced monitoring with Prometheus, Grafana, and ELK Stack
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Site Reliability Engineer - Contino
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                March 2014 - August 2016
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Optimized infrastructure with Kubernetes and AWS auto-scaling
                </li>
                <li>Automated security compliance with Puppet and Ansible</li>
                <li>Conducted performance tuning and capacity planning</li>
                <li>
                  Implemented real-time monitoring with Prometheus and Grafana
                </li>
                <li>Led cloud migration efforts for legacy workloads</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
            <li>AWS Certified Solutions Architect - Professional</li>
            <li>Google Professional Cloud Architect</li>
            <li>Microsoft Certified: Azure Solutions Architect Expert</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
            <li>HashiCorp Certified: Terraform Associate</li>
            <li>Red Hat Certified Engineer (RHCE)</li>
            <li>Certified DevOps Professional (Docker, Jenkins, Kubernetes)</li>
          </ul>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Education
          </h3>
          <div className="border-l-4 border-teal-500 pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
              Bachelor of Science, Computer Science
            </h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              University of California, Berkeley
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-4 sm:py-6 text-center">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          © 2025 Fahdy Butt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
