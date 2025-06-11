"use client"

import { ArrowDown, Github, Linkedin, Mail, Facebook } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { RevealText } from "./reveal-text"
import { ParallaxElement } from "./parallax-element"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 overflow-hidden"
    >
      {/* Animated background elements */}
      <ParallaxElement className="absolute top-20 left-20" speed={0.05} direction="up">
        <div className="w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-800/20 blur-3xl" />
      </ParallaxElement>

      <ParallaxElement className="absolute bottom-20 right-20" speed={0.08} direction="down">
        <div className="w-80 h-80 rounded-full bg-purple-200/30 dark:bg-purple-800/20 blur-3xl" />
      </ParallaxElement>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <AnimatedSection animation="fadeInLeft">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <RevealText delay={100}>Hi, I'm</RevealText>{" "}
                <RevealText delay={300} className="inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-gradient">
                    Ny Nguyen
                  </span>
                </RevealText>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={200}>
              <RevealText delay={500}>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  Front-End Developer & UI/UX Specialist
                </p>
              </RevealText>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={400}>
              <RevealText delay={700}>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
                  I craft beautiful, interactive user experiences with modern web technologies. Passionate about
                  responsive design, performance optimization, and creating intuitive interfaces that users love.
                </p>
              </RevealText>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={600} className="mb-10">
              {/* Buttons removed as requested */}
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={800}>
              <div className="flex gap-6 justify-center lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/nyxinhtrai", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/enpysen/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:npsony2@gmail.com", label: "Email" },
                  { icon: Facebook, href: "https://www.facebook.com/enpysen/", label: "Facebook" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scaleIn" delay={400} className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 p-2 animate-spin-slow">
                <Image
                  src="/kungfu.jpg"
                  alt="Screaming Panda Avatar"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <ParallaxElement className="absolute -top-4 -right-4" speed={0.1} direction="up">
                <div className="w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-full animate-bounce"></div>
              </ParallaxElement>
              <ParallaxElement className="absolute -bottom-4 -left-4" speed={0.15} direction="down">
                <div className="w-16 h-16 bg-pink-400 dark:bg-pink-500 rounded-full animate-pulse"></div>
              </ParallaxElement>
              <ParallaxElement className="absolute top-1/2 -left-8" speed={0.2} direction="left">
                <div className="w-12 h-12 bg-green-400 dark:bg-green-500 rounded-full animate-ping"></div>
              </ParallaxElement>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeIn" delay={1000} className="text-center mt-20">
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-125"
          >
            <ArrowDown className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
