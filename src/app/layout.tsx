import { Metadata } from "next"
import { Manrope } from "next/font/google";
import { PropsWithChildren } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/icon.png" }],
  title: "Permaweb JS",
  description: "One-stop library for builders on Arweave"
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
