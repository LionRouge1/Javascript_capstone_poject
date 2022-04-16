import Likes from './Likes.js';

const CalculeLike = async (nber, itm) => {
  const sdLink = new Likes(itm);
  const check = await sdLink.postLikes();

  if (check) {
    nber += 1;
    return nber;
  }
  
  return nber;
};
export default CalculeLike;