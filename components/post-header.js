import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div>
        <div>
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
