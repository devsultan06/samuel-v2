export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6 text-white">
      <main className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Ready to Build
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Next.js + Tailwind CSS <span className="text-purple-400">v3</span>
        </h1>

        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Your project has been successfully bootstrapped with the Next.js App
          Router, TypeScript, and Tailwind CSS v3 configured.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
            <h3 className="font-semibold text-white">⚡ Next.js App Router</h3>
            <p className="mt-1 text-sm text-slate-400">
              Server components, fast routing, and modern React 19 architecture.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
            <h3 className="font-semibold text-white">🎨 Tailwind CSS v3</h3>
            <p className="mt-1 text-sm text-slate-400">
              Utility-first styling with PostCSS and autoprefixer configured.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Next.js Docs
          </a>
          <a
            href="https://v3.tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Tailwind v3 Docs
          </a>
        </div>
      </main>
    </div>
  );
}
