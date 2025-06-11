"use client"

import { Code, Palette, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { RevealText } from "./reveal-text"
import { ParallaxElement } from "./parallax-element"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function About() {
  const { ref: staggerRef, isVisible: staggerVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <ParallaxElement className="absolute top-20 left-10" speed={0.05} direction="up">
          <div className="w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        </ParallaxElement>
        <ParallaxElement className="absolute top-40 right-10" speed={0.08} direction="down">
          <div className="w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </ParallaxElement>
        <ParallaxElement className="absolute -bottom-8 left-20" speed={0.1} direction="left">
          <div className="w-32 h-32 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </ParallaxElement>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <RevealText>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate front-end developer with experience creating stunning, user-friendly web applications. I
              specialize in turning design concepts into pixel-perfect, interactive experiences.
            </p>
          </RevealText>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div>
              <RevealText>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Journey</h3>
              </RevealText>
              <RevealText delay={200}>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My journey into front-end development began with a fascination for how design and code come together
                  to create amazing user experiences. I've worked with design teams and product managers to bring
                  countless ideas to life through clean, efficient code.
                </p>
              </RevealText>
              <RevealText delay={400}>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I stay current with the latest front-end trends and technologies, always looking for ways to improve
                  performance, accessibility, and user experience. When I'm not coding, you'll find me exploring new
                  design systems, contributing to open-source projects, or experimenting with the latest CSS features.
                </p>
              </RevealText>
              <div
                ref={staggerRef}
                className={cn("flex flex-wrap gap-4 stagger-animation", staggerVisible && "in-view")}
              >
                {["UI/UX Focused", "Performance Optimizer", "Accessibility Advocate"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transform hover:scale-105 transition-all duration-300 cursor-default hover:animate-pulse"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-6">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description: "Writing maintainable, scalable code that follows best practices and industry standards.",
                color: "blue",
              },
              {
                icon: Palette,
                title: "Design Thinking",
                description: "Creating intuitive user experiences with attention to detail and accessibility.",
                color: "green",
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Optimizing applications for speed, efficiency, and excellent user experience.",
                color: "purple",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeInRight" delay={300 + index * 100}>
                <Card
                  className={`border-l-4 border-l-${item.color}-500 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-white dark:bg-gray-800 hover-3d`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <item.icon className={`h-8 w-8 text-${item.color}-500 mr-3 animate-pulse-slow`} />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
