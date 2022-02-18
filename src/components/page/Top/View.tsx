import { VFC } from "react";

import { useChartData } from "@/hooks/useChartData";
import { usePrefecture } from "@/hooks/usePrefectures";

import { PrefChart } from "@/components/model/Prefecture/PrefChart";

export const TopPageView: VFC = () => {
  useChartData(11, "東京");
  const { prefectures } = usePrefecture();

  return (
    <main className="">
      <PrefChart prefectures={prefectures} />
    </main>
  );
};
