import Link from "next/link";
import DateComponent from "../components/date";

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <div className="text-lg">
        <DateComponent dateString={date} />
      </div>
      <h3 className="text-4xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
}
