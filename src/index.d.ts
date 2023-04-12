import { FC } from "react";

export type LegendProps = {
  colorLevels: string[];
};

export type LegendComponent = FC<LegendProps>;

export type HeatmapProps = {
  value: {
    date: string;
    count: number;
  }[];
  w?: string;
  colorLevels?: string[];
  colorRangeStep?: number;
};

export type HeatmapComponent = FC<HeatmapProps>;
