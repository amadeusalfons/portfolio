"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: string
  link?: string
  github?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  icon,
  link,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <div className="relative h-full glass-card rounded-xl overflow-hidden transition-all duration-300">


        {/* Content */}
        <div className="p-6 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-3xl mb-3 block">{icon}</span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-sm mb-6 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 glass-card rounded-full text-xs text-foreground/70 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(link || github) && (
            <div className="flex gap-3 pt-4 border-t border-slate-700">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors group/link"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors group/link"
                >
                  <span>GitHub</span>
                  <Code className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
