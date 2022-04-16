import Likes from './Likes.js';

const CalculeLike = async (nber, itm) => {
  const sdLink = new Likes(itm);
  const check = sdLink.postLikes();
  console.log(check);

  if (check) {
    nber += 1;
    return nber;
  }

  return nber;
};
export default CalculeLike;