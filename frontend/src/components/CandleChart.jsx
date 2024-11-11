import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import formatDate from "../utils/formateTime";
function CandleChart({ data, zoom, onZoom }) {
  const options = {
    title: {
      text: "Stock Performance",
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
        type: "cross",
      },
    },
    xAxis: {
      type: "category",
      data: data.timestamp.map(formatDate),
    },
    yAxis: {
      scale: true,
    },
    series: [
      {
        type: "candlestick",
        data: data.data,
      },
    ],
  };

  return (
    <div>
      <div className="mb-3"></div>
      <ReactECharts option={options} onEvents={{ dataZoom: onZoom }} />
    </div>
  );
}

export default CandleChart;
