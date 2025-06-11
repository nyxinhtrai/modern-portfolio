"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden transition-all duration-700 ease-out", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "transform transition-transform duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
