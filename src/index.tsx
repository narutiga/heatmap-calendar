import { HeatmapComponent } from "./index.d";

export const Heatmap: HeatmapComponent = (props) => {
  const firstDay = new Date(props.value[0].date).getDay();

  const getColor = (count: number) => {
    if (count === 0) return props.colorLevels[0];
    if (count < props.colorRangeStep) return props.colorLevels[1];
    if (count < props.colorRangeStep * 2) return props.colorLevels[2];
    if (count < props.colorRangeStep * 3) return props.colorLevels[3];
    return props.colorLevels[4];
  };

  return (
    <div className={`@container w-[${props.containerSize}]`}>
      <div
        className={`grid grid-flow-col grid-rows-7 gap-0.5 row-start-${firstDay}`}
      >
        {props.value.map((item, index) => {
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
