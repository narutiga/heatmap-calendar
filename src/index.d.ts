import { FC } from "react";

export type LegendProps = {
  colorLevels: string[];
};

export type LegendComponent = FC<LegendProps>;

export type DataPoint = {
  date: string;
  count: number;
};

export type HeatmapProps = {
  value: DataPoint[];
  endDate?: string;
  w?: string;
  colorLevels?: string[];
  colorRangeStep?: number;
};

export type HeatmapComponent = FC<HeatmapProps>;
