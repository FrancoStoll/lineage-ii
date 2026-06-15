import Link from "next/link";
import { NAV_LINKS } from "@/data/nav";

export const MenuDesktop = () => {
  return (
    <ul className="hidden flex-1 items-center justify-center gap-9 xl:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group relative text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-title"
          >
            {link.label}
            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
