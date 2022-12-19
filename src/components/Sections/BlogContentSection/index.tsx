import * as Styles from "./styles";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";
import IframeVideo from "components/IframeVideo";
import theme from "styles/theme";
import Container from "components/Container";
import { formatDate } from "utils/format";

export type colorsType = typeof theme.colors;

type BlogContentSectionProps = {
  className?: string;
  title: string;
  dangerousHtml: string;
  publishedAt: string;
  author?: string;
  videoUrl?: string;
  mainColor?: keyof colorsType;
};

export const BlogContentSection = ({
  className,
  dangerousHtml,
  title,
  publishedAt,
  author,
  videoUrl,
  mainColor = "green",
}: BlogContentSectionProps) => {
  console.log(publishedAt);

  return (
    <Styles.Wrapper className={className} $color={mainColor}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.PostInfo>
        <span>
          <b>
            <PersonIcon />
            Autor:
          </b>{" "}
          {author}
        </span>
        <span>
          <b>
            <CalendarIcon />
            Data de publicação:
          </b>{" "}
          {formatDate(new Date(publishedAt))}
        </span>
      </Styles.PostInfo>
      <Container style={{ padding: "0 2rem" }}>
        <Styles.Content dangerouslySetInnerHTML={{ __html: dangerousHtml }} />
      </Container>
      <Container className="iframe-video" style={{ padding: "2rem 2rem" }}>
        {videoUrl && <IframeVideo urlVideo={videoUrl} />}
      </Container>
    </Styles.Wrapper>
  );
};
