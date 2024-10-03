import { Metadata } from "next"

import { SITE_URL } from "./constants"

const title = "Salman's Portfolio"
const description =
  "An accomplished software engineer with a strong reputation and extensive experience in the field of Software Engineering, specializing in Frontend Web Development. Proven track record of delivering high-quality solutions and driving success through innovative and efficient coding practices."

export const baseMetadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}`),
  title: {
    default: `${title}`,
    template: `${title} | %s`,
  },
  openGraph: {
    type: "website",
    title: `${title}`,
    description: `${description}`,
    siteName: `${title}`,
    images: [
      {
        url: `/icons/richlink.jpg`,
      },
    ],
  },
  icons: [
    { rel: "icon", url: "/icons/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
  ],
  twitter: {
    card: "summary_large_image",
    site: `${title}`,
    creator: "Salman",
    images: `/icons/richlink.jpg`,
  },
  description: `${description}`,
  authors: [{ name: "Salman", url: "http://localhost:3000" }],
}
