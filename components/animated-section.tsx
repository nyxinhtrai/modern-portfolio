"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    fadeInUp: isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8",
    fadeInLeft: isVisible ? "animate-fadeInLeft" : "opacity-0 -translate-x-8",
    fadeInRight: isVisible ? "animate-fadeInRight" : "opacity-0 translate-x-8",
    fadeIn: isVisible ? "animate-fadeIn" : "opacity-0",
    scaleIn: isVisible ? "animate-scaleIn" : "opacity-0 scale-95",
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  )
}
