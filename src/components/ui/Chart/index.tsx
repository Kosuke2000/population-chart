import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { VFC } from "react";

/// Highchartsに流し込むデータの型
/// 実際に使うときはこんな感じ：{type: 'line', data: [1, 2, 3], name: 'データラベル'}
export type Series = Highcharts.SeriesOptionsType[] | never[];

// グラフのX軸
const CATEGORIES = [
  "1960",
  "1965",
  "1970",
  "1975",
  "1980",
  "1985",
  "1990",
  "1995",
  "2000",
  "2005",
  "2010",
  "2015",
  "2020",
  "2025",
  "2030",
  "2035",
  "2040",
  "2045",
];

export interface Props {
  series: Series;
}

export const Chart: VFC<Props> = ({ series }) => {
  const options: Highcharts.Options = {
    series: series,
    title: {
      style: {
        display: "none",
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      layout: "vertical",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: CATEGORIES,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
  };

  return (
    <div style={{ width: `100%`, maxWidth: `800px` }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
