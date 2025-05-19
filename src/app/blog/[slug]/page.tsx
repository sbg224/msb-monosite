import React from 'react';
import { Metadata } from 'next';
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// ✅ Définition de l'interface BlogPost
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

// ✅ Définition correcte des types pour les props
interface PageProps {
  params: Promise<{ slug: string }>;
}

// ✅ Fonction pour générer les métadonnées pour SEO
export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article non trouvé" };
  }

  return { title: post.title, description: post.excerpt };
};

// ✅ Fonction pour récupérer un article par son slug
async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "database",
      "blogData.json"
    );
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    const posts: BlogPost[] = JSON.parse(fileContent);
    return posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error("Erreur lors du chargement des articles :", error);
    return null;
  }
}

// ✅ Composant principal pour afficher l’article
const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
    return null; // Added return here
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-vintage-cream text-vintage-brown rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-merriweather text-4xl font-bold mb-6 text-vintage-brown">
          {post.title}
        </h1>
        <time className="text-gray-500 mb-8 block">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-700">{post.excerpt}</p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-vintage-terracotta text-white rounded-lg shadow-vintage hover:shadow-vintage-hover transform hover:-translate-y-1 transition-all duration-300"
          >
            Lire l’article complet →
          </a>
        </div>
      </div>
    </article>
  );
};

// ✅ Génération des chemins statiques pour le pré-rendu
export async function generateStaticParams(): Promise<{ params: { slug: string } }[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "database",
      "blogData.json"
    );
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    const posts: BlogPost[] = JSON.parse(fileContent);
    return posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (error) {
    console.error("Erreur lors de la génération des chemins statiques :", error);
    return [];
  }
}

export default BlogPostPage;