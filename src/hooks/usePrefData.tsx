import { useEffect, useState } from "react";

import axios from "@/pages/api/api";

// 都道府県データを返す
type Prefecture = {
  prefCode: number;
  prefName: string;
};

export const usePrefecture = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  async function fetchData() {
    const request = await axios.get("/api/v1/prefectures");
    setPrefectures(request.data.result);
    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ prefectures });

  return { prefectures };
};
