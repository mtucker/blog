import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div>
          {preview ? (
            <>
              This is page is a preview.{" "}
              <a href="/api/exit-preview">Click here</a> to exit preview mode.
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
