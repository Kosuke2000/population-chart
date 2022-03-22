import axios from "axios";
import useSWR from "swr";

export interface Res<T> {
  result: T;
}

export const useResas = <T>(path: string) => {
  const fetcher = (url: string) =>
    axios
      .get<Res<T>>(url, {
        headers: {
          "X-API-KEY": "lZmXRyVGhnRr08YMP1aWoKJrKwSiHCaio0t3uK4Y",
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR(
    `https://opendata.resas-portal.go.jp/${path}`,
    fetcher
  );
  const result = data?.result;

  return { result, error };
};
