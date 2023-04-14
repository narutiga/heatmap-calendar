import { FC } from "react";

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

export type HeatmapComponent = FC<HeatmapProps>;
