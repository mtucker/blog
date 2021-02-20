import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <h1 className="font-size:big">
        {title}
        <div className="subhead">
          <DateComponent dateString={date} />
        </div>
      </h1>
      {coverImage && (
        <div>
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
    </>
  );
}
