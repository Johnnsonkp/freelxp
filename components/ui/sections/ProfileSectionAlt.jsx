import Link from "next/link";

export const ProfileSectionAlt = () => {
  return (
    <section className="relative -mt-28 mb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse ml-5 md:flex-row items-center md:items-start gap-8 md:gap-12">

          {/* Left: Headshot */}
          <div className="w-full md:w-1/3 flex-col justify-center md:justify-end">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-xl transform hover:scale-105 transition">
                <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-white dark:border-gray-900">
                  <img
                    src={"/headshot-bw.jpeg"}
                    alt="John Nkpolukwu headshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>

              {/* subtle position accent */}
              <div className="hidden sm:block absolute -bottom-3 -left-6 w-24 h-14 rounded-lg bg-gradient-to-r from-indigo-100 to-transparent opacity-60 transform rotate-12"></div>

              
            </div>

            <p className="inline-block px-3 py-1 mt-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-300 absolute top-28 left-60">
              Hi, I'm John 👋
            </p>
            {/* <div className="mt-1 flex items-center sm:justify-start justify-center md:justify-start gap-4">
              <a href="https://github.com/username" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.12 3.02.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.41.36.77 1.08.77 2.18 0 1.58-.02 2.86-.02 3.25 0 .31.2.67.79.56A10.51 10.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>

              <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.85 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1c1.37 0 2.5 1.12 2.5 2.5zM.5 8.5h3.98V24H.5V8.5zM8.5 8.5h3.82v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12V24h-3.98v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.88V24H8.5V8.5z"/>
                </svg>
              </a>
            </div> */}
            <h1 className="mt-5 text-1xl sm:text-[1.3rem] font-semibold leading-tight text-foreground text-start">
              Software Engineer | UX/UI Specialist.
            </h1>
          </div>

          <hr></hr>
          <hr></hr>

          {/* Right: Text / CTA */}
          <div className="w-full md:w-2/3 text-center md:text-left border-1 shadow-md relative top-20 rounded-md py-3 px-5">
            <p className="mt-2 mb-2 text-xl sm:text-1xl text-muted-foreground max-w-2xl">
              Software Engineer & UX/UI Specialist — I design and build usable,
              accessible web experiences with a focus on performance and clarity.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition">
                View Work
              </Link>

              <a
                href="mailto:john@example.com"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-border text-sm font-semibold text-foreground bg-white/50 hover:bg-white/60 transition"
              >
                Contact
              </a>

              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-0 sm:ml-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                Resume →
              </a> */}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
};