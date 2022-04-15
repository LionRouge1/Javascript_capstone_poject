/* eslint-disable prefer-template */
/* eslint-disable camelcase */
import './style.css';
import './style_mobile.css';
import Icon from './assest/logo1.png';
import getData from './modules/homePage.js';
import Likes from './modules/Likes.js';
import handleForm, { displayCommentData } from './modules/comment.js';

const mylogo = new Image();
mylogo.src = Icon;

const container = document.querySelector('.meals_container');
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);
const display = async () => {
  const meals = await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  let liked = [];
  if (localStorage.getItem('liked') != null) {
    const lik = JSON.parse(localStorage.getItem('liked'));
    liked = lik.map((item) => item.item_id);
  }

  meals.forEach(({
    idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,
  }) => {
    const article = `
  <article>
   <div class="meal_img"><img src="${strMealThumb}" alt=""></div>
   <div class="title"><h3>${strMeal}</h3>
   <div class="like_box"><span class="nbr_like"></span><span style=" color: ${liked.includes('item_' + idMeal) ? '#ed1c24' : ''}" liked="${liked.includes('item_' + idMeal) ? 'true' : 'false'}" class="fas fa-thumbs-up" id="item_${idMeal}"></span></div>
   </div>
   <p class="inst">${strInstructions.slice(0, 100)}....</p>
   <p class="CA"><span><strong>Category:</strong> ${strCategory}</span><span><strong>Area:</strong> ${strArea}</span></p>
   <button id=${idMeal} class="btn_comment btn" data-id="${idMeal}" >Comments</button>
   
  </article>`;
    container.insertAdjacentHTML('beforeend', article);
  });
};

/* get comment data */
const getCommentData = async (id) => {
  await fetch(`${mealUrl}${id}`)
    .then((res) => res.json())
    .then((data) => displayCommentData(id, data.meals));
};

/* comment place */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  handleForm(e);
});

const ftnLikes = async () => {
  const likeIcon = document.querySelectorAll('.fa-thumbs-up');

  const btn = document.querySelectorAll('.btn');
  btn.forEach((it) => {
    it.addEventListener('click', (e) => {
      getCommentData(e.target.id);
    });
  });

  likeIcon.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const nbrLike = e.target.previousSibling;
      const likeIcon = e.target;
      let i = +nbrLike.textContent;
      const sdLink = new Likes(likeIcon.id);
      const check = await sdLink.postLikes();
      if (check) {
        i += 1;
        nbrLike.innerHTML = i;
      }

      if (likeIcon.getAttribute('liked') === 'false') {
        likeIcon.style.color = '#ed1c24';
        likeIcon.setAttribute('liked', 'true');
      } else if ((likeIcon.getAttribute('liked') === 'true')) {
        likeIcon.style.color = '';
        likeIcon.setAttribute('liked', 'false');
      }
    });
  });
};
display().then(ftnLikes);

const dplLikes = async () => {
  const sdLink = new Likes();
  sdLink.getLikes().then((value) => {
    value.forEach(({ likes, item_id }) => {
      document.getElementById(item_id).previousSibling.textContent = likes;
    });
  });
};
dplLikes();

const getb = async () => {

};
getb();
