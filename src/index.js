import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], '');

    return element;
}

document.body.appendChild(component());