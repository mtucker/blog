import Link from "next/link";
import DateComponent from "../components/date";

export default function HeroPost({ title, date, excerpt, slug }) {
  return (
    <section>
      <div>
        <DateComponent dateString={date} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <p>{excerpt}</p>
    </section>
  );
}
