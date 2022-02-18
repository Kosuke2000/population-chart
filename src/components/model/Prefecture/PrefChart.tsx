import { VFC } from "react";
import React from "react";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefCheckBoxProps {
  prefectures: Prefecture[];
}

export const PrefChart: VFC<PrefCheckBoxProps> = ({ prefectures }) => {
  return (
    <div className="flex flex-wrap gap-8 py-20 px-40">
      {prefectures.map((prefecture, i) => {
        return (
          <p key={i} className="w-24 text-xl">
            <input
              type="checkbox"
              value={prefecture.prefCode}
              className="mr-2"
            />
            {prefecture.prefName}
          </p>
        );
      })}
    </div>
  );
};
