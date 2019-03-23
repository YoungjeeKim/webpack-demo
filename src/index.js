// lodash를 모듈로 가져오는 방법 : CommonJS 스펙
// var _ = require('lodash');

// 차세대 자바스크립트 es6 방식의 모듈 가져오는 방법 : import
import _ from 'lodash';
import './style.css';
import './hello.scss';

// named import 반드시 {} 안에 동일한 이름으로 넣어야한다.
import {area, circumference} from "./js/circle";
// default import {} 없이 가져올 수 있고, 이름을 마음대로 바꿀 수 있다.
import xxx from './js/cube'

'./js/circle';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(5), circumference(5));
console.log(xxx(5));