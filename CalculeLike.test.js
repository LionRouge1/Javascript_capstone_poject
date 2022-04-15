jest.mock('./src/modules/Likes.js');
import CalculeLike from "./src/modules/CalculeLike";

describe('Likes counter', () => {
 test("test with 3", async () => {
  document.body.innerHTML =
  '<div>' +
  '  <span id="username">3</span>' +
  '</div>';
 
  const content = +document.querySelector('#username').textContent;
  expect(await CalculeLike(content)).toBe(4);
 });

 test("test with 0", async () => {
  document.body.innerHTML =
  '<div>' +
  '  <span id="username">0</span>' +
  '</div>';
 
  const content = +document.querySelector('#username').textContent;
  expect(await CalculeLike(content)).toBe(1);
 })
})
