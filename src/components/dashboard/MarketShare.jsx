import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import {
  grays,
  getPosition,
  isIterableArray,
  numberFormatter,
} from "../../helpers/utils";
import MarketShareItem from "./MarketShareItem.jsx";

// Fonction pour obtenir l'option du graphique
const getOption = (data) => ({
  color: data.map((d) => d.color),
  tooltip: {
    trigger: "item",
    padding: [7, 10],
    backgroundColor: grays.white,
    textStyle: { color: grays.black },
    transitionDuration: 0,
    borderColor: grays["300"],
    borderWidth: 1,
    formatter: function (params) {
      return `<strong>${params.data.name}:</strong> ${params.percent}%`;
    },
  },
  position(pos, params, dom, rect, size) {
    return getPosition(pos, params, dom, rect, size);
  },
  legend: { show: false },
  series: [
    {
      type: "pie",
      radius: ["100%", "87%"],
      avoidLabelOverlap: false,
      emphasis: { scale: true }, // Remplace hoverAnimation
      itemStyle: {
        borderWidth: 2,
        borderColor: "#fff",
      },
      labelLine: { show: false }, // Directement sous labelLine sans hiérarchie normal
      data: data,
    },
  ],
});

const MarketShare = ({ data }) => {
  const chartRef = useRef(null);

  // useEffect(() => {
  //   const chartInstance = chartRef.current?.getEchartsInstance();
  //   if (chartInstance) {
  //     chartInstance.resize();
  //   }
  // }, [data]);

  const totalShare = data
    .map((d) => d.value)
    .reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-body">
          <div className="row h-100 justify-content-between g-0">
            <div className="col-5 col-sm-6 col-xxl pe-2">
              <h6 className="mt-1">Market Share</h6>
              <div className="fs--2 mt-3">
                {isIterableArray(data) &&
                  data.map(({ id, ...rest }) => (
                    <MarketShareItem
                      {...rest}
                      totalShare={totalShare}
                      key={id}
                    />
                  ))}
              </div>
            </div>
            <div
              className="col-auto position-relative"
              style={{ width: "6.625rem", height: "6.625rem" }}
            >
              <ReactECharts
                ref={chartRef}
                echarts={echarts}
                option={getOption(data)}
                style={{ width: "100%", height: "100%" }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-dark fs-2">
                {numberFormatter(totalShare, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketShare;
