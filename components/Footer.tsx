export default function Footer() {
  return (
    <footer className="bg-oak px-6 py-10 text-sand/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-sand/10 pt-8 font-body text-xs md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Oaksis Studio. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="focus-ring hover:text-oasis">
            Instagram
          </a>
          <a href="#" className="focus-ring hover:text-oasis">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
