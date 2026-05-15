import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DishProfit — Track Real Profit Margins Per Menu Item",
  description: "Connect your POS and ingredient costs to see exactly which dishes make you money. Real-time profit per dish for independent restaurant owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c44d86ef-4e82-4a0c-94d7-c5d71986b73a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
