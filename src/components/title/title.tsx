import { Title as BaseTitle } from "~/components/title/title.styles";
import { Props } from "~/components/title/types";

export const Title: React.FC<Props> = ({ children, inverted = false }: Props) => (
  <BaseTitle inverted={inverted}>{children}</BaseTitle>
);
