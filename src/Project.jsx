"use client";

import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaPalette,
  FaProjectDiagram,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaRocket,
  FaUsers,
  FaClock,
  FaAward,
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaBullhorn,
} from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiPencilRuler } from "react-icons/gi";
import { BiSolidColor } from "react-icons/bi";
import { PiMegaphoneThin } from "react-icons/pi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

export default function EverestEngine() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop default page reload
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xjgbzbod", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // wait 3 seconds before redirect
        setTimeout(() => {
          window.location.href = "https://everestengine.com/";
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      alert("Error sending message.");
      setLoading(false);
    }
  };

  const services = [
    {
      icon: <IoCodeSlashOutline className="text-3xl " />,
      title: "Web Development",
      description:
        "Custom static, dynamic, and responsive websites built with cutting-edge technologies like React, Next.js, and Node.js",
      features: [
        "100% Responsive and quality  development",
        "Domain registration and web hosting services",
        "SEO Optimized",
        "Best performance Secure & Scalable",
      ],
    },
    {
      icon: <BiSolidColor className="text-3xl" />,
      title: "Graphic Design",
      description:
        "Eye-catching visuals using Adobe Illustrator and Photoshop to create memorable brand identities",
      features: [
        "Logo Design",
        "Brand Identity",
 
        "Digital Assets",
        "Infographic/Brochure/Flyer Design",
      ],
    },
    {
      icon: <GiPencilRuler className="text-3xl" />,
      title: "UX/UI Design",
      description:
        "User-centered designs that combine aesthetics with functionality for exceptional user experiences",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: <PiMegaphoneThin className="text-3xl" />,
      title: "Social Media Management",
      description:
        "Strategic content creation and management to grow your online presence and engage your audience",
      features: [
        "Content Strategy",
     
        "Social media handling/management",
        "Targated audience campaigns management",
        "Community Management",
      ],
    },
  ];

  const portfolio = [
    {
      name: "Information Technology",
      logo: "/logo2.png",
      url: "https://www.everestengine.com",
    },
    {
      name: "Adventure Travel",
      logo: "/elogo2.png",
      url: "https://www.everestyatra.com",
    },
    {
      name: "Personal Portfolio",
      logo: "/personal.webp",
      url: "https://www.sureshlamsal.com",
    },
    {
      name: "Hospitality ",
      logo: "/aatighar.png",
      url: "https://atigharresort.com/",
    },
    {
      name: "Food and Beverage",
      logo: "/tiffin.webp",
      url: "https://a1tiffin.ca",
    },
    {
      name: "Handicraft & Art",
      logo: "/mandala1.webp",
      url: "https://www.everesthandmade.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Image
                src="/10logo.svg"
                alt="Everest Engine Logo"
                width={160}
                height={60}
                priority
                className="h-auto w-30 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 ">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-md font-semibold tracking-wide transition-colors relative group cursor-pointer ${
                      activeSection === item.toLowerCase()
                        ? "text-red-600"
                        : scrolled
                          ? "text-gray-100 hover:text-red-500"
                          : "text-white hover:text-text-700"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform origin-left  ${
                        activeSection === item.toLowerCase()
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-white hover:text-[#C40C0C]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Background Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide Menu */}
            <div className="absolute top-0 right-0 h-full w-75 bg-white/3 backdrop-blur-2xl shadow-2xl  transition-transform duration-500 ease-in-out">
              {/* Header with Logo */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/25">
                {/* Logo */}
                <div
                  className="relative w-9 h-10 cursor-pointer"
                  onClick={() => {
                    scrollToSection("home");
                    setIsMenuOpen(false);
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Everest Engine Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-100 hover:text-red-600 text-2xl transition"
                >
                  ✕
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col px-6 py-6 space-y-4">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        setIsMenuOpen(false);
                      }}
                      className={`text-left py-3 px-4 rounded font-semibold transition-all ${
                        activeSection === item.toLowerCase()
                          ? "bg-red-600 text-white"
                          : "text-gray-100 hover:bg-gray-100"
                      }`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0  bg-linear-to-r from-slate-950 to-slate-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-30 left-20 w-96 h-96 bg-slate-700 rounded-full blur-3xl animate-float"></div>

            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-800 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 text-center items-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 ">
            <div className="relative w-full h-full max-w-2xl items-center justify-center pt-40 md:py-32 px-15">
              <Image src="/10logo.svg" alt="logo" width={700} height={400} />
            </div>
          </div>

          <div className="animate-fadeInUp md:mt-53">
            <p className=" pt-65 lg:py-20 md:pt-15 text-md text-gray-200 max-w-2xl mx-auto  font-poppins font-medium px-6 text-base -tracking-tight">
              Transform your digital presence with custom web solutions,
              stunning designs, and strategic social media management
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center w-full px-6 mt-10">
              <button
                onClick={() => scrollToSection("services")}
                className="group w-full sm:w-auto px-10 py-2.5 bg-white   text-black/80 rounded-md font-semibold text-lg hover:bg-red-600 hover:text-white border-none transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-4 cursor-pointer"
              >
                Explore Services
                <BsBoxArrowInUpRight className="group-hover:translate-x-1 transition-transform text-2xl" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group w-full sm:w-auto px-10 py-2.5 bg-red-600 text-white hover:bg-white  hover:text-red-600 rounded-md font-semibold text-lg  transition-all border-none shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-4 cursor-pointer"
              >
                Contact Us
                <BsBoxArrowInUpRight className="group-hover:translate-x-1 transition-transform text-2xl" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp p-5  mt-45 md:mt-25"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { icon: <FaUsers />, number: "200+", label: "Happy Clients" },
              {
                icon: <FaProjectDiagram />,
                number: "300+",
                label: "Projects Completed",
              },
              { icon: <FaAward />, number: "3+", label: "Years Experience" },
              { icon: <FaClock />, number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-white bg-white/3 border border-white/8 p-8 rounded-md hover:-translate-y-4 hover:scale-105 hover:transition-all duration-500 hover:bg-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-stone-800   "
              >
                <div className="text-2xl text-gray-300 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-thin text-gray-100 mb-3  hover:text-red-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-4">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex relative py-15 items-center justify-center ">
            <div className=" absolute max-w-4xl mx-auto w-full h-px bg-linear-to-l from-transparent via-red-600 to-transparent"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl "></div>
            <div className="relative w-3 h-3 bg-red-600 rounded-full shadow-xl"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-9 border border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className=" bg-indigo-50/80 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Section Heading */}
          <div className="text-center pb-6 pt-20">
            <h2 className="  text-center text-3xl lg:text-4xl  text-[#1A3263] font-poppins lg:font-semibold font-bold font-stretch-60% ">
              WHO WE ARE :
            </h2>
          </div>

          <div className="relative pb-15 flex items-center justify-center ">
            <div className=" absolute max-w-xs mx-auto w-full h-px bg-linear-to-l from-transparent via-red-600 to-transparent"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl "></div>
            <div className="relative w-3 h-3 bg-red-600 rounded-full shadow-xl"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl"></div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* ================= TEAM CARDS ================= */}
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Suresh Card */}
              <div className="group relative rounded overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100">
                <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100  transition"></div>

                <div className="relative py-8 lg:py-0 flex flex-col items-center text-center">
                  <div className="relative w-70 h-80 mb-4">
                    <Image
                      src="/sl.webp"
                      alt="Suresh Lamsal"
                      fill
                      className="object-cover rounded shadow-lg border border-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A3263] pt-2 font-stretch-60%">
                    SURESH LAMSAL
                  </h3>

                  <p className="text-sm text-gray-800 mb-4 font-stretch-75%">
                    Founder & Lead Developer
                  </p>
                </div>
              </div>

              {/* Sumitra Card */}
              <div className="group relative rounded overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200">
                <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition "></div>

                <div className="relative py-8 lg:py-0 flex flex-col items-center text-center ">
                  <div className="relative w-70 h-80 mb-4">
                    <Image
                      src="/sumitra.webp"
                      alt="Sumitra Lamsal"
                      fill
                      className="object-cover rounded shadow-lg "
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A3263] pt-2 font-stretch-60%">
                    SUMI LAMSAL
                  </h3>

                  <p className="text-sm text-gray-800 mb-4 font-stretch-75%">
                    Co-Founder & Content Manager
                  </p>
                </div>
              </div>
            </div>

            {/* ================= ABOUT CONTENT ================= */}
            <div className="space-y-6  lg:pl-9 pl-6 pr-7 py-9 hover:transition-all duration-500 hover:-translate-y-2 hover:scale-105 rounded border border-red-500 hover:border-red-600/70">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white  leading-tight font-stretch-50% uppercase p-3 bg-red-600 rounded ">
                Building Digital Excellence Together
              </h3>

              <p className="text-gray-900 leading-relaxed font-stretch-90%">
                Founded by husband and wife duo Suresh and Sumitra Lamsal,
                Everest Engine is your trusted partner for modern digital
                solutions. Everest Engine is a leading software company
                dedicated to providing top Tech services for small
                businesses.Based in Vancouver, BC, we combine technical
                expertise with creative strategy to help small businesses grow
                online.
              </p>

              <p className="text-gray-900 leading-relaxed font-stretch-90%">
                <strong className="text-gray-700">Suresh</strong> specializes in
                full-stack development using React, Next.js, and Node.js,
                delivering scalable and high-performance web applications.
              </p>

              <p className="text-gray-800 leading-relaxed font-stretch-90%">
                <strong className="text-gray-900">Sumitra</strong> manages
                content strategy, branding, and operations — ensuring every
                project delivers measurable business results.
              </p>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-2 pt-2">
                {[
                  "Client-Focused ",
                  "Cutting-Edge Tech",
                  "Creative Innovation",
                  "Reliable Support",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-red-600 p-2 rounded"
                  >
                    <FaCheckCircle className="text-gray-100 text-lg" />
                    <span className="text-gray-100 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-15 bg-indigo-50/70">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center max-w-6xl mx-auto mb-16 pb-10 border-b border-gray-200 bg-white/60 ">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A3263] font-stretch-85% pt-12 pb-3 ">
              Our Services
            </h2>

            <p className="lg:text-xl text-sm text-gray-700 font-stretch-70% font-semibold">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 p-5  ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" group bg-linear-to-b from-indigo-50/80 to-indigo-50/20 rounded-md p-8  shadow-lg border border-gray-300 hover:border-gray-400 hover:shadow-2xl transition-all duration-300  hover:gray-400 transform hover:-translate-y-2 "
              >
                <div className="flex items-start gap-6 ">
                  <div className="`shrink-0` w-13 h-13 rounded bg-transparent border border-red-600  flex items-center justify-center text-red-600   group-hover:scale-110 transition-transform shadow-lg ">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-stretch-85%  mb-3 bg-red-600 rounded px-5 py-2 text-white group-hover:text-indigo-50 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-900 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-800"
                        >
                          <FaCheckCircle className="text-red-600 `shrink-0`" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto mt-20 bg-linear-to-b from-[#011131] to-[#011936] lg:rounded-md lg:px-15 px-5 py-14">
            <h3 className=" text-3xl  font-semibold text-center mb-8 font-stretch-85% text-gray-300  lg:border-b border-white/13 pb-10">
              Why Choose Everest Engine ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 lg:py-5 ">
              {[
                {
                  icon: <FaMobileAlt className="text-3xl" />,
                  title: "100% Responsive",
                  description:
                    "Perfect display on all devices, from mobile to desktop",
                },
                {
                  icon: <FaRocket className="text-3xl" />,
                  title: "Lightning Fast",
                  description:
                    "Optimized performance for superior user experience",
                },
                {
                  icon: <FaUsers className="text-3xl" />,
                  title: "Personal Touch",
                  description:
                    "Direct collaboration 24X7 with founders on every project",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center rounded-md p-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
                >
                  {/* Glow Background Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-red-600/15 to-transparent blur-2xl"></div>

                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-13 h-13 rounded-full bg-linear-to-br from-red-600 to-red-800 text-white shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="relative text-lg font-semibold mb-3 text-indigo-100 tracking-wide">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="relative text-gray-300 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-linear-to-br from-[#01091b] to-[#011936]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-indigo-50 mb-4">
              Our Works
            </h2>

            <p className="text-xl text-gray-200 max-w-6xl mx-auto">
              Trusted by businesses across various industries
            </p>
          </div>

          <div className="relative pb-15 flex items-center justify-center ">
            <div className=" absolute max-w-xl mx-auto w-full h-px bg-linear-to-l from-transparent via-red-600 to-transparent"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl "></div>
            <div className="relative w-3 h-3 bg-red-600 rounded-full shadow-xl"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.map((client, index) => (
              <a
                key={index}
                target="_blank"
                href={client.url}
                className="group relative bg-white/3 backdrop-blur-xl rounded-sm border border-white/7   py-12  shadow-lg hover:shadow-2xl hover:scale-105  transform hover:-translate-y-2 flex flex-col items-center justify-center text-center transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-slate-600/30 to-transparent blur-2xl"></div>
                {/* Arrow Icon Top Right */}
                <div className="absolute top-4 right-4  group-hover:opacity-100 group-hover:translate-x-1   group-hover:-translate-y-1 transition-all duration-300">
                  <BsBoxArrowUpRight
                    size={18}
                    className="text-white/70 hover:text-red-600 stroke-0 "
                  />
                </div>

                <div className=" relative w-15 h-15 m-10 transition-transform overflow-hidden group-hover:scale-105  ">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-md text-gray-300 group-hover:text-red-600 transition-colors border border-white/20 hover:border-red-600 px-6 py-2 rounded-full hover:duration-500 hover:ease-out hover:scale-105  ">
                  {client.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20  bg-sky-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A3263] mb-4 pt-10">
              Get In Touch
            </h2>

            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto  ">
              Ready to elevate your digital presence? Let's start together !
            </p>
          </div>

          <div className="relative pb-15 flex items-center justify-center ">
            <div className=" absolute max-w-xl mx-auto w-full h-px bg-linear-to-l from-transparent via-red-600 to-transparent"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-md "></div>
            <div className="relative w-3 h-3 bg-red-600 rounded-full shadow-md"></div>
            <div className="relative w-2 h-2 bg-red-600 rounded-full shadow-md"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-linear-to-tl from-white to-indigo-50/40 rounded-md px-10 py-10 shadow-2xl border border-gray-300 hover:transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A3263] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 focus:ring-opacity-40 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A3263] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 focus:ring-opacity-40 outline-none transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A3263] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 focus:ring-opacity-40 outline-none transition-all"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A3263] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="7"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-300 focus:ring-opacity-40 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FiSend className="text-xl" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-linear-to-br from-[#01091b] to-[#011936] rounded-md p-7 text-white shadow-xl hover:transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <FaMapMarkerAlt className="text-2xl text-white flex-srink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">
                        Maple Ridge, British Columbia
                        <br />
                        Canada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <FaPhone className="text-2xl text-white shrink-0` mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (416) 876-4277</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <FaEnvelope className="text-2xl text-white]`shrink-0` mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@everestengine.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 rounded-md p-8 text-white shadow-2xl hover:transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 text-center border-b border-white/20 pb-3">
                  Business Hours
                </h3>

                <div className="divide-y divide-white/20">
                  {[
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 5:00 PM" },
                    { day: "Saturday", time: "Closed" },
                    { day: "Sunday", time: "Closed" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-1 text-sm sm:text-base hover:bg-white/15 px-3 rounded-sm transition"
                    >
                      <span className="font-medium">{item.day}</span>

                      <span
                        className={`${
                          item.time === "Closed"
                            ? "text-red-200 font-semibold"
                            : "text-gray-100"
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-[#01091b] to-[#011936]  text-white lg:pt-25 py-15 px-7 lg:pl-10">
        <div className="max-w-4xl mx-auto  sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 mb-8">
            <div>
              <div
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-3 mb-4 cursor-pointer "
              >
                <div className="relative w-30 h-10">
                  <Image
                    src="/10logo.svg"
                    alt="Everest Engine Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className=" text-gray-300 text-md ">www.everestengine.com</p>
              <p className="text-gray-300 text-md">info@everestengine.com</p>
              <p className="text-gray-300 text-md">phone: +1 (416) 876 4277</p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4 text-gray-100">
                Quick Links
              </h4>
              <div className="space-y-1">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block text-gray-400 hover:text-red-600 transition-colors  py-1 text-sm font-medium"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4 text-gray-100">
                Our Services
              </h4>
              <div className="pb-4 space-y-3 text-gray-400 text-sm font-medium">
                <p>Web Development</p>
                <p>Graphic Design</p>
                <p>UX/UI Design</p>
                <p>Social Media Management</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-5 text-center text-gray-400 text-xs">
            <p>
              &copy; {new Date().getFullYear()} www.everestengine.com | All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
