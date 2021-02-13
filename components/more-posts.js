import Link from "next/link";

export default function MorePosts({ posts }) {
  return (
    <section>
      <h3>Other Posts</h3>
      <div>
        {posts.map((post) => (
          <p key={post.slug}>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>{post.title}</a>
            </Link>
          </p>
        ))}
      </div>
    </section>
  );
}
