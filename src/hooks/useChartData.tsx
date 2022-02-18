import { useState, useEffect } from "react";

import axios from "@/pages/api/api";

// prefCodeを受け取り、その人口構成データを返す
type PopulationYearlyData = {
  year: number;
  value: number;
};

type PopulationData = {
  prefName: string;
  prefPopuData: number[];
};

export const useChartData = (prefCode: number, prefName: string) => {
  const [chartData, setChartData] = useState<PopulationData[]>([]);

  async function fetchPopulationData() {
    const request = await axios.get(
      `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
    );
    const prefPopuData: number[] = [];
    request.data.result.data[0].data.map((x: PopulationYearlyData) => {
      prefPopuData.push(x.value);
      return prefPopuData;
    });

    const checkedPrefData: PopulationData = {
      prefName: prefName,
      prefPopuData: prefPopuData,
    };

    chartData.push(checkedPrefData);
    setChartData(chartData);

    return chartData;
  }

  useEffect(() => {
    fetchPopulationData();
  });

  console.log({ chartData });
  return { chartData };
};
