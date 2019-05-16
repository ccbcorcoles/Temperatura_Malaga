export const avg_Temp = [14, 13, 14, 16, 19, 25, 29, 29, 27, 21, 17, 17];
export const min_Temp = [11, 10, 11, 13, 16, 21, 24, 25, 23, 17, 14, 14];
export const max_Temp = [17, 16, 17, 19, 23, 27, 31, 31, 28, 23, 19, 19];

export interface TempStat {
  id: string;
  name: string;
  values: number[];
}

export const malagaStats: TempStat[] = [
  {
    id: "avg",
    name: "Average_Temp",
    values: [14, 13, 14, 16, 19, 25, 29, 29, 27, 21, 17, 17],
  },
  {
    id: "min",
    name: "Min_Temp",
    values: [11, 10, 11, 13, 16, 21, 24, 25, 23, 17, 14, 14],
  },
  {
    id: "max",
    name: "Max_Temp",
    values: [17, 16, 17, 19, 23, 27, 31, 31, 28, 23, 19, 19],
  }
];