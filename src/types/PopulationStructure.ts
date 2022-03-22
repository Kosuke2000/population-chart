export interface PopulationStructure {
  boundaryYear: number;
  data: { label: string; data: PopulationData[] }[];
}

type PopulationData = { year: number; value: number };
