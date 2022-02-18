import { VFC } from "react";

import { usePopulationData } from "@/hooks/usePopulationData";
import { usePrefecture } from "@/hooks/usePrefectures";

import { PrefChart } from "@/components/model/Prefecture/PrefChart";

export const TopPageView: VFC = () => {
  usePopulationData(11, "東京");
  const { prefectures } = usePrefecture();

  return (
    <main className="">
      <PrefChart prefectures={prefectures} />
    </main>
  );
};
