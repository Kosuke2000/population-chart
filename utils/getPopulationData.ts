import axios from "axios";

export interface PopulationStructure {
  boundaryYear: number;
  data: { label: string; data: PopulationData[] }[];
}

type PopulationData = { year: number; value: number };

interface Res<T> {
  result: T;
}

export const getPopulationData = async (prefCode: number, prefName: string) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;

  const data = axios
    .get<Res<PopulationStructure>>(url, {
      headers: {
        "X-API-KEY": "lZmXRyVGhnRr08YMP1aWoKJrKwSiHCaio0t3uK4Y",
      },
    })
    .then((res) => res.data)
    .then((res) => {
      const populationData = res.result.data[0].data.map((item) => item.value);
      const newData: Highcharts.SeriesOptionsType = {
        type: "line",
        data: populationData,
        name: prefName,
      };
      return newData;
    });

  return data;
};
