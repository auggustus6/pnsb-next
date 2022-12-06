import * as Styles from "./styles";

type IframeVideoProps = {
  className?: string;
  urlVideo: string;
  width?: number;
};

const IframeVideo = ({
  className,
  urlVideo,
  width = 800,
}: IframeVideoProps) => {
  const embed = urlVideo.replace("watch?v=", "embed/");
  return (
    <div className={className} style={{maxWidth: `${width}px`, width: "100%"}}>
      <Styles.Content>
        <iframe src={embed} allowFullScreen></iframe>
      </Styles.Content>
    </div>
  );
};

export default IframeVideo;
