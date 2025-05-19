// /src/app/api/rss.js

import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	tags: string[];
	slug: string;
	link: string;
}

export async function GET(req: NextRequest) {
	const filePath = path.join(process.cwd(), "src", "database", "blogData.json");
	const fileContent = fs.readFileSync(filePath, "utf8");
	const posts: BlogPost[] = JSON.parse(fileContent);

	const rssItems = posts
		.map(({ title, slug, date, excerpt, link, tags }: BlogPost) => {
			const categoryTags = tags
				.map((tag) => `<category><![CDATA[${tag}]]></category>`)
				.join("");

			return `
          <item>
              <title><![CDATA[${title}]]></title>
              <link>${link}</link>
              <description><![CDATA[${excerpt}]]></description>
              <pubDate>${new Date(date).toUTCString()}</pubDate>
              <guid>${link}</guid>
              ${categoryTags}
          </item>
      `;
		})
		.join("");

	const rssFeed = `
      <?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
          <channel>
              <title>Mon Blog</title>
              <link>${process.env.NEXT_PUBLIC_SITE_URL}</link>
              <description>Les derniers articles de mon blog</description>
              ${rssItems}
          </channel>
      </rss>
  `;

	return new NextResponse(rssFeed, {
		headers: {
			"Content-Type": "application/rss+xml; charset=UTF-8",
		},
	});
}
