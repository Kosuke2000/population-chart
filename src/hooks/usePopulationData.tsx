import { useState, useEffect } from "react";

import axios from "@/pages/api/api";

// prefCodeを受け取り、その人口構成データを返す
type PopulationYearlyData = {
  year: number;
  value: number;
};

type PopulationData = {
  prefName: string;
  populationDataArray: PopulationYearlyData[];
};

export const usePopulationData = (prefCode: number, prefName: string) => {
  const [populationData, setPopulation] = useState<PopulationData[]>([]);

  async function fetchPopulationData() {
    const request = await axios.get(
      `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
    );

    const checkedData: PopulationData = {
      prefName: prefName,
      populationDataArray: request.data.result.data[0].data,
    };
    const addData = populationData.push(checkedData);
    setPopulation(populationData);

    return addData;
  }

  useEffect(() => {
    fetchPopulationData();
  });

  console.log({ populationData });
  return { populationData };
};
