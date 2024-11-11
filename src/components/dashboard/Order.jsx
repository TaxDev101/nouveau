import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

import {
  grays,
  themeColors,
  rgbaColor,
  getPosition,
} from "../../helpers/utils.js";

const getOption = (data) => ({
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
    data: ["Week 1", "Week 2"],
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
      emphasis: { scale: true }, // Remplace hoverAnimation par emphasis.scale
      data: data,
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
});

const Order = ({ data }) => {
  const chartRef = useRef(null);

  // useEffect(() => {
  //   const chartInstance = chartRef.current?.getEchartsInstance();
  //   if (chartInstance) {
  //     chartInstance.resize();
  //   }
  // }, [data]);

  const total = data.reduce((total, currentValue) => total + currentValue, 0);
  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2">Taux de Recouvrements</h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row justify-content-between">
            <div className="col-auto align-self-end">
              <div className="fs-4 fw-normal font-sans-serif text-700 lh-1 mb-1">
                58.4K
              </div>
              <span className="badge rounded-pill fs--2 bg-200 text-primary">
                <span className="fas fa-caret-up me-1"></span>13.6%
              </span>
            </div>
            <div className="col-auto ps-0 mt-n4">
              <div
                className="col-auto ps-0"
                style={{ width: "10rem", height: "4.625rem" }}
              >
                <ReactECharts
                  ref={chartRef}
                  echarts={echarts}
                  option={getOption(data)}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
