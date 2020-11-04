import { writable } from 'svelte/store';
import Notification from './services/notification';

export const selectedBoilr = writable({ title: 'Angular' });
export const notifs = createNotif();

function createNotif() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    pushDownload: (type, title, uuid) =>
      update(Notification.pushDownload.bind(this, type, title, uuid)),
    pushDownloaded: (type, title, uuid) =>
      update(Notification.pushDownloaded.bind(this, type, title, uuid)),
    pushUpload: (type, title, uuid) =>
      update(Notification.pushUpload.bind(this, type, title, uuid)),
    pushUploaded: (type, title, uuid, url) =>
      update(Notification.pushUploaded.bind(this, type, title, uuid, url)),
    remove: (uuid) => update(Notification.remove.bind(this, uuid)),
    reset: () => set([]),
  };
}
