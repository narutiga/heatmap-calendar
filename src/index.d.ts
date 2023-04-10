import { FC } from "react";

export type HeatmapProps = {
  value: {
    date: string;
    count: number;
  }[];
  containerSize?: string;
  colorLevels?: string[];
  colorRangeStep?: number;
};

export type HeatmapComponent = FC<HeatmapProps>;
