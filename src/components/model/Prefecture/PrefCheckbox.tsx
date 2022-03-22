import { useState, VFC } from "react";

import { Prefecture } from "@/types/Prefecture";

export interface PrefCheckboxProps {
  prefecture: Prefecture;
  on: (prefCode: number, prefName: string) => Promise<void>;
  off: (prefCode: number, prefName: string) => void;
}

// prefectureを受け取り、チェックボックスの見た目を返す
export const PrefCheckbox: VFC<PrefCheckboxProps> = ({
  prefecture,
  on,
  off,
}) => {
  const { prefCode, prefName } = prefecture;
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    // isChekedがfalseのとき
    if (!isChecked) {
      // addSeriesが発火
      on(prefCode, prefName);
      // isCheckedをtrueにする
      setIsChecked(true);
    } else {
      // isCheckedがtrueのとき
      // deleteSeriedが発火
      off(prefCode, prefName);
      // isCheckedがfalseになる
      setIsChecked(false);
    }
  };

  return (
    <div className="flex">
      <input checked={isChecked} onChange={onChange} type="checkbox" />
      <p>{prefName}</p>
    </div>
  );
};
