"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "./animated-section"
import { RevealText } from "./reveal-text"
import { ParallaxElement } from "./parallax-element"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Your EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_rmjja2q"
  const EMAILJS_PUBLIC_KEY = "8qp-h3e6PLCBa8oU2"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    try {
      console.log("Attempting to send email...")

      // Use the send method with template parameters instead of sendForm
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ny Nguyen",
        reply_to: formData.email,
      }

      console.log("Template params:", templateParams)

      // Try to send with a basic template first, then fallback to direct send
      let result
      try {
        // First try with your service and a basic template
        result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          "template_basic", // Try a basic template name
          templateParams,
          EMAILJS_PUBLIC_KEY,
        )
      } catch (templateError) {
        console.log("Template not found, trying direct send...")
        // If template fails, try direct send to your email
        result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          "service_rmjja2q", // Use your service ID as template fallback
          {
            to_email: "npsony2@gmail.com",
            subject: `Portfolio Contact from ${formData.name}`,
            message: `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
          `,
            reply_to: formData.email,
          },
          EMAILJS_PUBLIC_KEY,
        )
      }

      console.log("Email sent successfully:", result)

      if (result.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error: any) {
      console.error("Failed to send email:", error)

      // Provide helpful error message
      if (error.text && error.text.includes("template")) {
        setError(
          "Email template not configured. Please go to https://dashboard.emailjs.com/admin/templates and create a template with ID 'template_basic', or contact me directly at npsony2@gmail.com",
        )
      } else if (error.text && error.text.includes("service")) {
        setError("Email service configuration issue. Please contact me directly at npsony2@gmail.com")
      } else {
        setError("Failed to send message. Please try again or contact me directly at npsony2@gmail.com")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Floating orbs */}
      <ParallaxElement className="absolute top-16 left-20" speed={0.05} direction="up">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-400 dark:from-purple-600 dark:to-pink-700 rounded-full opacity-30 animate-bounce"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute bottom-40 right-24" speed={0.08} direction="down">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-400 dark:from-blue-600 dark:to-purple-700 rounded-full opacity-25 animate-pulse"></div>
      </ParallaxElement>
      <ParallaxElement className="absolute top-1/2 left-1/3" speed={0.1} direction="left">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-blue-400 dark:from-pink-600 dark:to-blue-700 rounded-full opacity-20 animate-ping"></div>
      </ParallaxElement>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <RevealText>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </RevealText>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div>
              <RevealText>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              </RevealText>
              <RevealText delay={200}>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always excited to discuss new front-end projects, collaborate on innovative designs, or chat about
                  the latest web technologies. Let's create something amazing together!
                </p>
              </RevealText>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "npsony2@gmail.com", href: "mailto:npsony2@gmail.com" },
                  { icon: Phone, title: "Phone", value: "0383292291", href: "tel:0383292291" },
                ].map((item, index) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:animate-pulse" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={400}>
            <Card className="hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <svg
                        className="w-8 h-8 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <Input
                        type="text"
                        name="name" // Change back to "name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <Input
                        type="email"
                        name="email" // Change back to "email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <Textarea
                        name="message" // EmailJS default field name
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
