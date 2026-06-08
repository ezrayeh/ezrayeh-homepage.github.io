import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Ezrayeh Projects
          </span>
          <span className="text-xs text-muted-foreground">
            Architecture &amp; Design Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href="#work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link
            href="#showcase"
            className="transition-colors hover:text-foreground"
          >
            Showcase
          </Link>
          <Link
            href="#studio"
            className="transition-colors hover:text-foreground"
          >
            Studio
          </Link>
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}
