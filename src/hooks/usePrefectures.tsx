import { useEffect, useState } from "react";

import axios from "@/pages/api/api";

// 都道府県データを返す

export const usePrefecture = () => {
  const [prefectures, setPrefectures] = useState([]);

  async function fetchData() {
    const request = await axios.get("/api/v1/prefectures");
    setPrefectures(request.data.result);
    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { prefectures };
};
