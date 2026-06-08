export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div id="studio" className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Have a project in mind? Let&apos;s build something lasting.
            </h2>
            <a
              href="mailto:studio@ezrayeh.com"
              className="mt-6 inline-block text-lg text-primary underline-offset-4 hover:underline"
            >
              studio@ezrayeh.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:justify-items-end">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground">Studio</span>
              <span className="text-muted-foreground">Work</span>
              <span className="text-muted-foreground">Approach</span>
              <span className="text-muted-foreground">Journal</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground">Social</span>
              <span className="text-muted-foreground">Instagram</span>
              <span className="text-muted-foreground">LinkedIn</span>
              <span className="text-muted-foreground">Behance</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Ezrayeh Projects. All rights reserved.</span>
          <span>Architecture &amp; Design Studio</span>
        </div>
      </div>
    </footer>
  )
}
