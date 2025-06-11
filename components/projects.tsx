"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { RevealText } from "./reveal-text"
import { ParallaxElement } from "./parallax-element"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      title: "Nessenger",
      description:
        "A modern real-time messaging application with user authentication, clean UI design, and seamless chat functionality. Features include secure login/signup, responsive design, and social authentication options.",
      image: "/nessenger.png",
      technologies: ["TypeScript", "Next.js", "Prisma", "Authentication", "Real-time Chat"],
      liveUrl: "https://nessenger.vercel.app/",
      githubUrl: "https://github.com/nyxinhtrai/Nessenger",
    },
    {
      title: "Enpysen App Learn Languages",
      description:
        "An interactive language learning platform featuring gamified lessons, multiple language support, and engaging UI design. Built with modern web technologies to provide an intuitive learning experience similar to popular language apps.",
      image: "/enpysenapp.png",
      technologies: ["React", "Next.js", "TypeScript", "Gamification", "Multi-language Support"],
      liveUrl: "https://enpysen-app.vercel.app/",
      githubUrl: "https://github.com/nyxinhtrai/enpysen-app",
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-bl from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-800 dark:via-teal-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      {/* Floating elements */}
      <ParallaxElement className="absolute top-20 right-20" speed={0.05} direction="up">
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-300 to-teal-400 dark:from-emerald-600 dark:to-teal-700 rounded-full opacity-20 animate-pulse"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute bottom-32 left-16" speed={0.08} direction="down">
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-600 dark:to-blue-700 rounded-lg transform rotate-45 opacity-15 animate-spin-slow"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute top-1/3 right-1/4" speed={0.1} direction="left">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-300 to-emerald-400 dark:from-teal-600 dark:to-emerald-700 rounded-full opacity-25 animate-bounce"></div>
      </ParallaxElement>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <RevealText>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </RevealText>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="scaleIn" delay={index * 150}>
              <Card
                className="overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group hover-3d"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>

                  {/* Animated overlay on hover */}
                  {/* <div
                    className={`absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                  >
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-gray-900 dark:text-white border-0 shadow-lg"
                      >
                        View Details
                      </Button>
                    </div>
                  </div> */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                    {hoveredIndex === index && (
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2 animate-pulse"></span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 cursor-default transform hover:scale-105 animate-shine"
                        style={{
                          animationDelay: `${techIndex * 50}ms`,
                          transitionDelay: `${techIndex * 50}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-blue-50 dark:hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 group flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 group flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
