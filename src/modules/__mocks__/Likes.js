export default class Likes {
  constructor(itemId, url = '') {
    this.itemId = itemId;
    this.url = url;
  }

  async postLikes() {
    if (this.itemId >= 0) {
      return true;
    }
    return false;
  }
}
