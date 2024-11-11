import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import formatDate from "../utils/formateTime";
function VolumeChart({ data, zoom, onZoom }) {
  const options = {
    title: {
      text: "Trade Volume",
    },
    dataZoom: [
      {
        id: "dataZoomX",
        type: "inside",
        xAxisIndex: [0],
        filterMode: "filter",
        start: zoom[0],
        end: zoom[1],
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: data.timestamp.map(formatDate),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: data.volume,
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} onEvents={{ dataZoom: onZoom }} />
    </div>
  );
}

export default VolumeChart;
