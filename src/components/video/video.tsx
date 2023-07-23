import { Props } from "~/components/video/types";

export const Video: React.FC<Props> = ({ videoKey }: Props) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoKey}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
);
