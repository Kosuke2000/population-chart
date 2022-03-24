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

  if (error) return <div>failed to load</div>;
  if (!result) return <div>Data is loading ...</div>;

  return (
    <main className="flex flex-col gap-8 items-center py-8 w-full">
      <div className="grid justify-between justify-items-start w-full max-w-3xl grid-template-col-4">
        {result.map((prefecture, i) => (
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
