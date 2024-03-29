import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "../app/globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginification",
  description: "AI-powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
// IBM Plex is a typeface family designed by IBM. It's an open-source typeface that was created to be the global font for IBM — for both digital and print use. It includes a variety of styles such as sans-serif, serif, and monospace, making it suitable for a wide range of applications, from user interfaces to editorial design. IBM Plex is freely available for anyone to download, use, and modify under the SIL Open Font License.