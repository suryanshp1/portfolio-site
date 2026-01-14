import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ComicButton } from "@/components/ui/comic-button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="bg-light-bg dark:bg-dark-bg flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-3xl flex-grow px-4 py-12">
        <Link href="/blog">
          <ComicButton
            variant="outline"
            className="sticky top-24 mb-8 py-2 pr-6 pl-4 text-sm"
          >
            <ArrowLeft className="mr-2 inline h-4 w-4" /> Back to Chronicles
          </ComicButton>
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8 border-b-2 border-black pb-8 dark:border-white">
            <h1 className="font-comic text-text-primary mb-4 text-5xl dark:text-white">
              {post.meta.title}
            </h1>
            <div className="flex gap-4 text-sm font-bold text-gray-500">
              <span>{post.meta.date}</span>
              <span>•</span>
              <span className="text-hero-blue">
                {post.meta.tags?.join(", ")}
              </span>
            </div>
          </div>

          <div className="mdx-content">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
