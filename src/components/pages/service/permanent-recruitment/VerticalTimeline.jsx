import TimelineItem from "./TimelineItem";

const VerticalTimeline = ({ events }) => {
  return (
    <div className="relative flex flex-col items-center py-8">
      {/* Vertical Line */}
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-primary"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className={`flex w-full justify-${index % 2 === 0 ? "end" : "start"} mx-8 mb-8`}
        >
          <TimelineItem event={event} isLeft={index % 2 === 0} />
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
