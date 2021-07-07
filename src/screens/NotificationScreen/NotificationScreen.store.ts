import {
  makeAutoObservable,
  action,
  flow,
  makeObservable,
  computed,
  observable,
  autorun,
} from 'mobx';
import { getNotificationListAPI } from 'api/notification/notification.api';
import {
  GetNotificationsResponse,
  NotificationData,
} from 'api/notification/notification.api.types';

export const SELECT_MODE = {
  IDLE: 'IDLE',
  SELECT: 'SELECT',
  SELECT_ALL: 'SELECT_ALL',
};

export const FETCH_STATUS = {
  IDLE: 'IDLE',
  FETCH_NEXT: 'FETCH_NEXT',
  FETCH_NEW: 'FETCH_NEW',
  REFRESH: 'REFRESH',
};

export class NotificationItem {
  id: string = '';
  time: string = '';
  title: string = '';
  message: string = '';
  selected: boolean = false;
  read_time: string | null = null;
  constructor({
    id,
    time,
    title,
    message,
    read_time,
  }: {
    id: string;
    time: string;
    title: string;
    message: string;
    read_time?: string;
  }) {
    this.id = id;
    this.time = time;
    this.title = title;
    this.message = message;
    this.read_time = read_time ?? null;
    makeAutoObservable(this, {
      toggleSelect: action,
      select: action,
      deselect: action,
      readMessage: action,
    });
  }

  toggleSelect() {
    this.selected = !this.selected;
  }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  readMessage() {
    this.read_time = new Date().toISOString();
  }
}

class NotificationScreenStore {
  data: Record<string, NotificationItem> = {};
  selectMode = SELECT_MODE.IDLE;
  fetchStatus = FETCH_STATUS.IDLE;
  current_page: number = 1;
  constructor() {
    makeObservable(this, {
      list: computed,
      data: observable,
      selectMode: observable,
      fetchStatus: observable,
      fetchNotification: action,
      fetchNew: flow,
      fetchNext: flow,
      refresh: flow,
      setFetchStatus: action,
      setSelectMode: action,
      selectAll: action,
      deselectAll: action,
    });
  }

  get list() {
    return Object.values(this.data);
  }

  selectAll() {
    this.list.forEach((item: NotificationItem) => {
      item.select();
    });
  }

  deselectAll() {
    this.list.forEach((item: NotificationItem) => {
      item.deselect();
    });
  }

  setSelectMode(mode: string) {
    this.selectMode = mode;
  }

  setFetchStatus(status: string) {
    this.fetchStatus = status;
  }

  async fetchNotification(page: number, mode: string) {
    try {
      if (this.fetchStatus !== FETCH_STATUS.IDLE) return;
      this.setFetchStatus(mode);
      const response = await getNotificationListAPI({ page });
      this.setFetchStatus(FETCH_STATUS.IDLE);
      return response.data;
    } catch (error) {
      this.setFetchStatus(FETCH_STATUS.IDLE);
      console.warn('fetchNotification', { error });
      return [];
    }
  }

  *fetchNew() {
    try {
      const response: GetNotificationsResponse = yield this.fetchNotification(
        1,
        FETCH_STATUS.FETCH_NEW,
      );
      const { data } = response;
      this.data = convertNotification(data);
    } catch (error) {
      console.warn('fetchNew', { error });
    }
  }

  *refresh() {
    try {
      const response: GetNotificationsResponse = yield this.fetchNotification(
        1,
        FETCH_STATUS.REFRESH,
      );
      const { data } = response;

      this.data = convertNotification(data);
    } catch (error) {
      console.warn('refresh', error);
    }
  }

  *fetchNext() {
    try {
      const nextPage = this.current_page + 1;
      const response: GetNotificationsResponse = yield this.fetchNotification(
        nextPage,
        FETCH_STATUS.FETCH_NEXT,
      );
      const { data } = response;
      const newNotifications = convertNotification(data);
      this.data = { ...this.data, ...newNotifications };
    } catch (error) {
      console.warn('fetchNext', error);
    }
  }
}

function convertNotification(data: NotificationData[]) {
  const result: Record<string, NotificationItem> = {};
  data.forEach(noti => {
    result[noti.id] = new NotificationItem({
      id: noti.id,
      time: noti.time,
      title: noti.title,
      message: noti.message,
    });
  });
  return result;
}

const notificationScreenStore = new NotificationScreenStore();

autorun(() => {
  let selectedCount = 0;
  notificationScreenStore.list.forEach(item => {
    if (item.selected) selectedCount++;
  });

  if (selectedCount === 0) {
    notificationScreenStore.setSelectMode(SELECT_MODE.IDLE);
  } else if (selectedCount < notificationScreenStore.list.length) {
    notificationScreenStore.setSelectMode(SELECT_MODE.SELECT);
  } else {
    notificationScreenStore.setSelectMode(SELECT_MODE.SELECT_ALL);
  }
});

export default notificationScreenStore;
