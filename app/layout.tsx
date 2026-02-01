import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD - Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA",
  description: "Licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, panic, trauma, and burnout. Evidence-based approaches including CBT, EMDR, and mindfulness. In-person and telehealth sessions available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
