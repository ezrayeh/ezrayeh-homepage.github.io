"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import type { Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const categories = ["Architecture", "Interior", "Product", "Concept"]

export function AddProjectDialog({
  onAdd,
}: {
  onAdd: (project: Project) => void
}) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Architecture")
  const [year, setYear] = useState(String(new Date().getFullYear()))
  const [description, setDescription] = useState("")

  function reset() {
    setTitle("")
    setCategory("Architecture")
    setYear(String(new Date().getFullYear()))
    setDescription("")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      year: year.trim() || String(new Date().getFullYear()),
      description:
        description.trim() || "A new project added to the studio portfolio.",
      image: "/projects/project-1.png",
    })
    reset()
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-secondary/40 p-5 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-foreground"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-background text-primary transition-transform group-hover:scale-110">
          <Plus className="size-5" />
        </span>
        <span className="text-sm font-medium">Add a project</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new project</DialogTitle>
            <DialogDescription>
              Add a project card to your studio portfolio.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Project title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Maison Lumière"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="2025"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A short description of the project."
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Add project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}
