export default class Likes {
  constructor(itemId = '', url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7NaeKDfq7oZ1XEIy2sV/likes/') {
    this.itemId = itemId;
    this.url = url;
    this.liked = localStorage.getItem('liked') != null
      ? JSON.parse(localStorage.getItem('liked'))
      : '';
    this.data = {
      item_id : this.itemId,
    };
  }

  saveLiked(TSave = this.liked) {
    const storeLiked = JSON.stringify(TSave);
    localStorage.setItem('liked', storeLiked);
  }

  async getLikes() {
    const response = await fetch(this.url);
    const json = await response.json();
    return json;
  }

  async postLikes() {
    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.data),
    };

    if (this.liked === '' || this.liked.lenght === 0) {
      const response = fetch(this.url, option);
      response.then(() => {
        this.liked = [this.data];
        this.saveLiked();
      });

      return true;
    };

    const likedSort = this.liked.map((item) => item.item_id);

    if (likedSort.includes(this.itemId)) {

      return false;

    } else {
      const response = fetch(this.url, option);
      response.then(() => {
      this.liked.push(this.data);
      this.saveLiked();
    });

    return true;
    };
  }
}
