import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hashtagash.com"),
  title: {
    default: "Ajay | AI-First Quality Engineering, Consulting & Teaching",
    template: "%s | Hashtag Ash"
  },
  description:
    "AI evaluation, enterprise quality engineering, automation, data quality, technical storytelling, Carnatic music, high-school mathematics and chess instruction.",
  keywords: [
    "AI evaluator",
    "quality engineering consultant",
    "SDET",
    "test automation",
    "data quality",
    "Carnatic music teacher",
    "high school math tutor",
    "chess coach"
  ],
  openGraph: {
    title: "Ajay | AI-First Consultant, Builder & Teacher",
    description:
      "Helping businesses build trustworthy software and helping learners develop confidence through music, mathematics and chess.",
    type: "website",
    url: "https://www.hashtagash.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
