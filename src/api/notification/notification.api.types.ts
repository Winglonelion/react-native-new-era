export type NotificationData = {
  id: string;
  time: string;
  title: string;
  message: string;
  read_time?: string | null;
  sender: { id: string; name: string };
};
export type GetNotificationsResponse = {
  data: NotificationData[];
  totals: number;
};

export type GetNotificationParameters = {
  page: number;
  limit?: number;
};
