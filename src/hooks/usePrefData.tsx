import { useEffect, useState } from "react";

import axios from "@/pages/api/api";

// PrefCodeを受け取り、APIからデータを取得し、Prefecture型のdataをを返す
export const usePrefData = () => {
  const [prefData, setPrefData] = useState({});

  async function fetchData() {
    const request = await axios.get("/api/v1/prefectures");
    setPrefData({ request });

    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ prefData });

  return prefData;
};
