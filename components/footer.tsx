import { Github, Linkedin, Mail, Facebook } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeInUp">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 animate-pulse">Ny Nguyen</h3>
              <p className="text-gray-400 dark:text-gray-500">Front-End Developer & UI/UX Specialist</p>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/nyxinhtrai", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/enpysen/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/enpysen/", label: "Facebook" },
                { icon: Mail, href: "mailto:npsony2@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Ny Nguyen. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
