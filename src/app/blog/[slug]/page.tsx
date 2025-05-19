import { Metadata } from "next";
import fs from "fs";
import path from "path";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  link: string;
  content: string;
}

interface BlogPostProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const filePath = path.join(process.cwd(), "src", "database", "blogData.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const posts: BlogPost[] = JSON.parse(fileContent);
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return { title: "Article non trouvé" };
    }

    return { title: post.title };
}

export default function BlogPostPage({ params }: BlogPostProps) {
    const filePath = path.join(process.cwd(), "src", "database", "blogData.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const posts: BlogPost[] = JSON.parse(fileContent);
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return <div className="container mx-auto px-4 py-8">Article non trouvé</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="">{post.excerpt}</p>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-lg mb-8">{post.content}</p>
            <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition"
            >
                Lire l'article complet
            </a>
        </div>
    );
}