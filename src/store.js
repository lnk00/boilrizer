import { writable } from 'svelte/store';
import Notification from './services/notification';

export const selectedBoilr = writable({title: 'Angular'});
export const notifs = createNotif();

function createNotif() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    pushDownload: (type, title) => update(Notification.pushDownload.bind(this, type, title)),
    remove: (type, title) => update(Notification.remove.bind(this, type, title)),
    pushUpload: (type, title) => update(Notification.pushUpload.bind(this, type, title)),
    reset: () => set([])
  };
}