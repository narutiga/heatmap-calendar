import { HeatmapComponent } from "./index.d";

export const Heatmap: HeatmapComponent = (props) => {
  const firstDay = new Date(props.value[0].date).getDay();

  const getColor = (count: number) => {
    if (count === 0) return props.color[0];
    if (count < props.step) return props.color[1];
    if (count < props.step * 2) return props.color[2];
    if (count < props.step * 3) return props.color[3];
    return props.color[4];
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
