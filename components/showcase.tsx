import Image from "next/image"

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border/60">
        <Image
          src="/projects/showcase.png"
          alt="Featured project: a minimalist modern villa surrounded by nature at golden hour"
          width={1600}
          height={900}
          className="h-[320px] w-full object-cover md:h-[560px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-background/80">
            Featured Project
          </p>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-background md:text-4xl">
            Villa Aurora — a retreat composed of light, stone, and landscape.
          </h2>
        </div>
      </div>
    </section>
  )
}
