import "./index.css";
import { FC } from "react";

// Type

type LegendProps = {
  colorLevels: string[];
};

type LegendComponent = FC<LegendProps>;

type DataPoint = {
  date: string;
  count: number;
};

type HeatmapProps = {
  value: DataPoint[];
  endDate?: string;
  w?: string;
  colorLevels?: string[];
  colorRangeStep?: number;
};

type HeatmapComponent = FC<HeatmapProps>;

// Default value

const getCurrentDateString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const END_DATE = getCurrentDateString();

const DEFAULT_WIDTH = "50rem";

const DEFAULT_COLOR_LEVELS = [
  "#f9fafb",
  "#ffe4e6",
  "#fecdd3",
  "#fda4af",
  "#fb7185",
];

const DEFAULT_COLOR_RANGE_STEP = 10;

// Function

const generateYearData = (data: DataPoint[], endDateStr: string) => {
  const firstDay = new Date(endDateStr).getDay();
  const endDate = new Date(endDateStr);
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 364 - firstDay);

  const dateCountMap = new Map<string, number>();
  data.forEach(({ date, count }) => {
    dateCountMap.set(date, count);
  });

  const result: DataPoint[] = [];
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().slice(0, 10);
    const count = dateCountMap.has(dateStr) ? dateCountMap.get(dateStr) : 0;
    result.push({ date: dateStr, count: count as number });
  }

  return result;
};

// Component

const Legend: LegendComponent = ({ colorLevels }) => {
  return (
    <div className="flex justify-end items-center mt-2">
      <p className="mr-1  text-gray-500 font-light">less</p>
      {colorLevels.map((color, index) => {
        return (
          <div
            key={index}
            className="mr-1 h-3 w-3 rounded-sm"
            style={{ backgroundColor: `${color}` }}
          ></div>
        );
      })}
      <p className="mr-8  text-gray-500 font-light">more</p>
    </div>
  );
};

export const Heatmap: HeatmapComponent = ({
  value,
  endDate = END_DATE,
  w = DEFAULT_WIDTH,
  colorLevels = DEFAULT_COLOR_LEVELS,
  colorRangeStep = DEFAULT_COLOR_RANGE_STEP,
}) => {
  const yearData = generateYearData(value, endDate);

  const getColor = (count: number) => {
    if (count === 0) return colorLevels[0];
    if (count < colorRangeStep) return colorLevels[1];
    if (count < colorRangeStep * 2) return colorLevels[2];
    if (count < colorRangeStep * 3) return colorLevels[3];
    return colorLevels[4];
  };

  return (
    <div style={{ width: `${w}` }}>
      <div className="grid grid-flow-col grid-rows-7 gap-0.5">
        {yearData.map((item, index) => {
          const color = getColor(item.count);
          return (
            <div
              key={index}
              className="aspect-square rounded-sm"
              style={{ backgroundColor: `${color}` }}
              title={item.date}
            ></div>
          );
        })}
      </div>
      <Legend colorLevels={colorLevels} />
    </div>
  );
};
