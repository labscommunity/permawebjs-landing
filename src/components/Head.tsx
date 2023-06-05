import { PropsWithChildren } from "react";
import NextHead from "next/head";

export default function Head({
  children,
  title = "Arweave Kit",
  description = "Leverage the power of the Arweave ecosystem to build quickly and simply on the permaweb.",
  image = "https://arweave-kit.dev/og.png"
}: PropsWithChildren<Props>) {
  return (
    <NextHead>
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://arweave-kit.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:site_name" content="Arweave Kit" />
      {children}
    </NextHead>
  );
}

interface Props {
  title?: string;
  description?: string;
  image?: string;
}
