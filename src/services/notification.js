export default {
  pushDownload(type, title, uuid, notifList) {
    notifList.push({
      uuid: uuid,
      type: type,
      title: title,
      state: 'waiting',
      desc: 'Please wait. We are creating your project !',
    });
    return notifList;
  },

  pushDownloaded(type, title, uuid, notifList) {
    notifList.push({
      uuid: uuid,
      type: type,
      title: title,
      state: 'finished',
      desc: 'Your project is ready !',
    });
    return notifList;
  },

  pushUpload(type, title, uuid, notifList) {
    notifList.push({
      uuid: uuid,
      type: type,
      title: title,
      state: 'waiting',
      desc: 'Please wait. We are creating your project !',
    });
    return notifList;
  },

  pushUploaded(type, title, uuid, url, notifList) {
    notifList.push({
      uuid: uuid,
      type: type,
      title: title,
      state: 'finished',
      desc: 'Your project is ready !',
      url: url,
    });
    return notifList;
  },

  remove(uuid, notifList) {
    return notifList.filter((item) => {
      return item.uuid !== uuid;
    });
  },
};
