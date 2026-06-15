import Link from "next/link";
import { FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";

const COLUMNS = [
  {
    title: "Game",
    links: ["Classes", "Features", "Epic Bosses", "Download"],
  },
  {
    title: "Community",
    links: ["Discord", "Forum", "Rankings", "Events"],
  },
  {
    title: "Support",
    links: ["Help Center", "Account", "Rules", "Contact"],
  },
];

const SOCIALS = [
  { href: "https://discord.com", label: "Discord", Icon: FaDiscord },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://twitter.com", label: "Twitter", Icon: FaTwitter },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-surface">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-gold-gradient">
              Lineage II
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary">
              Shield of the Kingdom. An eternal world of sieges, dragons and
              glory, forged for true heroes.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-secondary transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-title">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-secondary transition-colors hover:text-gold"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-secondary sm:flex-row sm:text-left">
          <p>© {year} Lineage II — Shield of the Kingdom. All rights reserved.</p>
          <p>Fan project. Not affiliated with or endorsed by NCSOFT.</p>
        </div>
      </div>
    </footer>
  );
};
