// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import { MetadataRoute } from "next"

const pages = [""]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: Array<{ url: string; lastModified: Date | string }> = [
    ...pages.map((item) => ({
      url: `${process.env.SITE_URL}${item}`,
      lastModified: new Date(),
    })),
  ]

  return links
}
