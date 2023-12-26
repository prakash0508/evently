import { Poppins } from "next/font/google";
import "../lib/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${poppins.variable}`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
