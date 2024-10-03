// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  }
}
