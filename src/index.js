import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // lodash now imported by this script
    // element.innerHTML = _.join(['Hello', 'Webpack'], '');

    // using the myName function import
    element.textContent = myName('Cody');

    return element;
}

document.body.appendChild(component());