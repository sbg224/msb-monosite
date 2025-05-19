"use client";
import Link from "next/link";
import { useState } from "react";
import blogs from "../../database/blogData.json";

// Types pour les articles
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

// Tags disponibles
const availableTags = [
  "Web Development",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "AI",
  "Performance",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Filtrer les articles en fonction du terme de recherche et du tag sélectionné
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearchTerm =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedTag =
      selectedTag === "" || post.tags.includes(selectedTag);
    return matchesSearchTerm && matchesSelectedTag;
  });

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-poppins text-4xl font-bold text-center mb-12">
          Blog
        </h1>

        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <option value="">Tous les tags</option>
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Tags populaires */}
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-[#0077b6] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[#0077b6] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des articles filtrés */}
        <div className="space-y-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-poppins text-2xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#0077b6]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-[#0077b6] hover:underline"
                >
                  en savoir plus →
                </a>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500">Aucun article trouvé.</p>
          )}
        </div>
      </div>
    </main>
  );
}
