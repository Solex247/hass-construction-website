import Image from "next/image";
import { ArrowUpRight, CheckIcon, PhoneIcon } from "./icons";
import { SiteHeader } from "./site-header";

const projects = [
  { image: "/images/project-completed-01.webp", title: "Modern Family Residence", tag: "Residential" },
  { image: "/images/project-completed-02.webp", title: "Contemporary Home", tag: "Design + Build" },
  { image: "/images/project-completed-03.webp", title: "Elegant Urban Residence", tag: "Residential" },
  { image: "/images/project-exterior-03.webp", title: "Architectural Exterior", tag: "New Build" },
];

const services = [
  ["01", "New Construction", "From concept to handover, we manage the details that turn architectural ideas into lasting spaces."],
  ["02", "Renovation & Remodeling", "Thoughtful upgrades that improve how a home looks, feels and performs without losing its character."],
  ["03", "Project Management", "Clear coordination, quality control and dependable delivery across every stage of your project."],
];

const process = [
  ["01", "Discover", "We understand your brief, site, priorities and the outcome you want to create."],
  ["02", "Plan", "We shape the scope, materials, timelines and practical decisions before work begins."],
  ["03", "Build", "Our team coordinates the work with care, keeping quality, communication and detail in focus."],
  ["04", "Deliver", "We finish with a careful handover so the result is ready to be lived in and enjoyed."],
];

