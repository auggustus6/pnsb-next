import * as Styles from "./styles";

type IframeVideoProps = {
  className?: string;
  urlVideo: string;
  width?: number;
};

function getId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

const IframeVideo = ({
  className,
  urlVideo,
  width = 800,
}: IframeVideoProps) => {
  const embed = "//www.youtube.com/embed/" + getId(urlVideo);

  return (
    <div
      className={className}
      style={{ maxWidth: `${width}px`, width: "100%" }}
    >
      <Styles.Content>
        <iframe src={embed} allowFullScreen></iframe>
      </Styles.Content>
    </div>
  );
};

export default IframeVideo;
