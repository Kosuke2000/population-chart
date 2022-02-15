import { VFC } from "react";

import { Prefecture } from "@/types/Prefecture";

interface PrefChartProps {
  prefectures: Prefecture[];
}

// Prefeture型データの配列を受け取り、チェックボックスリストとして返す
export const PrefChart: VFC<PrefChartProps> = ({ prefectures }) => {
  return <></>;
};
