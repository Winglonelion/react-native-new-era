export type GetPaidOverViewParameters = {
  userId: string;
};

export type GetPaidOverViewResponse = {
  take_home: number;
  gross: number;
  hours: number;
  rate: number;
  regular: number;
  over_time: number;
  detail: { type: string; value: number }[];
};

export type GetPaidHistoryOverViewParameters = {
  userId: string;
};

export type GetPaidHistoryOverViewResponse = {
  date: string;
  take_home: number;
  gross: number;
  hours: number;
}[];
