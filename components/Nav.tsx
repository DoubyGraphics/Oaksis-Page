"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-display text-lg tracking-tight text-sand">
          Oaksis
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm text-sand/80 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring transition hover:text-oasis"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="focus-ring rounded-full bg-oasis px-5 py-2 text-oak transition hover:bg-sand"
          >
            Start a project
          </Link>
        </nav>

        <button
          className="focus-ring text-sand md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {open ? (
              <path
                d="M6 6L20 20M20 6L6 20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 8H22M4 13H22M4 18H22"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-oak px-6 pb-6 font-body text-base text-sand/90 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring border-b border-sand/10 py-3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="focus-ring mt-4 inline-block w-fit rounded-full bg-oasis px-5 py-2 text-sm text-oak"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
