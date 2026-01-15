import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ComicCard } from "@/components/ui/comic-card";
import { ComicBadge } from "@/components/ui/comic-badge";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-12">
        <h1 className="font-comic mb-12 text-center text-6xl">
          <span className="bg-golden inline-block -rotate-1 border-2 border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
            Dev Chronicles
          </span>
        </h1>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <ComicCard hoverEffect className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-mono text-sm font-bold text-[var(--color-text-muted-light)] dark:text-[var(--color-text-muted-dark)]">
                    {post.meta.date}
                  </span>
                  <div className="flex gap-2">
                    {post.meta.tags?.slice(0, 2).map((tag) => (
                      <ComicBadge key={tag} color="gray" className="text-xs">
                        {tag}
                      </ComicBadge>
                    ))}
                  </div>
                </div>
                <h2 className="font-comic text-[var(--color-text-heading-light)] dark:text-[var(--color-text-heading-dark)] group-hover:text-hero-blue mb-2 text-2xl transition-colors">
                  {post.meta.title}
                </h2>
                <p className="flex-grow text-[var(--color-text-body-light)] dark:text-[var(--color-text-body-dark)]">
                  {post.meta.excerpt}
                </p>
                <div className="text-hero-blue mt-4 text-sm font-bold tracking-wide uppercase">
                  Read Issue →
                </div>
              </ComicCard>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
