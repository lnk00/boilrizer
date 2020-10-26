
export default {
  pushDownload(type, title, notifList) {
    notifList.push({
      type: type,
      title: title,
      subject: 'download',
      desc: 'Please wait. We are creating your project !'
    });
    return notifList;
  },

  pushUpload(type, title, notifList) {
    notifList.push({
      type: type,
      title: title,
      subject: 'upload',
      desc: 'Please wait. We are creating your project !'
    });
    return notifList;
  },

  remove(type, title, notifList) {
    return notifList.filter((item) => {
      return item.title !== title;
    });
  }
}