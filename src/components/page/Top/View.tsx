import { VFC } from "react";

import { useResas } from "@/hooks/useResas";
import { useSeries } from "@/hooks/useSeries";

import { Prefecture } from "@/types/Prefecture";

import { PrefCheckbox } from "@/components/model/Prefecture/PrefCheckbox";

import { Chart } from "@/components/ui/Chart";

export const TopPageView: VFC = () => {
  const [series, addSeries, deleteSeries] = useSeries();
  const { result, error } = useResas<Prefecture[]>("/api/v1/prefectures");
  console.log({ series });

  return (
    <main className="flex flex-col gap-12 items-center">
      <div className="flex flex-wrap gap-4 w-full max-w-3xl">
        {result &&
          result.map((prefecture, i) => (
            <PrefCheckbox
              prefecture={prefecture}
              on={addSeries}
              off={deleteSeries}
              key={i}
            />
          ))}
      </div>
      <Chart series={series} />
    </main>
  );
};
