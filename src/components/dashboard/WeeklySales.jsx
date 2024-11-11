import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import {
  grays,
  themeColors,
  getPosition,
  numberFormatter,
} from "../../helpers/utils.js";

const getOption = (data, dataBackground) => ({
  tooltip: {
    trigger: "axis",
    padding: [7, 10],
    formatter: "{b1}: {c1}",
    backgroundColor: grays.white,
    borderColor: grays["300"],
    borderWidth: 1,
    textStyle: { color: themeColors.dark },
    transitionDuration: 0,
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    },
  },
  xAxis: {
    type: "category",
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    boundaryGap: false,
    axisLine: { show: false },
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
    axisPointer: { type: "none" },
  },
  series: [
    {
      type: "bar",
      barWidth: "5px",
      barGap: "-100%",
      itemStyle: {
        color: grays["200"],
        borderRadius: 10,
      },
      data: dataBackground,
      animation: false,
      emphasis: { itemStyle: { color: grays["200"] } },
    },
    {
      type: "bar",
      barWidth: "5px",
      itemStyle: {
        color: themeColors.primary,
        borderRadius: 10,
      },
      data: data,
      emphasis: { itemStyle: { color: themeColors.primary } },
      z: 10,
    },
  ],
  grid: { right: 5, left: 10, top: 0, bottom: 0 },
});

const WeeklySales = ({ data }) => {
  const chartRef = useRef(null);
  const total = data.reduce((total, currentValue) => total + currentValue, 0);
  const yMax = Math.max(...data);
  const dataBackground = data.map(() => yMax);

  // useEffect(() => {
  //   const chartInstance = chartRef.current?.getEchartsInstance();
  //   if (chartInstance) {
  //     chartInstance.resize();
  //   }
  // }, [data]);

  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100 ecommerce-card-min-width">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2 d-flex align-items-center">
            Weekly Sales
            <span
              className="ms-1 text-400"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Calculated according to last week's sales"
            >
              <span
                className="far fa-question-circle"
                data-fa-transform="shrink-1"
              ></span>
            </span>
          </h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row">
            <div className="col">
              <p className="font-sans-serif lh-1 mb-1 fs-4">$47K</p>
              <span className="badge badge-soft-success rounded-pill fs--2">
                +3.5%
              </span>
            </div>
            <div
              className="col-auto ps-0"
              style={{ width: "10rem", height: "3.625rem" }}
            >
              <ReactECharts
                ref={chartRef}
                echarts={echarts}
                option={getOption(data, dataBackground)}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySales;
