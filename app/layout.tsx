import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haplos — Smart Grocery Lists',
  description:
    'Organize your grocery shopping with smart lists, categories, recipe imports, sharing, and Siri integration.',
  openGraph: {
    title: 'Haplos — Smart Grocery Lists',
    description:
      'Organize your grocery shopping with smart lists, categories, recipe imports, sharing, and Siri integration.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              <Image
                src="/images/Haplos_App_Icon.png"
                alt="Haplos"
                width={36}
                height={36}
              />
              Haplos
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-inner">
            <ul className="footer-links">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/haplos/id6760237903"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </li>
            </ul>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Haplos. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
