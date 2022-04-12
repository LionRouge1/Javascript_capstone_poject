import './style.css';
import Icon from './assest/logo1.png';
import getData from './modules/homePage.js';
 
const mylogo = new Image();
mylogo.src = Icon;

const main = document.querySelector('main');

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);

const display = async () => {
 const meals = await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
 console.log(meals);
 meals.forEach(({strMeal, strMealThumb}) => {
  console.log(strMealThumb);
  const article = `
  <article>
   <div class="meal_img"><img src="${strMealThumb}" alt=""></div>
   <div class="title"><h3>${strMeal}</h3><span><i class="fas fa-thumbs-up"></i></span></div>
   <button class="btn_comment">Comments</button>
  </article>`;
  main.insertAdjacentHTML('beforeend', article);
 });
};
display();