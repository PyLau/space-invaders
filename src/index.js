import _ from 'lodash';
import './style.scss';
import Logo from './laulogo.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  

  const myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
