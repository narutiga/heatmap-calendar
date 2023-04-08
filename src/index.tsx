import React from "react";
import { Tooltip } from "@radix-ui/react-tooltip";
import "tailwindcss/tailwind.css";

type HeatmapData = { date: string; count: number }[];

interface HeatmapProps {
  data: HeatmapData;
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  const halfYearAgo = new Date();
  halfYearAgo.setMonth(halfYearAgo.getMonth() - 6);

  const filteredData = data.filter(
    (item) => new Date(item.date) >= halfYearAgo
  );

  const getColor = (count: number) => {
    if (count >= 9) return "bg-heatmap-pink-500";
    if (count >= 7) return "bg-heatmap-pink-400";
    if (count >= 5) return "bg-heatmap-pink-300";
    if (count >= 3) return "bg-heatmap-pink-200";
    return "bg-heatmap-pink-100";
  };

  const renderMonths = () => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      const month = new Date();
      month.setMonth(month.getMonth() - i);
      months.push(month.toLocaleString("en-US", { month: "short" }));
    }
    return months.reverse().join("");
  };

  const renderWeekdays = () => {
    const weekdays = ["Mon", "Wed", "Fri"];
    return weekdays.map((weekday, index) => (
      <div key={index} className="text-xs">
        {weekday}
      </div>
    ));
  };

  const renderHeatmap = () => {
    return filteredData.map((item) => {
      const count = item.count;
      const color = getColor(count);
      return (
        <Tooltip key={item.date}>
          <div className={`w-3 h-3 ${color} rounded-sm`}></div>
        </Tooltip>
      );
    });
  };
  // tooltipContent={item.count}  ?content={`Count: ${count}`}

  return (
    <div className="flex flex-col">
      <div className="text-xs mb-1">{renderMonths()}</div>
      <div className="flex">
        <div className="flex flex-col mr-1">{renderWeekdays()}</div>
        <div className="grid grid-cols-7 gap-1">{renderHeatmap()}</div>
      </div>
    </div>
  );
};

export default Heatmap;
