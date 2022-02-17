import { VFC } from "react";
import React from "react";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefCheckBoxProps {
  prefectures: Prefecture[];
}

export const PrefCheckBox: VFC<PrefCheckBoxProps> = ({ prefectures }) => {
  return (
    <div>
      {prefectures.map((prefecture, i) => {
        return <p key={i}>{prefecture.prefName}</p>;
      })}
    </div>
  );
};
