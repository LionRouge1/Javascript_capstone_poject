const commentSec = document.querySelector('.comment-section');
const commentInput = document.querySelector('.comment-input');
const commentArea = document.querySelector('.comment-area');
const commentList = document.querySelector('.comment-list');
const divDisplayComment = document.querySelector('.comment-head');

const $COMMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVOwqNGpcgqvMdjwkC7C';

// display comment
const displaycomment = (data) => {
  commentInput.value = '';
  commentArea.value = '';
  if (data.length) {
    divDisplayComment.innerHTML = data.length;
  }
  data.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `${comment.creation_date} ${comment.username}:  ${comment.comment}`;
    commentList.appendChild(li);
  });
};

// fetch comment
export const getComment = async (mealId) => {
  await fetch(`${$COMMENT_URL}/comments?item_id=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      displaycomment(data);
    });
};

/* comment display */
const postInfo = document.querySelector('.post-info');
commentSec.style.display = 'none';
export const displayCommentData = (id, data) => {
  const mealId = id;
  getComment(mealId);
  data.forEach((element) => {
    postInfo.innerHTML = ` <img src="${element.strMealThumb}" alt="" class="comment-img">
          <h1 class="meal-name"> ${element.strMeal}</h1>
          <p class ="food-instruction"><h1>Recipe:&nbsp;</h1> ${element.strInstructions}</p>
          <ul class="food-details">
          <p class = "bar">
              <li><h4>Category:</h4> ${element.strCategory}</li></p>
              <p class = "bar"><li><h4>Area:</h4> ${element.strArea}</li></p>
              </ul>
              `;
  });
  commentSec.style.display = 'inherit';
  commentSec.dataset.id = mealId;
};

const createComment = async ({ itemId, username, comment }, url) => {
  await fetch(`${url}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  commentList.innerHTML = '';
  getComment(itemId);
};

const handleForm = (e) => {
  e.preventDefault();
  const obj = {
    itemId: commentSec.dataset.id,
    username: commentInput.value,
    comment: commentArea.value,
  };

  createComment(obj, $COMMENT_URL);

  commentInput.value = '';
  commentArea.value = '';
};

const closeModal = document.querySelector('.close-icon');
closeModal.addEventListener('click', () => {
  commentList.innerHTML = '';
  commentSec.style.display = 'none';
});
export default handleForm;

/* get comment data */
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const getCommentData = async (id) => {
  await fetch(`${mealUrl}${id}`)
    .then((res) => res.json())
    .then((data) => displayCommentData(id, data.meals));
};