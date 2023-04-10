import { HeatmapComponent } from "./index.d";

const DEFAULT_CONTAINER_SIZE = "50rem";

const DEFAULT_COLOR_LEVELS = [
  "bg-gray-50",
  "bg-rose-100",
  "bg-rose-200",
  "bg-rose-300",
  "bg-rose-400",
];

const DEFAULT_COLOR_RANGE_STEP = 10;

export const Heatmap: HeatmapComponent = ({
  value,
  containerSize = DEFAULT_CONTAINER_SIZE,
  colorLevels = DEFAULT_COLOR_LEVELS,
  colorRangeStep = DEFAULT_COLOR_RANGE_STEP,
}) => {
  const firstDay = new Date(value[0].date).getDay();

  const getColor = (count: number) => {
    if (count === 0) return colorLevels[0];
    if (count < colorRangeStep) return colorLevels[1];
    if (count < colorRangeStep * 2) return colorLevels[2];
    if (count < colorRangeStep * 3) return colorLevels[3];
    return colorLevels[4];
  };

  return (
    <div className={`@container w-[${containerSize}]`}>
      <div
        className={`grid grid-flow-col grid-rows-7 gap-0.5 row-start-${firstDay}`}
      >
        {value.map((item, index) => {
          const color = getColor(item.count);
          return (
            <div
              key={index}
              className={`aspect-square rounded-sm ${color}`}
              title={item.date}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