export function HomePage() {
  return (
    <main id="top" className="overflow-hidden">
      <SiteHeader />

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#111312] text-white lg:min-h-[850px]">
        <Image src="/images/project-exterior-03.webp" alt="Hass Construction completed home" fill priority sizes="100vw" className="hero-kenburns object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,9,.9)_0%,rgba(8,10,9,.55)_48%,rgba(8,10,9,.25)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-transparent to-black/20" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 lg:min-h-[850px] lg:px-8 lg:pb-24">
          <div className="max-w-4xl reveal">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[.3em] text-[#e4b978]">Building for Generations</p>
            <h1 className="display-font max-w-4xl text-6xl leading-[.9] sm:text-7xl lg:text-[8rem]">Spaces made to <em className="font-normal text-white/60">last.</em></h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">Hass Construction Company delivers considered residential spaces with a focus on craftsmanship, clarity and enduring quality.</p>
              <a href="#projects" className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[.16em]">Explore our work <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-black transition group-hover:rotate-45"><ArrowUpRight /></span></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden text-[10px] uppercase tracking-[.28em] text-white/40 lg:block">Scroll to explore ↓</div>
      </section>

      <section id="about" className="bg-[#f6f4ef] py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#a66d29]">01 / About us</p></div>
          <div>
            <h2 className="display-font max-w-4xl text-4xl leading-[1.03] sm:text-5xl lg:text-7xl">We build with the belief that <span className="text-[#9c8d79]">good spaces</span> should keep giving back.</h2>
            <div className="mt-10 grid gap-8 border-t border-[#dedbd2] pt-8 sm:grid-cols-2">
              <p className="text-[15px] leading-7 text-[#66645f]">From the first conversation to the final detail, our approach is grounded in practical thinking, honest communication and a respect for the craft.</p>
              <p className="text-[15px] leading-7 text-[#66645f]">Whether it is a new home, a thoughtful renovation or a complex build, we aim for work that feels calm, considered and made to endure.</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Craftsmanship", "Clear communication", "Quality materials", "Reliable delivery"].map(x => <span key={x} className="rounded-full border border-[#d7d3ca] px-4 py-2 text-xs text-[#57544f]">{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#e4b978]">02 / What we do</p><h2 className="display-font mt-4 text-5xl lg:text-7xl">Built around <em className="font-normal text-white/50">your</em> vision.</h2></div><p className="max-w-md text-sm leading-6 text-white/50">A focused set of services for clients who value thoughtful execution from first sketch to final handover.</p></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map(([num, title, copy]) => <div key={num} className="group grid gap-5 py-9 transition hover:bg-white/[.025] md:grid-cols-[100px_1fr_1fr] md:items-start"><span className="text-xs tracking-[.2em] text-[#e4b978]">{num}</span><h3 className="display-font text-3xl sm:text-4xl">{title}</h3><p className="max-w-lg text-sm leading-6 text-white/50 transition group-hover:text-white/70">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#f6f4ef] py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#a66d29]">03 / Selected work</p><h2 className="display-font mt-4 text-5xl lg:text-7xl">Built to be <em className="font-normal text-[#9c8d79]">lived in.</em></h2></div><span className="hidden text-sm text-[#77736c] sm:block">Selected projects / 2026</span></div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => <article key={project.title} className={`group ${i === 1 || i === 2 ? "md:mt-20" : ""}`}><div className="relative aspect-[4/3] overflow-hidden bg-[#ddd8cf]"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-black">{project.tag}</span></div><div className="flex items-start justify-between gap-4 border-b border-[#dedbd2] py-5"><div><h3 className="display-font text-2xl">{project.title}</h3><p className="mt-1 text-xs text-[#77736c]">Hass Construction Company</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#cfcac0] transition group-hover:bg-black group-hover:text-white"><ArrowUpRight /></span></div></article>)}
          </div>
        </div>
      </section>

      <section id="process" className="relative bg-[#e9e4da] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#a66d29]">04 / Our process</p><h2 className="display-font mt-5 max-w-lg text-5xl leading-[.98] lg:text-7xl">Simple, clear, <em className="font-normal text-[#8d7b64]">intentional.</em></h2><p className="mt-7 max-w-md text-sm leading-6 text-[#66645f]">Great construction does not need to feel complicated. We keep the journey structured so you always know what happens next.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{process.map(([num, title, copy]) => <div key={num} className="rounded-[1.5rem] border border-black/10 bg-white/50 p-7 backdrop-blur-sm"><span className="text-xs tracking-[.2em] text-[#a66d29]">{num}</span><h3 className="display-font mt-10 text-3xl">{title}</h3><p className="mt-4 text-sm leading-6 text-[#6d6961]">{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f6f4ef] py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#1a1c1a]"><Image src="/images/construction-detail-01.webp" alt="Construction detail and craftsmanship" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><p className="absolute bottom-7 left-7 max-w-sm text-sm leading-6 text-white/75">Every line, joint and finish contributes to the feeling of the finished space.</p></div>
          <div className="flex flex-col justify-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#a66d29]">The detail matters</p><h2 className="display-font mt-5 text-5xl leading-[.98] lg:text-6xl">The difference is in the <em className="font-normal text-[#9c8d79]">details.</em></h2><div className="mt-10 space-y-5">{["Practical planning before construction", "Attention to material and finish quality", "Consistent communication throughout", "A considered handover at completion"].map(x => <div key={x} className="flex items-center gap-3 border-b border-[#dedbd2] pb-5 text-sm"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#171817] text-white"><CheckIcon /></span>{x}</div>)}</div></div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#111312] text-white">
        <div className="absolute inset-0 opacity-30"><Image src="/images/contact-banner.webp" alt="" fill sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111312_0%,rgba(17,19,18,.92)_45%,rgba(17,19,18,.55)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl"><p className="text-xs font-semibold uppercase tracking-[.28em] text-[#e4b978]">05 / Start a conversation</p><h2 className="display-font mt-5 text-6xl leading-[.9] sm:text-7xl lg:text-[8rem]">Let&apos;s build <em className="font-normal text-white/50">something</em> lasting.</h2><p className="mt-8 max-w-xl text-base leading-7 text-white/60">Have a project in mind? Tell us what you are planning and we&apos;ll start the conversation.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="mailto:hello@hassconstruction.com" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5">Discuss a project <ArrowUpRight /></a><a href="tel:+2340000000000" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"><PhoneIcon /> Call us</a></div></div>
        </div>
      </section>

      <footer className="bg-[#111312] px-5 pb-8 text-white lg:px-8"><div className="mx-auto max-w-7xl border-t border-white/10 pt-7"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="text-xs text-white/40">© 2026 Hass Construction Company. Building for generations.</p><div className="flex gap-5 text-xs text-white/40"><a href="#about" className="hover:text-white">About</a><a href="#projects" className="hover:text-white">Projects</a><a href="#contact" className="hover:text-white">Contact</a></div></div></div></footer>
    </main>
  );
}
