import Link from "next/link";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Products/Service", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
            U
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              UnliTravel
            </p>
            <p className="text-base font-bold text-black">Loan Services</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Apply for Loan
        </a>
      </div>
    </header>
  );
}