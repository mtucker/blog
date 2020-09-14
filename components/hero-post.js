import Link from "next/link";
import DateComponent from "../components/date";

export default function HeroPost({ title, date, excerpt, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-0 text-lg">
        <DateComponent dateString={date} />
      </div>
      <h3 className="mb-8 text-4xl lg:text-6xl leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-8">{excerpt}</p>
    </section>
  );
}
