"use client"

import { useState } from "react"
import { initialProjects, type Project } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { AddProjectDialog } from "@/components/add-project-dialog"

export function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Recent projects
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <AddProjectDialog
          onAdd={(project) => setProjects((prev) => [...prev, project])}
        />
      </div>
    </section>
  )
}
