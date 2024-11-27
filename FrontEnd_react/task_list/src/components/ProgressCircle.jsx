import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage = 0 }) => {
  return (
    <div style={{ width: 25, height: 25 }}>
      <CircularProgressbar value={percentage} strokeWidth={20} />
    </div>
  );
};

export default ProgressCircle;
