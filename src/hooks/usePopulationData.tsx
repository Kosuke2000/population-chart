import { useState, useEffect } from "react";

import axios from "@/pages/api/api";

// prefCodeを受け取り、その人口構成データを返す
// type PopulationData = {
//   year: number;
//   value: number;
// };

export const usePopulationData = (prefCode: number) => {
  const [populationData, setPopulation] = useState([]);

  async function fetchPopulationData() {
    const request = await axios.get(
      `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
    );
    setPopulation(request.data.result.data[0].data);
    return request;
  }

  useEffect(() => {
    fetchPopulationData();
  }, []);
  console.log({ populationData });
};
