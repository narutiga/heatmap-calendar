import { FC } from "react";

const DEFAULT_CONTAINER_SIZE = "50rem";

const DEFAULT_COLOR_LEVELS = [
  "bg-gray-50",
  "bg-rose-100",
  "bg-rose-200",
  "bg-rose-300",
  "bg-rose-400",
];

const DEFAULT_COLOR_RANGE_STEP = 10;

export type HeatmapProps = {
  value: {
    date: string;
    count: number;
  }[];
  containerSize: string = DEFAULT_CONTAINER_SIZE;
  colorLevels: string[] = DEFAULT_COLOR_LEVELS;
  colorRangeStep: number = DEFAULT_COLOR_RANGE_STEP;
};

export type HeatmapComponent = FC<HeatmapProps>;
