"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { RevealText } from "./reveal-text"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { ParallaxElement } from "./parallax-element"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 & CSS3",
        "Sass/SCSS",
        "Responsive Design",
        "CSS Grid & Flexbox",
      ],
      color: "blue",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap", "Material-UI"],
      color: "purple",
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "Webpack/Vite", "Figma", "Chrome DevTools", "Jest/Testing", "NPM/Yarn"],
      color: "green",
    },
    {
      title: "Design & UX",
      skills: ["UI/UX Design", "Prototyping", "Wireframing", "User Research", "Design Systems", "Accessibility"],
      color: "pink",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      {/* Floating geometric shapes */}
      <ParallaxElement className="absolute top-10 right-10" speed={0.05} direction="up">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-lg rotate-45 opacity-20 animate-spin-slow"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute bottom-20 left-10" speed={0.08} direction="down">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full opacity-20 animate-pulse"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute top-1/2 left-1/4" speed={0.1} direction="left">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 dark:from-pink-600 dark:to-red-600 transform rotate-12 opacity-20 animate-bounce"></div>
      </ParallaxElement>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <RevealText>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </RevealText>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const colorClasses = {
    blue: "border-l-blue-500 hover:shadow-blue-100 dark:hover:shadow-blue-900/20",
    purple: "border-l-purple-500 hover:shadow-purple-100 dark:hover:shadow-purple-900/20",
    green: "border-l-green-500 hover:shadow-green-100 dark:hover:shadow-green-900/20",
    pink: "border-l-pink-500 hover:shadow-pink-100 dark:hover:shadow-pink-900/20",
  }

  return (
    <AnimatedSection animation="scaleIn" delay={index * 150}>
      <Card
        ref={ref}
        className={cn(
          "hover:shadow-lg dark:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover-3d border-l-4",
          colorClasses[category.color as keyof typeof colorClasses],
        )}
      >
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-gray-900 dark:text-white text-center">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={cn("space-y-3 stagger-animation", isVisible && "in-view")}>
            {category.skills.map((skill: string, skillIndex: number) => (
              <div
                key={skill}
                className="group flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                style={{ transitionDelay: `${skillIndex * 50}ms` }}
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                    category.color === "blue" && "bg-blue-500 group-hover:bg-blue-600",
                    category.color === "purple" && "bg-purple-500 group-hover:bg-purple-600",
                    category.color === "green" && "bg-green-500 group-hover:bg-green-600",
                    category.color === "pink" && "bg-pink-500 group-hover:bg-pink-600",
                  )}
                ></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}
