"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ end, duration = 2000, className, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isVisible) {
      const step = Math.ceil(end / (duration / 16))

      if (timerRef.current) clearInterval(timerRef.current)

      timerRef.current = setInterval(() => {
        countRef.current += step

        if (countRef.current >= end) {
          countRef.current = end
          setCount(end)
          if (timerRef.current) clearInterval(timerRef.current)
        } else {
          setCount(countRef.current)
        }
      }, 16)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
