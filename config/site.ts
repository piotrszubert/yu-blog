import { SiteConfig } from "@/types/config"

export const siteConfig: SiteConfig = {
  site: {
    name: "Yu",
    description:
      "An open source blog application built using the new router, server components",
    url: "https://yu-blog-eight.vercel.app",
    ogImage: "https://yu-blog-eight.vercel.app/api/og",
  },
  content: {
    progressBar: {
      display: true,
    },
    hero: {
      display: true,
      displayAvatar: true,
      avatarPath: "/images/avatar.jpg",
      heading: "",
      subheading: "",
    },
  },
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    mail: "mail@example.com",
  },
  theme: "light",
}
