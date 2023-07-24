import { Props } from "~/components/video/types";
import { BaseVideo, IFrame, IFrameContainer } from "~/components/video/video.styles";

export const Video: React.FC<Props> = ({ videoKey }: Props) => (
  <BaseVideo>
    <IFrameContainer>
      <IFrame
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </IFrameContainer>
  </BaseVideo>
);
