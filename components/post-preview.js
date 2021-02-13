import Link from "next/link";
import DateComponent from "../components/date";

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h1 className="font-size:big">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
        <div className="subhead">
          <DateComponent dateString={date} />
        </div>
      </h1>
      <p>{excerpt}</p>
    </div>
  );
}
