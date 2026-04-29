import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
          { url: "https://trexpenser.vercel.app", lastModified: new Date() },
        {
            url: "https://trexpenser.vercel.app/privacy",
            lastModified: new Date()
        },
        { url: "https://trexpenser.vercel.app/terms", lastModified: new Date() }
    ];
}
 