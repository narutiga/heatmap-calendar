import { FC } from "react";

export type HeatmapProps = {
  value: {
    date: string;
    count: number;
  }[];
  containerSize: string;
  color: string[];
  step: number;
};

export type HeatmapComponent = FC<HeatmapProps>;
