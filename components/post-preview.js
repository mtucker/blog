import Link from "next/link";
import DateComponent from "../components/date";

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <div>
        <DateComponent dateString={date} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <p>{excerpt}</p>
    </div>
  );
}
