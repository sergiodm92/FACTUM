"use client";
import { useTheme } from "../../contexts/ThemeContext";
import { socialLinks, platformLinks, legalLinks, communityLinks } from "./data";
import logoDark from "@images/logos/logo-dark.png";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

export const Footer = () => {
  const date = new Date()
  const { theme } = useTheme();
  return (
    <footer id="footer" className="relative bg-gray-400 dark:bg-gray-600 w-full ">
      <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'dark' ? '#2D3748' : '#f3f4f6'} fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </path>
      </svg>
      <>
        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 m-auto">
          <div className="col-span-full xl:col-span-2 pl-24">
            {/* Title-logo */}
            <a href="/" className="flex items-center gap-3">
            <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-black dark:text-white">
              FAC
            </a>
            <a href="#" className="text-2xl font-bold text-orange-500">
              T
            </a>
            <a href="#" className="text-2xl font-bold text-black dark:text-white">
              UM
            </a>
          </div>
            </a>
          </div>
          <FooterColumn title="Follow Us" links={socialLinks} />
          <FooterColumn title="Platforms" links={platformLinks} />
          <FooterColumn title="Community" links={communityLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </section>

        <section id="bottom" className="container pb-14 text-center m-auto">
          <h3>
            &copy; { } FACTUM {date.getFullYear()} {" "} all rights reserved.
           
          </h3>
        </section>
      </>
    </footer>
  );
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="font-bold text-lg">{title}</h3>
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="opacity-60 hover:opacity-100"
      >
        {link.label}
      </a>
    ))}
  </div>
);

