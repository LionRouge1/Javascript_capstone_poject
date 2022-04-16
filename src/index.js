/* eslint-disable prefer-template */
/* eslint-disable camelcase */
import './style.css';
import './style_mobile.css';
import Icon from './assest/logo1.png';
import getData from './modules/homePage.js';
import Likes from './modules/Likes.js';
import CalculeLike from './modules/CalculeLike.js';
import handleForm, { getCommentData } from './modules/comment.js';

const mylogo = new Image();
mylogo.src = Icon;
const logo = document.querySelector('.logo');
logo.appendChild(mylogo);

const container = document.querySelector('.meals_container');

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
     <div class="like_box">
       <span class="nbr_like"></span>
       <span 
       style="color: ${liked.includes('item_' + idMeal) ? '#ed1c24' : ''}" 
       liked="${liked.includes('item_' + idMeal) ? 'true' : 'false'}" 
       class="fas fa-thumbs-up" id="item_${idMeal}"></span>
       <span class="pop"></span>
     </div>
   </div>
   <p class="inst">${strInstructions.slice(0, 100)}....</p>
   <p class="CA"><span><strong>Category:</strong> ${strCategory}</span><span><strong>Area:</strong> ${strArea}</span></p>
   <button id=${idMeal} class="btn_comment btn" data-id="${idMeal}" >Comments</button>
   
  </article>`;
    container.insertAdjacentHTML('beforeend', article);
  });
};

const ftnLikes = async () => {
  const like_icon = document.querySelectorAll('.fa-thumbs-up');
  like_icon.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const nbrLike = e.target.previousSibling;
      const likeIcon = e.target;
      const calLike = await CalculeLike(+nbrLike.textContent, likeIcon.id);
      const i = calLike.toString();
 
      nbrLike.textContent = i;
     

      // if (likeIcon.getAttribute('liked') === 'false') {
      //   likeIcon.style.color = '#ed1c24';
      //   likeIcon.setAttribute('liked', 'true');
      //   nbrLike.textContent = i;
      // } else if ((likeIcon.getAttribute('liked') === 'true')) {
      //   likeIcon.style.color = '';
      //   likeIcon.setAttribute('liked', 'false');
      //   nbrLike.textContent = iNbr - 1;
      // }
    });
  });
};

const decliment = (number, elem) => {
  if (elem.getAttribute('liked') === 'false') {
    elem.style.color = '#ed1c24';
    elem.setAttribute('liked', 'true');
    elem.previousSibling.textContent = number ;
  } else if ((elem.getAttribute('liked') === 'true')) {
    elem.style.color = '';
    elem.setAttribute('liked', 'false');
    elem.previousSibling.textContent = number - 1;
  }
}

const dplLikes = async () => {
  const sdLink = new Likes();
  sdLink.getLikes().then((value) => {
    value.forEach(({ likes, item_id }) => {
      const item = document.getElementById(item_id);
      item.previousSibling.textContent = likes;
      item.nextElementSibling.textContent = item.previousSibling.textContent + ((likes > 1) ? ' likes' : ' like');

      item.parentElement.addEventListener('mouseover', () => {
        item.nextElementSibling.style.visibility = 'visible';
        item.nextElementSibling.style.opacity = 1;
      });

      item.parentElement.addEventListener('mouseout', () => {
        item.nextElementSibling.style.visibility = 'hidden';
        item.nextElementSibling.style.opacity = 0;
      });

      item.addEventListener('click', () => {
        decliment(likes, item);
      })
    });
  });
};

// button comments

const ftnComment = () => {
  const btnComment = document.querySelectorAll('.btn');
  btnComment.forEach((element) => {
    element.addEventListener('click', async (e) => {
      getCommentData(e.target.id);
    });
  });
};

display()
  .then(dplLikes)
  .then(ftnLikes)
  .then(ftnComment);

// Message popup on like button

const bars = document.getElementById('bars');
const nav = document.querySelector('nav');
bars.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

/* comment place */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  handleForm(e);
});
