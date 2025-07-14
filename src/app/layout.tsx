import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koriche Haithem - Full Stack Developer",
  description: "Portfolio of Koriche Haithem, a passionate Full Stack Developer specializing in Laravel, PHP, WordPress, and modern web technologies. Explore my projects and get in touch for collaboration.",
  keywords: ["Full Stack Developer", "Laravel", "PHP", "WordPress", "Flutter", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Koriche Haithem" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
