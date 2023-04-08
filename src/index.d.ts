import React from "react";

export type HeatmapData = { date: Date; count: number }[];

export interface HeatmapProps {
  data: HeatmapData;
}

declare const Heatmap: React.FC<HeatmapProps>;
export default Heatmap;
