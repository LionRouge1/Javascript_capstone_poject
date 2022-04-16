import Likes from './Likes.js';

const CalculeLike = (nber, itm) => {

  if (itm) {
    nber += 1;
    return nber;
  }

  return nber;
};
export default CalculeLike;