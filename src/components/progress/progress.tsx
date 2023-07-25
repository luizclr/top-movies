import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { ProgressContainer } from "~/components/progress/progress.styles";
import { Props } from "~/components/progress/types";

export const Progress: React.FC<Props> = ({ value, text = "" }: Props) => {
  return (
    <ProgressContainer>
      <CircularProgressbar
        value={value}
        text={`${text}%`}
        strokeWidth={12}
        styles={buildStyles({
          textSize: "30px",
          pathColor: "#77dd77",
          textColor: "#77dd77",
          trailColor: "rgba(0, 0, 0, 0)",
        })}
      />
    </ProgressContainer>
  );
};
