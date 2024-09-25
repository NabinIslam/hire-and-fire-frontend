import TimelineStep1 from "./TimelineStep1";
import TimelineStep2 from "./TimelineStep2";
import TimelineStep3 from "./TimelineStep3";
import TimelineStep4 from "./TimelineStep4";
import TimelineStep5 from "./TimelineStep5";
import { TbArrowMoveDown } from "react-icons/tb";

const SVGTimeline = () => {
  return (
    <div>
      {/* step - 1 */}
      <TimelineStep1 />

      <TbArrowMoveDown className="mx-auto my-20 text-center text-5xl text-primary lg:hidden" />

      {/* step - 2 */}
      <TimelineStep2 />

      <TbArrowMoveDown className="mx-auto my-20 text-center text-5xl text-primary lg:hidden" />

      {/* step - 3 */}
      <TimelineStep3 />

      <TbArrowMoveDown className="mx-auto my-20 text-center text-5xl text-primary lg:hidden" />

      {/* step - 4 */}
      <TimelineStep4 />

      <TbArrowMoveDown className="mx-auto my-20 text-center text-5xl text-primary lg:hidden" />

      {/* step - 5 */}
      <TimelineStep5 />
    </div>
  );
};

export default SVGTimeline;
