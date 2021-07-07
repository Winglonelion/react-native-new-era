import {
  action,
  autorun,
  computed,
  flow,
  makeAutoObservable,
  makeObservable,
  observable,
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
  sender: { id: string; name: string };
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
    selected = false,
    sender,
  }: {
    sender: { id: string; name: string };
    id: string;
    time: string;
    title: string;
    message: string;
    read_time?: string | null;
    selected?: boolean;
  }) {
    this.id = id;
    this.time = time;
    this.title = title;
    this.message = message;
    this.read_time = read_time ?? null;
    this.selected = selected;
    this.sender = sender;
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

  markAsRead() {
    if (this.selectMode === SELECT_MODE.IDLE) return;

    this.list.forEach(noti => {
      if (noti.selected && !noti.read_time) noti.readMessage();
    });
    this.deselectAll();
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
      if (!response) return;
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
      if (!response) return;
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
      if (!response) return;
      const { data } = response;
      const newNotifications = convertNotification(data, this.selectMode);
      this.data = { ...this.data, ...newNotifications };
    } catch (error) {
      console.warn('fetchNext', error);
    }
  }
}

function convertNotification(data: NotificationData[], selectMode?: string) {
  const result: Record<string, NotificationItem> = {};

  const selected = selectMode === SELECT_MODE.SELECT_ALL;
  data.forEach(noti => {
    result[noti.id] = new NotificationItem({
      selected,
      id: noti.id,
      time: noti.time,
      title: noti.title,
      message: noti.message,
      read_time: noti.read_time,
      sender: noti.sender,
    });
  });
  return result;
}

const notificationScreenStore = new NotificationScreenStore();

/**
 * automation manage select mode,
 * so not necessary to manual set select mode
 * **/
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
