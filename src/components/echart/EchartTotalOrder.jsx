import ReactECharts from "echarts-for-react";
import {
  grays,
  themeColors,
  rgbaColor,
  getPosition,
  numberFormatter,
} from "../../helpers/utils.js";

const EchartTotalOrder = () => {
  const options = {
    tooltip: {
      triggerOn: "mousemove",
      trigger: "axis",
      padding: [7, 10],
      formatter: "{b0}: {c0}",
      backgroundColor: grays.white,
      borderColor: grays["300"],
      borderWidth: 1,
      transitionDuration: 0,
      position(pos, params, dom, rect, size) {
        return getPosition(pos, params, dom, rect, size);
      },
      textStyle: { color: themeColors.dark },
    },
    xAxis: {
      type: "category",
      data: ["Week 4", "Week 5"],
      boundaryGap: false,
      splitLine: { show: false },
      axisLine: {
        show: false,
        lineStyle: {
          color: grays["300"],
          type: "dashed",
        },
      },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisPointer: { type: "none" },
    },
    yAxis: {
      type: "value",
      splitLine: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisPointer: { show: false },
    },
    series: [
      {
        type: "line",
        lineStyle: {
          color: themeColors.primary,
          width: 3,
        },
        itemStyle: {
          color: grays.white,
          borderColor: themeColors.primary,
          borderWidth: 2,
        },
        hoverAnimation: true,
        data: data,
        connectNulls: true,
        smooth: 0.6,
        smoothMonotone: "x",
        symbol: "circle",
        symbolSize: 8,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: rgbaColor(themeColors.primary, 0.25),
              },
              {
                offset: 1,
                color: rgbaColor(themeColors.primary, 0),
              },
            ],
          },
        },
      },
    ],
    grid: { bottom: "2%", top: "0%", right: "10px", left: "10px" },
  };

  return (
    <div className="echart-default-total-order">
      <ReactECharts
        option={options}
        style={{ height: "400px", width: "100%" }}
      />
    </div>
  );
};

export default EchartTotalOrder;
