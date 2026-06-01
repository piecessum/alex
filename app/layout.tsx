import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Алексей Масюта — Бизнес-аналитик",
  description:
    "Бизнес-аналитик с дизайнерским бэкграундом. 5+ лет в B2B-продуктах. SQL, BPMN, User Stories, Figma, Jira, Confluence.",
  keywords: [
    "бизнес-аналитик",
    "business analyst",
    "BA",
    "Алексей Масюта",
    "UX/UI",
    "B2B",
    "Санкт-Петербург",
  ],
  authors: [{ name: "Алексей Масюта" }],
  openGraph: {
    title: "Алексей Масюта — Бизнес-аналитик",
    description:
      "Бизнес-аналитик с дизайнерским бэкграундом. 5+ лет в B2B-продуктах.",
    type: "profile",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
