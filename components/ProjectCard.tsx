"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: string
  accentColor: string
  link?: string
  github?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  icon,
  accentColor,
  link,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
        {/* Gradient accent on hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

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
                className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-foreground/70 group-hover:border-primary/30 transition-colors"
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
