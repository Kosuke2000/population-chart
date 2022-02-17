export type Prefecture = {
  prefCode: number;
  prefName: string;
  prefData: number[];
};

interface PrefectureProps {
  prefecture: Prefecture;
}

interface PrefectureListProps {
  prefectures: Prefecture[];
}
