import { VFC } from "react";

import { usePopulationData } from "@/hooks/usePopulationData";
import { usePrefecture } from "@/hooks/usePrefectures";

import { PrefCheckBox } from "@/components/model/Prefecture/PrefCheckBox";

export const TopPageView: VFC = () => {
  usePopulationData(11);
  const { prefectures } = usePrefecture();
  console.log({ prefectures });

  return (
    <main className="">
      <PrefCheckBox prefectures={prefectures} />
    </main>
  );
};
