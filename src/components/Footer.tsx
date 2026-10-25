import { siteConfig } from "@/content/siteConfig";

export function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-outline-variant/40 mt-space-xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="text-center md:text-left">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {siteConfig.footer.copyright}
          </p>
        </div>
        <div className="flex items-center gap-6">
          {siteConfig.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 min-h-[44px] flex items-center"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
