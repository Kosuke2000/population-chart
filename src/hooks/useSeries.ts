import { useState } from "react";

import { Series } from "@/components/ui/Chart/index";

import { getPopulationData } from "utils/getPopulationData";

// prefectureを受け取り、seriesとそれを更新する関数を返す
export function useSeries(): [
  Series,
  (prefCode: number, prefName: string) => Promise<void>,
  (prefCode: number, prefName: string) => void
] {
  const [series, setSeries] = useState<Series>([]);

  //prefCodeを受け取り、その人口データをseriesにセットする
  const addSeries = async (prefCode: number, prefName: string) => {
    // 人口データを取得
    const newData = await getPopulationData(prefCode, prefName);
    // seriesにその人口データを追加
    // seriesを更新
    return setSeries([...series, newData]);
  };

  const deleteSeries = (prefCode: number, prefName: string) => {
    // series内の prefNameと合致するデータを取得 & その人口データをseriesから削除
    const newSeries = series.filter((o): o is Highcharts.SeriesOptionsType => {
      return typeof o.name && o.name !== prefName;
    });
    // seriesを更新
    setSeries([...newSeries]);
  };

  return [series, addSeries, deleteSeries];
}
