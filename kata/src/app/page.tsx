export default function Page() {
  return (
    <>
    <header className="top-0 w-full px-4 sm:fixed backdrop-blur from-[#282828] to-bg-zinc-900/50">
      <div className="flex flex-row mx-auto items-center justify-between h-16 sm:h-20relative">
        <a href="/">term</a>
        <nav className="hidden md:flex flex-1 justify-center absolute left-0 right-0">
          <ul className="flex items-center gap-8 lg:gap-12 xl:gap-32">
            <li><a href="/">Home</a></li>
            <li><a href="/plans">Plans</a></li>
            <li><a href="">Discord</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>

    </main>
    <footer>

    </footer>
    </>
  )
}