/* eslint-disable new-cap */

import getComment from './modules/comenttest.js';

test('comment length', () => {
  document.body.innerHTML = '<div>'
+ '<ul id="list"><li></li><li></li></ul>'
+ '</div>';
  const list = document.querySelectorAll('#list li');
  expect(getComment(list)).toBe(2);
});