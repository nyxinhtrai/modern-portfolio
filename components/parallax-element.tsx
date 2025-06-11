"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxElement({ children, className, speed = 0.1, direction = "up" }: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const elementTop = ref.current.getBoundingClientRect().top + scrollY
      const offset = (scrollY - elementTop) * speed

      let transform = ""
      switch (direction) {
        case "up":
          transform = `translateY(${-offset}px)`
          break
        case "down":
          transform = `translateY(${offset}px)`
          break
        case "left":
          transform = `translateX(${-offset}px)`
          break
        case "right":
          transform = `translateX(${offset}px)`
          break
      }

      ref.current.style.transform = transform
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}
