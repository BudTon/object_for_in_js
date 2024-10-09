import { orderByProps } from './js/orderByProps.js'
// const { orderByProps } = require('./js/orderByProps.js');

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

console.log(orderByProps(obj, ["name", "attack"]));
